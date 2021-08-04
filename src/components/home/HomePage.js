import React from 'react'
import Content from './elements/Content';
import Invitation from './elements/Invitation';
import Profile from './elements/Profile';
import Team from './elements/Team';


function Homepage(props) {

    return (
            <>
                {/* Profile and Team content on the left section */}
                <div className="flex-col fixed w-2/12 mt-32 bg-scroll">
                    <Profile self={props.self} />

                    <Team teams={props.self.teams}/>

                    
                </div>

                {/* Right Section */}
                <div className="fixed w-2/12 right-10 mt-32">
                    <Invitation invitations={props.invitation} self={props.self} teams={props.team} />
                </div>

                {/* Middle Section */}
                <div className ="container mx-auto flex justify-evenly whitespace-nowrap gap-x-5 mb-10">
                    <div className="bg-white  h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 mt-32" id="midMain">
                        <Content />
                    </div>
                </div>
                
            </>    
    )
}


export default Homepage
