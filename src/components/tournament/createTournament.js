// tournament_name 
// organizer
// max_participants_size - 128
// max_team_size - if subs = 7 or else 5
// creation_date(DATE AND TIME)
// registration_start_date (DATE AND TIME),
// registration_end_date (DATE AND tIME),
// tournament_start_date (date only),
// tournament_end_date (date only and manual),

// for future integration
// isVerified,
// payment_approval
// rules

import React from 'react';
import { Formik } from 'formik';
import fetch from 'isomorphic-unfetch';
import router from 'next/router';
import * as Yup from 'yup';
// import { date } from 'yup/lib/locale';

export default function CreateTournament() {
    return (
        <>
            <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5 mb-10">
                <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 items-center mt-36" id="midMain">
                    <Formik
                        initialValues = {{
                            tournament_name : "",
                            organizer : "",
                            max_participants_size : 0,
                            max_team_size : 0,
                            creation_date : "",
                            registration_start_date : "",
                            registration_start_time: "",
                            registration_end_date : "",
                            registration_end_time : "", 
                            tournament_start_date : "",
                        }}

                        validationSchema = {
                            Yup.object({
                                tournament_name : Yup.string()
                                .required("Please enter a name for the Tournament"),

                                organizer : Yup.string(),

                                max_team_size : Yup.number(),
                                
                                max_participants_size : Yup.number()
                                // .moreThan(4, "Should be more than 2 and less than 128")
                                // .lessThan(128, "Should be more than 2 and less than 128")
                                // .positive('value should be positive')
                                ,

                                registration_start_date : Yup.date()
                                .required("Please set registeration start date"),

                                registration_start_time : Yup.string()
                                .required("Please set registeration start time"),

                                registration_end_date : Yup.date()
                                .required("Please set registeration end date"),

                                registration_end_time : Yup.string()
                                .required("Please set registeration end time"),

                                tournament_start_date : Yup.date()
                                .required("Please set Tournament start date")
                                
                            })
                        }

                        onSubmit = {
                            async (values) => {

                                console.log(values.registeration_start_time)
                                console.log(values.registration_end_time)

                                try {
                                    const response = await fetch('/api/tournaments/createTournamentApi',{
                                        method: 'POST',
                                        headers: {
                                            'Content-Type' : 'application/JSON'
                                        },
                                        body: JSON.stringify(values),
                                        
                                    })
    
                                    const json = await response.json();
                                    console.log(json.message);
                                        
                                    if (response.status == 200) {
                                        router.replace("");
                                        console.log(response.tournament_name)
                                        console.log(response.organizer)
                                        console.log(response.max_team_size)
                                        console.log(response.tournament_start_date)
                                        console.log(response.registeration_start_date)
                                        console.log(response.registeration_start_time)
                                        console.log(response.registeration_end_date)
                                        console.log(response.registration_end_time)
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
                                    {/* Tournament name Input section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="tournament_name" className="mt-1 font-semibold">
                                                Tournament Name<span className="text-yellow-500 font-bold">*</span>:
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "tournament_name"
                                            name = "tournament_name"
                                            type = "text"
                                            placeholder = "Tournament Name"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.tournament_name}
                                            autoComplete = "off"
                                        />
                                        {formik.touched.tournament_name && formik.errors.tournament_name && (
                                            <p className="text-red-500 text-sm font-medium w-80">
                                                {formik.errors.tournament_name}
                                            </p>
                                        )}
                                    </div>
                                    
                                    {/* Organizer name Input section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="organizer" className="mt-1 font-semibold">
                                                Organizer :
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "organizer"
                                            name = "organizer"
                                            type = "text"
                                            placeholder = "Organizer"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.organizer}
                                            autoComplete = "off"
                                        />
                                    </div>

                                    {/* max-participant-size Input section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="max_participant_size" className="mt-1 font-semibold">
                                                Max Participant-size
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "max_participant_size"
                                            name = "max_participant_size"
                                            type = "number"
                                            placeholder = "Participant-size"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.max_participant_size}
                                            autoComplete = "off"
                                        />
                                    </div>

                                    {/* max team-size Input section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="max_team_size" className="mt-1 font-semibold">
                                                Max Team-size
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "max_team_size"
                                            name = "max_team_size"
                                            type = "number"
                                            placeholder = "Team-size"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.max_team_size}
                                            autoComplete = "off"
                                        />
                                        {/* {formik.touched.max_team_size && formik.errors.max_team_size && (
                                            <p className="text-red-500 text-sm font-medium w-80">
                                                {formik.errors.max_team_size}
                                            </p>
                                        )} */}
                                    </div>
                                    
                                    {/* Tournament Start Date Input section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="tournament_start_date" className="mt-1 font-semibold">
                                                Tournament Start Date
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "tournament_start_date"
                                            name = "tournament_start_date"
                                            type = "date"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.tournament_start_date}
                                            autoComplete = "off"
                                        />
                                        {formik.touched.tournament_start_date && formik.errors.tournament_start_date && (
                                            <p className="text-red-500 text-sm font-medium w-80">
                                                {formik.errors.tournament_start_date}
                                            </p>
                                        )}
                                    </div>     
                                    
                                    {/* Registeration Start Date Input section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="registration_start_date" className="mt-1 font-semibold">
                                                Registration Start Date
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "registration_start_date"
                                            name = "registration_start_date"
                                            type = "date"
                                            placeholder = "Registration Start Date"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.registration_start_date}
                                            autoComplete = "off"
                                        />
                                        {formik.touched.registration_start_date && formik.errors.registration_start_date && (
                                            <p className="text-red-500 text-sm font-medium w-80">
                                                {formik.errors.registration_start_date}
                                            </p>
                                        )}
                                    </div>   
                                    
                                    {/* Registeration Start Time Input Section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="registration_start_time" className="mt-1 font-semibold">
                                                Registration Start Time Date
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "registration_start_time"
                                            name = "registration_start_time"
                                            type = "time"
                                            placeholder = "Registration time Date"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.registration_start_time}
                                            autoComplete = "off"
                                        />
                                        {formik.touched.registration_start_time && formik.errors.registration_start_time && (
                                            <p className="text-red-500 text-sm font-medium w-80">
                                                {formik.errors.registration_start_time}
                                            </p>
                                        )}
                                    </div>
                                    

                                    {/* Registeration End Date Input section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="registration_end_date" className="mt-1 font-semibold">
                                                Registration End Date
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "registration_end_date"
                                            name = "registration_end_date"
                                            type = "date"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.registration_end_date}
                                            autoComplete = "off"
                                        />
                                        {formik.touched.registration_end_date && formik.errors.registration_end_date && (
                                            <p className="text-red-500 text-sm font-medium w-80">
                                                {formik.errors.registration_end_date}
                                            </p>
                                        )}
                                    </div>   

                                    {/* Registeration Start Time Input Section */}
                                    <div>
                                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                                            <label htmlFor="registration_end_time" className="mt-1 font-semibold">
                                                Registration End Time Date
                                            </label>
                                        </legend>

                                        <input
                                            className = "border-gray-200 border-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                            id = "registration_end_time"
                                            name = "registration_end_time"
                                            type = "time"
                                            placeholder = "Registration end time"
                                            onChange = {formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value = {formik.values.registration_end_time}
                                            autoComplete = "off"
                                        />
                                        {formik.touched.registration_end_time && formik.errors.registration_end_time && (
                                            <p className="text-red-500 text-sm font-medium w-80">
                                                {formik.errors.registration_end_time}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex justify-center mt-7">
                                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline" >
                                            Create Tournament
                                        </button>
                                    </div>   
                                </form>
                                
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}