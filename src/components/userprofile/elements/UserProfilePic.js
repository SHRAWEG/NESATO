import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function UserProfilePic(props) {

    return (
        <>
            <div className="rounded-full border-yellow-500 border-8 overflow-hidden shadow-xl w-44 mx-auto">
                <img src={"https://robohash.org/"+props.user.username+"?set=set5"} alt="" className="bg-gray-200" />
            </div>

            <div className="mt-5 text-4xl font-bold pb-6 w-full text-center">
                {props.user.username}

                {props.self && (
                    props.user._id == props.self._id && (
                        <div className="flex justify-end w-full">
                        <Link href="/userprofile/update">
                            <a>
                                <FontAwesomeIcon icon={faEdit} className="text-3xl z-10 hover:text-gray-500 transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1" />
                            </a>
                        </Link>
                    </div> 
                    )
                )}
                
            </div>
        </>
    )
}

export default UserProfilePic
