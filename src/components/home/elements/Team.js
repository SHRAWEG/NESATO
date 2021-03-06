import Link from 'next/dist/client/link';
import React from 'react'

import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Team(props) {
    return (
        <>
            <div className="flex-col bg-white py-5 rounded-2xl mt-8 ml-10 pr-10 w-full shadow-xl">
            
                <div className="flex flex-col mx-8 gap-5 items-start">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faUsers} className="text-3xl" /><h1 className="text-3xl font-bold ml-4">Teams</h1>
                    </div>
                    <div>
                        {props.teams && (
                            props.teams.map((team, key) => (
                                <div key={key}>
                                    <h1 className="text-xl font-paragraph">{team.game}</h1>
                                    <Link href = {'/team/' + team._id } >
                                        <a>
                                            <p className="text-lg mb-4 font-paragraph"><span className="pl-2">{team.team_name}</span></p>
                                        </a>
                                    </Link>
                                </div>
                            ))
                        )} 
                    </div>
                    <div className="flex flex-col gap-2">
                        
                        <Link href="/team/createteam">
                            <button className="bg-yellow-500 text-gray-900 hover:bg-gray-500 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1">
                                Create Team
                            </button>
                        </Link>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Team