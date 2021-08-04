import React from 'react';
import UserForm from './elements/UserForm';
import Team from '../home/elements/Team';
import UserProfilePic from './elements/UserProfilePic';


function UpdateProfile(props) {

    return (
        <>
            {/* Left Section
            <div className="flex-col fixed w-2/12 mt-24 bg-scroll">
                <Team teams={props.user.teams} />
            </div> */}
            

            <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5 mb-10">
                <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 items-center mt-32" id="midMain">
                    {props.self && (
                        <>
                            <UserProfilePic user={props.self} />

                            <hr />
                            
                            <UserForm self={props.self} />
                        </>
                    )}
                    
                </div>
            </div>
        </>

        
    )
}

export default UpdateProfile;