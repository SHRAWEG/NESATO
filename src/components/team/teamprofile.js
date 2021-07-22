import React from 'react';
import { useSession } from "next-auth/client";
import { Formik } from 'formik';
import fetch from 'isomorphic-unfetch';
import router from 'next/router';
import * as Yup from 'yup';


const Teamprofile = () => {
    const [session] = useSession();

    return (
        <>
            {session && (
                <div>
                    {session.user.email}
                </div>
            )}

            <div>
                <Formik
                    initialValues = {{
                        // team_id = 0,
                        team_name : "",
                        team_tag : "",
                    }} 
                    
                    validationSchema = {
                        Yup.object({
                            team_name: Yup.string()
                            .required("Please enter your Team Name"),

                            team_tag: Yup.string()
                            .required("Please enter your Team Tag")
                        })
                    }

                    onSubmit = {async (values) => {

                            try {
                                const response = await fetch('/api/teamProfile/teamprofileapi', {
                                    method  : 'POST',
                                    headers : {
                                        'Content-Type' : 'application/JSON'
                                    },
                                    body: JSON.stringify(values),
                                })

                                const json = await response.json();
                                console.log(json.message);

                                if (response.status == 200) {
                                    router.replace("/");
                                } 
                            } catch(error) {
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
                            onSubmit = {formik.handleSubmit}
                        >
                            <div>
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="firstname">
                                    Team / Clan Name
                                </label>
                                <input
                                    className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id = "team_name"
                                    name = "team_name"
                                    type = "text"
                                    placeholder = "Team Name"
                                    onChange = {formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value = {formik.values.team_name}
                                />
                                {
                                    formik.touched.team_name && formik.errors.team_name && (
                                        <p className = "text-red-500 text-sm font-medium w-80">
                                            {formik.errors.team_name}
                                        </p>
                                    )
                                }
                            </div>

                            <div>
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="firstname">
                                    Team / Clan Tag
                                </label>
                                <input
                                    className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id = "team_tag"
                                    name = "team_tag"
                                    type = "text"
                                    placeholder = "Team Tag"
                                    onChange = {formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value = {formik.values.team_tag}
                                />
                                {
                                    formik.touched.team_name && formik.errors.team_name && (
                                        <p className = "text-red-500 text-sm font-medium w-80">
                                            {formik.errors.team_tag}
                                        </p>
                                    )
                                }


                            </div>

                            <div className="flex flex-col items-between justify-evenly">
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 mt-6" type="submit">
                                Create Team
                            </button>
                            </div>

                        </form>

                    )}

                </Formik>
            </div>
        </>
    )
}

export default Teamprofile;
