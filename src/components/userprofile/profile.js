import React from 'react';
import { useState } from 'react';
import router from "next/router";
import { Formik } from 'formik';
import fetch from 'isomorphic-unfetch';
import * as Yup from 'yup';
import { useSession } from 'next-auth/client';

const Profile = () => {
    const [session] = useSession();
    const [errorMsg, setErrorMsg] = useState();

    return (
        <>
            {session && (
                <div>{session.user.email}</div>
            )}
            <div className = "bg-gray-200 font-body flex-col w-screen">
                <Formik
                    initialValues= {{
                        firstname:"",
                        lastname:"",
                        address:"",
                        gender:"",
                        phone:"",
                        // dob: new Date(),
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

                            // dob: Yup.date()
                            // .required('Please enter your Date of Birth'),
                        })
                    }

                    onSubmit = {async (values) => {
                        if(!session) {
                            redirect('/login')
                        }
                        else {
                            try {
                                const response = await fetch('/api/userprofile/userprofile',{
                                    method: 'POST',
                                    headers: {
                                        'Content-Type' : 'application/JSON'
                                    },
                                    body: JSON.stringify(values),
                                    // session: JSON.stringify(session.user.email),
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
                            }
                        }

                    }}

                >

                    {formik => (
                        <form 
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <div>

                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="firstname">
                                    First Name
                                </label>
                                <input
                                    className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id = "firstname"
                                    name = "firstname"
                                    type = "text"
                                    placeholder = "First Name"
                                    onChange = {formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value = {formik.values.firstname}
                                />
                                {
                                    formik.touched.firstname && formik.errors.firstname && (
                                        <p className = "text-red-500 text-sm font-medium w-80">
                                            {formik.errors.firstname}
                                        </p>
                                    )
                                }

                            </div>

                            <div>

                                <label>
                                    Last Name
                                </label>
                                <input
                                className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id = "lastname"
                                    name = "lastname"
                                    type = "text"
                                    placeholder = "Last Name"
                                    value = {formik.values.lastname}
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}
                                />
                                {
                                    formik.touched.lastname && formik.errors.lastname && (
                                        <p className = "text-red-500 text-sm font-medium w-80">
                                            {formik.errors.lastname}
                                        </p>
                                    )
                                }

                            </div>

                            <div>

                                <label>
                                    Address
                                </label>
                                <input
                                    id = "address"
                                    name = "address"
                                    type = "text"
                                    placeholder = "Address"
                                    value = {formik.values.address}
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}
                                />
                                {
                                    formik.touched.address && formik.errors.address && (
                                        <p className = "text-red-500 text-sm font-medium w-80">
                                            {formik.errors.address}
                                        </p>
                                    )
                                }
                            </div>

                            <div>
                                <label>
                                    Phone Number
                                </label>
                                <input
                                    id = "phone"
                                    name = "phone"
                                    type = "text"
                                    placeholder = "Number"
                                    value = {formik.values.phone}
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}
                                />
                                {
                                    formik.touched.phone && formik.errors.phone && (
                                        <p className = "text-red-500 text-sm font-medium w-80">
                                            {formik.errors.phone}
                                        </p>
                                    )
                                }
                            </div>

                            <div>
                                <label>
                                    Gender
                                </label>
                                <select 
                                id = "gender"
                                name = "gender"
                                placeholder = "Gender"
                                value = {formik.values.gender}
                                onChange = {formik.handleChange} 
                                >
                                    <option value=""> Selecy your gender </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                                {
                                    formik.touched.gender && formik.errors.number && (
                                        <p className = "text-red-500 text-sm font-medium w-80">
                                            {formik.errors.gender}
                                        </p>
                                    )
                                }

                            </div>

                            {/* <div>
                                <label>
                                    Date of Birth
                                </label>
                                <input
                                    id = "dob"
                                    name = "dob"
                                    type = "date"
                                    placeholder = "dob"
                                    value = {formik.values.dob}
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}
                                />
                                {
                                    formik.touched.dob && formik.errors.dob && (
                                        <p className = "text-red-500 text-sm font-medium w-80">
                                            {formik.errors.dob}
                                        </p>
                                    )
                                }
                            </div> */}
                            <div className="flex flex-col items-between justify-evenly">
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 mt-6" type="submit">
                                Submit
                            </button>
                            </div>
                        </form>
                    )}

                </Formik>
            </div>
        </>
    )
}

export default Profile;