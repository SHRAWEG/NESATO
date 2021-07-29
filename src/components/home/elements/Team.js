import Link from 'next/dist/client/link';
import React from 'react'

import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Team(props) {
    return (
        <>
            <div className="flex-col bg-white py-5 rounded-2xl ml-10 mt-5 pr-10 w-full h-full">
            
                <div className="flex flex-col mx-8 gap-5 items-start">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faUsers} className="text-3xl" /><h1 className="text-3xl font-bold ml-4">Teams</h1>
                    </div>
                    <div>
                        {props.teams && (
                            props.teams.map((team, key) => (
                                <div key={key}>
                                    <h1 className="text-xl">{team.game}</h1>
                                    <Link href = {'/team/' + team._id } >
                                        <a>
                                            <p className="text-lg mb-4"><span className="pl-2">{team.team_name}</span></p>
                                        </a>
                                    </Link>
                                </div>
                            ))
                        )} 
                    </div>
                    <div className="flex flex-col gap-2">
                        
                        <button className="bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold inline">Join a Team</button>
                        <Link href="/team/createteam">
                            <button className="bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold inline">Create Team</button>
                        </Link>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Team