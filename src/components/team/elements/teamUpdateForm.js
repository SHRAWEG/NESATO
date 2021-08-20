import React from 'react';
import { useState } from 'react';
import router from "next/router";
import { Formik } from 'formik';
import fetch from 'isomorphic-unfetch';
import * as Yup from 'yup';


export default function TeamUpdateForm(props) {
    const inputClass = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
    const errorInputClass = "border-red-600 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"

    const [teamnameClass, setteamnameClass] = useState(inputClass)

    let bio
    let player_count = props.team.players.length;
 
    if(props.team.bio){
        bio = props.team.bio
    }

    if(props.team.team_cap == props.user._id) {
        return (
            <>
            <div>
                <Formik

                    initialValues= {{
                        team_id : props.team._id,
                        team_name: props.team.team_name,
                        bio: props.team.bio
                    }}

                    validationSchema={
                        Yup.object({
                            team_name: Yup.string()
                            .required('Please enter your Team Name'),

                            bio: Yup.string(),
                        })
                    }

                    onSubmit = {
                        async (values) => {
                            try {
                                const response = await fetch('/api/team/updateTeamApi',{
                                    method: 'POST',
                                    headers: {
                                        'Content-Type' : 'application/JSON'
                                    },
                                    body: JSON.stringify(values),
                                    
                                })

                                const json = await response.json();
                                console.log(json.message);
            
                                if (response.status == 200) {
                                    router.replace("/team/" + props.team._id );
                                }
        
                            } catch (error){
                                console.log(
                                    error
                                );
                            }
                        }
                    }
                > 

                    {formik => (
                        <>
                            <form
                                noValidate
                                onSubmit={formik.handleSubmit}
                                className="mt-5"
                            >
                                {(player_count <= 1) && (

                                    <>
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="team_name" className="mt-1 font-semibold">
                                                Team Name
                                                <span className="text-yellow-500 font-bold">*</span>:
                                            </label>
                                        </legend>

                                        {/* input for firstname */}
                                        {formik.touched.team_name && formik.errors.team_name && (
                                        setteamnameClass(errorInputClass)
                                        )}
                                        {formik.touched.team_name && !formik.errors.team_name && (
                                        setteamnameClass(inputClass)
                                        )}
                                        <input
                                            className={teamnameClass}
                                            id = "team_name"
                                            name = "team_name"
                                            type = "text"
                                            placeholder = "Team Name"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.team_name}
                                            autoComplete = "off"
                                        />
                                    </div>
                                    </>

                                )
                                    
                                }
                                

                                <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">Basic Information</legend>
                                <div id="bio" className="text-xl w-full ml-3 mt-5 font-semibold">
                                    <label htmlFor="bio">Bio:</label>
                                    <textarea 
                                        id="bio" 
                                        type = "text"
                                        className="w-full h-32 border-gray-200 border-2 focus:outline-none focus:border-yellow-200 rounded-2xl resize-none pl-2 pt-2 font-paragraph" 
                                        name="bio"
                                        placeholder="Write something about your Team"
                                        value = {formik.values.bio}
                                        onChange = {formik.handleChange}
                                        autoComplete = "off"
                                    >
                                        {props.team.bio}
                                    </textarea>
                                </div>

                                <div className="flex items-between justify-center mt-14">
                                    <button className="bg-yellow-500 text-gray-900 hover:bg-gray-500 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1 w-40" type="submit">
                                        Done
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </Formik>
            </div>
            </>
        )
    } else {
        return router.replace("/")
    }
}