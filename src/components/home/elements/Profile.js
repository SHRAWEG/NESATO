import Link from 'next/dist/client/link';
import React from 'react'

function Profile(props) {
    return (
        <>
            <div className="flex-col bg-white py-5 rounded-2xl ml-10 w-full">
                <div className="flex flex-col mx-8 gap-y-5 items-start">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <p className="text-xl"><i className="fas fa-user"></i><span className="pl-2">{props.user.username}</span></p>
                    <Link href="/userprofile">
                        <button className="bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold">Update</button>
                    </Link>  
                </div>
            </div>
        </>
    )
}

export default Profile
