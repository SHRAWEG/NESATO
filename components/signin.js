import React from "react";
import Head from "next/head"
import Link from "next/link";
import router from "next/router";
import HeadLogo from '../components/headLogo';
import fetch from 'isomorphic-unfetch';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
    return (
        <>
            <Head>
            <title>
                Sign up
            </title>
            </Head>
            <div className="bg-gray-200 font-body flex flex-col w-screen items-center h-full min-h-screen" >
                <HeadLogo/>

                <div className="bg-white max-w-md rounded-3xl shadow-lg mt-20 slideup">
                    <div className="mx-10 my-10">
                        <Formik
                            initialValues={{
                            email: "",
                            password: "",
                            }}
                            validationSchema={Yup.object({
                            email: Yup.string()
                            .email('Please enter valid email address')
                            .required('Please enter your email address'),
                            
                            password: Yup.string()
                            .min(8, 'Password should be of minimum 8 characters length')
                            .required("Please choose a password."),
                            })}

                            onSubmit={async (values, {setFieldError}) => {
                                try {
                                const response = await fetch('/api/auth/authenticate', {
                                    method: 'POST',
                                    headers: {
                                    'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(values),
                                })

                                const json = await response.json();

                                if (response.status === 405) {
                                    setFieldError("email", "No such email address exists")
                                }

                                if (response.status === 406) {
                                    setFieldError("password", "Password do not match. Please try again.")
                                }

                                console.log(json.message);

                                } catch (error) {
                                    console.log(
                                    error
                                    );
                                }

                            }
                            }
                        >
                            {formik => (
                                <form
                                    noValidate
                                    onSubmit={formik.handleSubmit}
                                >
                                    <div className="mb-4"> 
                                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                    className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="email"
                                    id="email"
                                    aria-describedby="at-sign"
                                    type="text"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-sm font-medium w-80">
                                            {formik.errors.email}
                                        </p>
                                        )}
                                    </div>

                                    <div className="mb-4"> 
                                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                    className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <p className="text-red-500 text-sm font-medium w-80">
                                            {formik.errors.password}
                                        </p>
                                        )}
                                    </div>

                                    <div className="flex flex-col items-between justify-evenly">
                                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 mt-6" type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                    <p className="pt-3 flex justify-center">No account! Go and&nbsp;<Link href="/signup" passHref><a className="text-yellow-500 hover:text-yellow-700 font-bold">Sign Up</a></Link>&nbsp;right now!</p>
                                </form>
                                )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
