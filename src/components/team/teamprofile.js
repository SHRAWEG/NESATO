import React from 'react';
// import { getStaticProps } from '../../pages/team/[id]';
import SearchPlayers from './elements/searchplayers';
import TeamInfo from './elements/teamInfo';

function TeamProfile(props) {
    return(
            <>
                {/* Profile and Team content on the left section */}
                
                <div className=" flex flex-col fixed w-2/12 mt-32 bg-scroll">
                    {props.user._id == props.team.team_cap && (
                        <SearchPlayers  user={props.user} team={props.team} users={props.users} invitations={props.invitations}/>
                    )}
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-2 fixed w-2/12 right-10 mt-32">
                    <div className="flex-col bg-white py-5 rounded-2xl right-10 font-bold">
                        Achievements
                    </div>
                </div>

                {/* centre main area */}
                <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5 mb-10">
                    <TeamInfo user = {props.user} team = {props.team} />
                </div>
            </>
    )
}


export default TeamProfile;
