import React from "react";
import Head from "next/head"
import Link from "next/link";
import router from "next/router";
import HeadLogo from '../Header';
import { useState } from "react";
import { providers, signIn, useSession } from "next-auth/client";
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
    const [session] = useSession();
    const [errorMsg, setErrorMsg] = useState();

    return (
        <>
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

                        onSubmit={async (values) => {
                            if(!session) {
                                try {
                                    const response = await signIn("credentials", {
                                        redirect: false,
                                        email: values.email,
                                        password: values.password,
                                    });

                                    console.log(response.error);

                                    if (response.error) {
                                        setErrorMsg(response.error)
                                    }

                                    if (!response.error) {
                                        router.replace("/");
                                    }
    
                                } catch (error) {
                                        console.log(
                                        error
                                        );
                                    }
                            } else {
                                router.push("/");
                            }
                        }}
                    >
                        {formik => (
                            <form
                                noValidate
                                onSubmit={formik.handleSubmit}
                            >   
                                <p className="text-red-500 text-lg font-semibold w-80 text-center mb-4">
                                        {errorMsg}
                                </p>
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
                                        Sign In
                                    </button>
                                </div>
                                <p className="pt-3 flex justify-center">Not registered? Go and&nbsp;<Link href="/signup" passHref><a className="text-yellow-500 hover:text-yellow-700 font-bold">Sign Up</a></Link>&nbsp;right now!</p>
                            </form>
                            )}
                    </Formik>
                    <div className="flex flex-col items-between justify-evenly">
                                    <button 
                                    className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 mt-6"
                                    onClick={() => signIn("discord")}
                                    >
                                        Sign In with Discord
                                    </button>
                                </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
