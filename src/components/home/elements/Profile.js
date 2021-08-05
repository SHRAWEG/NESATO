import Link from 'next/dist/client/link';
import React from 'react'

function Profile(props) {
    return (
        <>
            <div className="flex-col bg-white py-5 rounded-2xl ml-10 w-full h-full shadow-xl">
                <div className="flex flex-col mx-8 gap-y-5 items-start">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <p className="text-xl flex">
                        <img className="w-10 h-10" src = {"https://robohash.org//"+props.self.username+"?set=set5&&size=200x200" }/><span className="pl-2 mt-2.5">{props.self.username}</span></p>
                    <Link href={"/userprofile/" + props.self._id}>
                        <button className="bg-yellow-500 text-gray-900 hover:bg-gray-500 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1">View Profile</button>
                    </Link>  
                </div>
            </div>
        </>
    )
}

export default Profile
