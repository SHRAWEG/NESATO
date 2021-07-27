import Link from 'next/dist/client/link';
import React from 'react'

function Team(props) {
    return (
        <>
            <div className="flex-col bg-white py-5 rounded-2xl ml-10 mt-5 pr-10 w-full">
            
                <div className="flex flex-col mx-8 gap-5 items-start">
                    <div className="flex items-center">
                        <i className="fas fa-users text-3xl"></i><h1 className="text-3xl font-bold ml-4">Teams</h1>
                    </div>
                    <div>
                        <p className="text-xl"><span className="pl-2">ChaitPutali CPS</span></p>
                        <p className="text-xl"><span className="pl-2">Team C</span></p>
                        <p className="text-xl"><span className="pl-2">Team D</span></p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold inline">Join a Team</button>
                        <button className="bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold inline">Create Team</button>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Team