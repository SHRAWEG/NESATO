import React from 'react';
import SearchPlayers from './elements/searchplayers';

function TeamProfile(props) {
        
    return (
            <>
                <div className ="container mx-auto flex justify-evenly whitespace-nowrap gap-x-5 mb-10">
                    <div className="bg-white  h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 mt-32" id="midMain">
                        {props.user._id == props.team.team_cap && (
                            <SearchPlayers user={props.user} team={props.team} users={props.users}/> 
                        )}              
                    </div>   
                </div> 
            </>   
    )
}

export default TeamProfile;
