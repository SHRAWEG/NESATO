import React from 'react'
import Team from '../home/elements/Team'
import UserProfilePic from './elements/UserProfilePic'
import UserDetails from './elements/UserDetails'
import TournamentsPlayed from './elements/TournamentsPlayed'

function UserProfile(props) {

    if (props.user)
    return (
        <>
            {/* Left Section */}
            <div className="flex-col fixed w-2/12 mt-24 bg-scroll">
                <Team teams={props.user.teams} />
            </div>

            {/* Right Section */}
            <div className="fixed w-2/12 right-10 mt-32">
                <TournamentsPlayed />
            </div>

            {/* Middle Section */}
            <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5 mb-10">
                <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 items-center mt-32" id="midMain">
                        <>
                            <UserProfilePic user={props.user} self={props.self} />

                            <hr />

                            <UserDetails user={props.user} />

                        </>    
                </div>
            </div>

             
            
        </>
    )

    else 
    return (
        <div>
            No such user exists
        </div>
    )
}

export default UserProfile