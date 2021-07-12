import React from "react";
import fetch from 'isomorphic-unfetch';
import { Formik } from 'formik';
import * as Yup from 'yup';

  const signUp = () => {

    return(
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            confirmPassword: "", 
          }}
          validationSchema={Yup.object({
            username: Yup.string()
            .matches(
              /^\w+$/,
              "Usernames can only consist of letters, numbers, and underscores."
            )
            .required("Please choose a username."),

            email: Yup.string()
            .required('Please enter your email address'),
            
            password: Yup.string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required("Please choose a password."),

            confirmPassword: Yup.string()
            .required("Please retype to confirm your password")
          })}

          onSubmit={async (values, {setFieldError}) => {

            if (values.password != values.confirmPassword) {
              setFieldError(
                "confirmPassword",
                "Hey! Looks like your passwords are angry with each other! They just don't match! Agh!"
              );  
            } else {

              try {
                const response = await fetch('/api/register.js', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(values),
                })

                const json = await response.json();

                if (response.status === 405) {
                  setFieldError("username", "The username is already taken")
                }

                if (response.status === 406) {
                  setFieldError("email", "The email address is already in use")
                }

                console.log(json.message);

                // setUserCredentials({
                //   email: "",
                //   username: "",
                //   password: "",
                //   confirmPassword: "",
                // });

                // router.replace("/auth/signin");

              } catch (error) {
                  console.log(
                    error
                  );
              }

            }
          }}
        >
          {formik => (
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            > 
              <label>Username: </label>
              <input 
                name="username"
                id="username"
                aria-describedby="at-sign"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                invalid={formik.touched.username && !!formik.errors.username}
              />
              <p>{formik.errors.username}</p>

              <label>Email: </label>
              <input 
                name="email"
                id="email"
                aria-describedby="at-sign"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                invalid={formik.touched.email && !!formik.errors.email}
              />
              <p>{formik.errors.email}</p>

              <label>Password: </label>
              <input
                name="password"
                id="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                invalid={formik.touched.password && !!formik.errors.password}
              />
              <p>{formik.errors.password}</p>

              <label>Confirm Password: </label>
              <input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                invalid={
                  formik.touched.confirmPassword &&
                  formik.values.confirmPassword != formik.values.password
                }
              />
              <p>
                {formik.errors.confirmPassword}
              </p>
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      )
  }

  export default signUp;