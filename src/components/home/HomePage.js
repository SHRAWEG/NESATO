import React from 'react'
import Invitation from './elements/Invitation';
import Profile from './elements/Profile';
import Team from './elements/Team';


function Homepage(props) {

    return (
            <>
                <div className="flex-col fixed w-2/12">
                    <Profile user={props.user} />

                    <Team teams={props.user.teams}/>

                    <Invitation invitations={props.invitation} user={props.user} teams={props.team} />
                </div>
            </>    
    )
}


export default Homepage
