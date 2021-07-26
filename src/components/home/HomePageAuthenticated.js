import { signOut } from 'next-auth/client';
import Link from 'next/dist/client/link';
import React from 'react'
import useSWR from 'swr';


function HomePageAuthenticated(props) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    

    return (
        <>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
            <div className="flex flex-row w-full bg-white rounded-3xl h-screen">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-72 py-8 px-10 md:px-8 border-r-2 border-gray-300 mt-5 mb-5">
                        <div className="flex flex-col">
                            <h1 className="font-medium text-4xl text-center mb-2">Profile</h1>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                <div className="flex flex-col text-center md:text-left">
                                    {data && (
                                        <>
                                            <div className="font-medium text-lg text-gray-800">{data.firstname} {data.lastname}</div>
                                            {!data.firstname && (
                                                <div className="font-medium text-lg text-gray-800">Please update your profile</div>
                                            )}
                                            <div className="text-gray-500 mb-3 whitespace-nowrap">{data.username}</div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <Link href="/userprofile">
                                <button className="mt-2 rounded-full py-2 bg-yellow-400 text-gray-600 hover:bg-blue-300 font-semibold">Update</button>
                            </Link>
                        </div>
                        <div className="flex flex-col mt-40">
                            <h1 className="font-medium text-4xl text-center mb-2">Team</h1>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                <div className="flex flex-col text-center md:text-left">
                                    {data && (
                                        !(data.team) ? (
                                            <Link href="/team/createteam">
                                                <button className="mt-2 rounded-full py-2 bg-yellow-400 text-gray-600 hover:bg-blue-300 font-semibold">Create a Team</button>
                                            </Link>
                                        ):
                                        (   
                                            <div>
                                                <div className="font-medium text-lg text-gray-800">{data.team.team_name}</div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            {data && (
                                data.team && (
                                    <Link href="/team">
                                        <button className="mt-2 rounded-full py-2 bg-yellow-400 text-gray-600 hover:bg-blue-300 font-semibold">View Profile</button>
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="flex flex-col mt-40">
                            <h1 className="font-medium text-4xl text-center mb-2">Team</h1>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                <div className="flex flex-col text-center md:text-left">

                                </div>
                            </div>
                            </div>
                        
                        <div className="absolute bottom-0">
                            <button className="bg-transparent border border-gray-500 hover:border-yellow-500 text-gray-500 hover:text-yellow-500 font-bold py-4 px-8 rounded-full lg:text-3xl md:text-2xl sm:text-xl mb-10" onClick={signOut}>Sign Out</button>
                        </div>            
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default HomePageAuthenticated
