import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function TeamLogo(props) {

    return (
        <>
            <div className="rounded-full border-yellow-500 border-8 overflow-hidden shadow-xl w-44 mx-auto">
                <img src={"https://robohash.org/"+props.team._id+"?set=set2"} alt="" className="bg-gray-200" />
            </div>

            <div className="mt-5 text-4xl font-bold pb-6 w-full text-center">
                
                

                
            <div>
                {props.team.team_name}
            </div>
            {props.user && (
                props.user._id == props.team.team_cap && (
                    <>
                        <div className="flex justify-end w-full">
                            <Link href={"/team/update/"+props.team._id}>
                                <a>
                                    <FontAwesomeIcon icon={faEdit} className="text-3xl z-10 hover:text-gray-500 transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1" />
                                </a>
                            </Link>
                        </div> 
                    </>
                )
            )}
                
                
            </div>
        </>
    )
}

export default TeamLogo