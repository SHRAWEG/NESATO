import React from 'react'
import Profile from './elements/Profile';
import Team from './elements/Team';


function Homepage(props) {

    return (
            <>
                <div className="flex-col fixed w-2/12">
                    <Profile user={props.user} />

                    <Team teams={props.user.teams}/>
                </div>
            </>    
    )
}


export default Homepage
