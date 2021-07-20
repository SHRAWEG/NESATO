import { useSession, signOut } from 'next-auth/client';
import Link from 'next/dist/client/link';
import React from 'react'


function HomePageAuthenticated( {} ) {
    return (
        <>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
            <div className="m-auto">
                <div className="min-h-screen flex flex-col w-full">
                    <div className="flex flex-col w-96 bg-white max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
                        <h1 className="font-medium text-4xl text-center mb-2">Profile</h1>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <div className="flex flex-col text-center md:text-left">
                                <div className="font-medium text-lg text-gray-800">Full Name</div>
                                <div className="text-gray-500 mb-3 whitespace-nowrap">Nickname</div>
                            </div>
                        </div>
                        <Link href="/signup">
                            <button className="mt-2 rounded-full py-2 bg-yellow-400 text-gray-600 hover:bg-blue-300 font-semibold">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0">
                <button className="bg-transparent border border-gray-500 hover:border-yellow-500 text-gray-500 hover:text-yellow-500 font-bold py-4 px-8 rounded-full lg:text-3xl md:text-2xl sm:text-xl mb-10" onClick={signOut}>Sign Out</button>
            </div>
        </>
    )
}

export default HomePageAuthenticated
