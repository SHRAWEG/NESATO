import Link from 'next/dist/client/link';
import React from 'react'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Profile(props) {
    return (
        <>
            <div className="flex-col bg-white py-5 rounded-2xl ml-10 w-full h-full">
                <div className="flex flex-col mx-8 gap-y-5 items-start">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <p className="text-xl flex">
                        <img className="w-10 h-10" src = {"https://robohash.org//"+props.user.username+"?set=set5&&size=200x200" }/><span className="pl-2 mt-2.5">{props.user.username}</span></p>
                    <Link href="/userprofile">
                        <button className="bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold">Update</button>
                    </Link>  
                </div>
            </div>
        </>
    )
}

export default Profile
