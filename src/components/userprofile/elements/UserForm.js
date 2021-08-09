import React from 'react';
import { useState } from 'react';
import router from "next/router";
import { Formik } from 'formik';
import fetch from 'isomorphic-unfetch';
import * as Yup from 'yup';

function UserForm(props) {
    const inputClass = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
    const errorInputClass = "border-red-600 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"

    const [firstnameClass, setfirstnameClass] = useState(inputClass)
    const [lastnameClass, setlastnameClass] = useState(inputClass)
    const [streetClass, setstreetClass] = useState(inputClass)
    const [cityClass, setcityClass] = useState(inputClass)
    const [phoneClass, setphoneClass] = useState(inputClass)
    const [genderClass, setgenderClass] = useState(inputClass)
    const [dobClass, setdobClass] = useState(inputClass)

    let street;
    let city;

    if(props.self.address) {
        street = props.self.address.street
        city = props.self.address.city
    }

    return (
        <div className="w-full">
            <Formik
                initialValues= {{
                    firstname: props.self.firstname,
                    lastname: props.self.lastname,
                    street: street,
                    city: city,
                    gender: props.self.gender,
                    phone: props.self.phone,
                    dob: props.self.dob,
                    bio: props.self.bio
                }}

                validationSchema={
                    Yup.object({
                        firstname: Yup.string()
                        .required('Please enter your First name'),

                        lastname: Yup.string()
                        .required('Please enter your Last name'),

                        street: Yup.string()
                        .required('Please enter your street'),

                        city: Yup.string()
                        .required('Please enter your city'),

                        gender: Yup.string()
                        .required('Please specify your Gender'),

                        bio: Yup.string(),

                        phone: Yup.string()
                        .matches(
                            /^\(?([0-9]{10})\)?$/,
                            "Invalid Phone number"
                        )
                        .required('Please enter your Phone number'),

                        dob: Yup.date()
                        .required('Please enter your Date of Birth'),
                    })
                }

                onSubmit = { async (values) => {
                    try {
                        const response = await fetch('/api/userprofile/updateUserApi',{
                            method: 'POST',
                            headers: {
                                'Content-Type' : 'application/JSON'
                            },
                            body: JSON.stringify(values),
                        })

                        const json = await response.json();
                        console.log(json.message);

                        if (response.status == 200) {
                            router.replace("/userprofile/" + props.self._id );
                        }

                    } catch (error){
                        console.log(
                            error
                        );
                    }
                }}

            >

                {formik => (
                    <>
                    <form 
                        noValidate
                        onSubmit={formik.handleSubmit}
                    >
                        <legend className="text-2xl border-yellow-500 border-l-4 pl-2 mt-10">Basic Information</legend>
                        <div className="flex flex-col text-xl w-full ml-5 mt-2 pr-10">
                            <label className="mt-1 font-semibold" htmlFor="bio">
                                Bio:
                            </label>
                            <textarea 
                                type="text" 
                                id="bio" 
                                className="w-full h-32 border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-2xl resize-none p-2 pl-4"
                                name="bio"
                                placeholder="Write something about you..."
                                value = {formik.values.bio}
                                onChange = {formik.handleChange}
                                autoComplete = "off"
                            />
                        </div>

                        <legend className="text-2xl mb-1 border-yellow-500 border-l-4 pl-2 mt-10">
                            Personal Details 
                            <span className="ml-2 text-lg text-gray-400">
                                | This will be visible to you only
                            </span>
                        </legend>
                        <div className="flex gap-5 text-xl px-6 mt-2 justify-between w-full">
                            <div className="flex justify-between w-96">
                                <div className="flex flex-col gap-5">
                                    <label htmlFor="firstname" className="mt-1 font-semibold">
                                        First Name
                                        <span className="text-yellow-500 font-bold">*</span>:
                                    </label>
                                
                                    <label htmlFor="gender" className="mt-2 font-semibold">
                                        Gender
                                        <span className="text-yellow-500 font-bold">*</span>:
                                    </label>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* input for firstname */}
                                    {formik.touched.firstname && formik.errors.firstname && (
                                        setfirstnameClass(errorInputClass)
                                    )}
                                    {formik.touched.firstname && !formik.errors.firstname && (
                                        setfirstnameClass(inputClass)
                                    )}
                                    <input
                                        className={firstnameClass}
                                        id = "firstname"
                                        name = "firstname"
                                        type = "text"
                                        placeholder = "First Name"
                                        onChange = {formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value = {formik.values.firstname}
                                        autoComplete = "off"
                                    />

                                    {/* input for gender */}
                                    {formik.touched.gender && formik.errors.gender && (
                                        setgenderClass(errorInputClass)
                                    )}
                                    {formik.touched.gender && !formik.errors.gender && (
                                        setgenderClass(inputClass)
                                    )}
                                    <select
                                        className={genderClass}
                                        id = "gender"
                                        name = "gender"
                                        value = {formik.values.gender}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur} 
                                        autoComplete = "off"
                                    >
                                        <option value="">Choose your gender...</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                            </div>
                                

                            <div className="flex justify-between w-96">
                                <div className="flex flex-col gap-5">
                                    <label htmlFor="lastname" className="mt-1 font-semibold">
                                        Last Name
                                        <span className="text-yellow-500 font-bold">*</span>:
                                    </label>

                                    <label htmlFor="dob" className="mt-2 font-semibold">
                                        Date of Birth
                                        <span className="text-yellow-500 font-bold">*</span>:
                                    </label>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* input for lastname */}
                                    {formik.touched.lastname && formik.errors.lastname && (
                                        setlastnameClass(errorInputClass)
                                    )}
                                    {formik.touched.lastname && !formik.errors.lastname && (
                                        setlastnameClass(inputClass)
                                    )}
                                    <input
                                        className={lastnameClass}
                                        id = "lastname"
                                        name = "lastname"
                                        type = "text"
                                        placeholder = "Last Name"
                                        value = {formik.values.lastname}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        autoComplete = "off"
                                    />

                                    {/* input for date of birth */}
                                    {formik.touched.dob && formik.errors.dob && (
                                        setdobClass(errorInputClass)
                                    )}
                                    {formik.touched.dob && !formik.errors.dob && (
                                        setdobClass(inputClass)
                                    )}
                                    <input
                                        className={dobClass}
                                        id = "dob"
                                        name = "dob"
                                        type = "date"
                                        placeholder = "dob"
                                        value = {formik.values.dob}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    />
                                </div>
                            </div>

                        </div>
                        
                        <legend className="text-2xl border-yellow-500 border-l-4 pl-2 mt-12">
                            Address 
                            <span className="ml-2 text-lg text-gray-400">
                                | This will be visible to you only
                            </span>
                        </legend>
                        <div className="flex gap-5 text-xl px-6 mt-2 justify-between w-full">
                            <div className="flex justify-between w-96">
                                <div className="flex flex-col gap-5">
                                    <label htmlFor="street" className="mt-1 font-semibold">
                                        Street
                                        <span className="text-yellow-500 font-bold">*</span>:
                                    </label>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* input for street */}
                                    {formik.touched.street && formik.errors.street && (
                                        setstreetClass(errorInputClass)
                                    )}
                                    {formik.touched.street && !formik.errors.street && (
                                        setstreetClass(inputClass)
                                    )}
                                    <input
                                        className={streetClass}
                                        id = "street"
                                        name = "street"
                                        type = "text"
                                        placeholder = "Eg: Newroad"
                                        onChange = {formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value = {formik.values.street}
                                        autoComplete = "off"
                                    />
                                </div>
                            </div>
                                

                            <div className="flex justify-between w-96">
                                <div className="flex flex-col gap-5">
                                    <label htmlFor="city" className="mt-2 font-semibold">
                                        City/ District
                                        <span className="text-yellow-500 font-bold">*</span>:
                                    </label>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {formik.touched.city && formik.errors.city && (
                                        setcityClass(errorInputClass)
                                    )}
                                    {formik.touched.city && !formik.errors.city && (
                                        setcityClass(inputClass)
                                    )}
                                    <input
                                        className={cityClass}
                                        id = "city"
                                        name = "city"
                                        type = "text"
                                        placeholder = "Eg: Kathmandu"
                                        onChange = {formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value = {formik.values.city}
                                        autoComplete = "off"
                                    />
                                </div>
                            </div>
                        </div>

                        <legend className="text-2xl border-yellow-500 border-l-4 pl-2 mt-12">
                            Contact Details 
                            <span className="ml-2 text-lg text-gray-400">
                                | This will be visible to you only
                            </span>
                        </legend>
                        <div className="flex gap-5 text-xl px-6 mt-2 justify-between w-full">
                            <div className="flex justify-between w-96">
                                <div className="flex flex-col gap-5">
                                    <label htmlFor="phone" className="mt-1 font-semibold">
                                        Phone
                                        <span className="text-yellow-500 font-bold">*</span>:
                                    </label>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* input for phone */}
                                    {formik.touched.phone && formik.errors.phone && (
                                        setphoneClass(errorInputClass)
                                    )}
                                    {formik.touched.phone && !formik.errors.phone && (
                                        setphoneClass(inputClass)
                                    )}
                                    <input
                                        className={phoneClass}
                                        id = "phone"
                                        name = "phone"
                                        type = "text"
                                        placeholder = "Number"
                                        value = {formik.values.phone}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        autoComplete = "off"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-between justify-center mt-14">
                        <button className="bg-yellow-500 text-gray-900 hover:bg-gray-500 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1 w-40" type="submit">
                            Submit
                        </button>
                        </div>
                    </form>
                    </>
                )}

            </Formik>
        </div>
        
    )
}

export default UserForm;