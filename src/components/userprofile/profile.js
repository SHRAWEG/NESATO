import React from 'react';
import Link from 'next/link';

import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Head from 'next/head';
import Image from 'next/dist/client/image';

import HeadLogo from '../Head'
import { signIn } from 'next-auth/client';
import router from 'next/router';

const Profile = () => {


    const [userInformation, setUserInformation] = useState({
        firstname:"",
        lastname:"",
        address:"",
        gender:"",
        phone:"",
        dob:""
    })

    const [session] = useSession();
    const [errorMsg, setErrorMsg] = useState();

    return (
        <>
            <div className = "bg-gray-200 font-body flexex-col w-screen">

                {/* logo */}
                <HeadLogo/>
                <Formik
                    initialValues= {{
                        firstname:"",
                        lastname:"",
                        address:"",
                        gender:"",
                        phone:"",
                        dob: new Date(),
                        // platform:{
                        //     mobile:false,
                        //     pc:false,
                        // }
                    }}

                    validationSchema={
                        Yup.object({
                            firstname: Yup.string()
                            .required('Please enter your First name'),

                            lastname: Yup.string()
                            .required('Please enter your Last name'),

                            address: Yup.string()
                            .required('Please enter your address'),

                            gender: Yup.string()
                            .required('Please specify your Gender'),

                            phone: Yup.string()
                            .required('Please enter your Phone number'),

                            dob: Yup.date()
                            .required('Please enter your Date of Birth'),
                        })
                    }

                    onSubmit = {async (values) => {
                        if(!session) {
                            setErrorMsg(
                                "Not logged In, Please log in to update your profile"
                            )
                        }
                        else {
                            try {
                                const response = await fetch('components/userprofile/api/profile',{
                                    method = 'POST',
                                    headers: {
                                        'Content-Type' : 'application/JSON'
                                    },
                                    body: JSON.stringify(values),
                                })

                                const json = await response.json();
                                console.log(json.message);

                                if (response.status == 200) {
                                    router.replace("/");
                                }

                            } catch (error){
                                console.log(
                                    error
                                );
                                return response.error;
                            }
                        }

                    }}

                >

                    {formil => (
                        <form 
                            noValidate
                            onSubmit={Formik.handleSubmit}
                        >
                            <div>
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="firstname">
                                First Name
                            </label>
                            <input
                                className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id = "firstname"
                                name = "firsttname"
                                type = "text"
                                placeholder = "First Name"
                                value = {formik.values.firstname}
                                onchange = {formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.firstname && formik.errors.firstname && (
                                    <p classnName = "text-red-500 text-sm font-medium w-80">
                                        {formik.errors.username}
                                    </p>
                                )
                            }
                        </div>

                        <div>
                            <label>
                                Last Name
                            </label>
                            <input
                                id = "lastname"
                                type = "text"
                                placeholder = "Last Name"
                                value = {lastname}
                                name = "lasttname"
                                onchange = {handleChange}
                                required 
                            />
                        </div>

                        <div>
                            <label>
                                Address
                            </label>
                            <input
                                id = "address"
                                type = "text"
                                placeholder = "Address"
                                value = {address}
                                name = "address"
                                onchange = {handleChange}
                                required 
                            />
                        </div>

                        <div>
                            <label>
                                Phone Number
                            </label>
                            <input
                                id = "number"
                                type = "text"
                                placeholder = "Number"
                                value = {number}
                                name = "number"
                                onchange = {handleChange}
                                required 
                            />
                        </div>

                        <div>
                            <label>
                                Gender
                            </label>
                            <select id = "dob">
                                <option value="male">option1</option>
                                <option value="female">option2</option>
                                <option value="others">option3</option>
                            </select>
                        </div>

                        <div>
                            <label>
                                Address
                            </label>
                            <input
                                id = "dob"
                                type = "date"
                                placeholder = "dob"
                                value = {dob}
                                name = "dob"
                                onchange = {handleChange}
                                required 
                            />
                        </div>
                        </form>
                    )}

                </Formik>
            </div>
        </>
    )
}