import React from 'react';
import { Formik } from 'formik';
import fetch from 'isomorphic-unfetch';
import router from 'next/router';
import * as Yup from 'yup';


const createTeam = () => {

        return (
            <>
                <div className ="flex flex-col bg-white p-16 rounded-3xl shadow-2xl">
                    <Formik
                        initialValues = {{
                            team_name : "",
                            team_tag : "",
                            game: "",
                        }} 
                        
                        validationSchema = {
                            Yup.object({
                                team_name: Yup.string()
                                .required("Please enter your Team Name"),

                                team_tag: Yup.string()
                                .required("Please enter your Team Tag"),

                                game: Yup.string()
                                .required('Please choose the game'),
                            })
                        }

                        onSubmit = {async (values) => {

                                try {
                                    const response = await fetch('/api/team/createteamApi', {
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

                                    else {
                                        alert(json.message)
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
                                    <label className="block text-gray-700 text-lg font-bold" htmlFor="firstname">
                                        Team / Clan Name
                                    </label>
                                    {
                                        formik.touched.team_name && formik.errors.team_name && (
                                            <p className = "text-red-500 text-sm font-medium w-80">
                                                {formik.errors.team_name}
                                            </p>
                                        )
                                    }
                                    <input
                                        className="shadow appearance-none border w-80 rounded-md py-2 px-3 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id = "team_name"
                                        name = "team_name"
                                        type = "text"
                                        placeholder = "Team Name"
                                        onChange = {formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value = {formik.values.team_name}
                                    />  
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-lg font-bold" htmlFor="firstname">
                                        Team / Clan Tag
                                    </label>
                                    {
                                        formik.touched.team_tag && formik.errors.team_tag && (
                                            <p className = "text-red-500 text-sm font-medium w-80">
                                                {formik.errors.team_tag}
                                            </p>
                                        )
                                    }
                                    <input
                                        className="shadow appearance-none border w-80 rounded-md py-2 px-3 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id = "team_tag"
                                        name = "team_tag"
                                        type = "text"
                                        placeholder = "Team Tag"
                                        onChange = {formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value = {formik.values.team_tag}
                                    /> 
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-lg font-bold">
                                        Game
                                    </label>
                                    {
                                        formik.touched.game && formik.errors.game && (
                                            <p className = "text-red-500 text-sm font-medium w-80">
                                                {formik.errors.game}
                                            </p>
                                        )
                                    }
                                    <select 
                                        className="shadow appearance-none border w-80 rounded-md py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id = "game"
                                        name = "game"
                                        value = {formik.values.game}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur} 
                                    >
                                        <option value="">Choose the game</option>
                                        <option value="DOTA">DOTA</option>
                                        <option value="CSGO">CSGO</option>
                                        <option value="PUBG MOBILE">PUBG MOBILE</option>
                                        <option value="MLBB">MOBILE LEGENDS</option>
                                    </select>
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

export default createTeam;
