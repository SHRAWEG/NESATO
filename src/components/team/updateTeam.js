import router from 'next/router';
import React from 'react';
import TeamLogo from './elements/teamLogo';
import TeamUpdateForm from './elements/teamUpdateForm';



function UpdateTeam(props) {
    if(props.self._id == props.team.team_cap){
        return (
            <>
                <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5 mb-10">
                    <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 items-center mt-32" >
                            <>
                                <TeamLogo team={props.team} />
    
                                <hr />
                               
                                <TeamUpdateForm team={props.team}/>
                            </>
                    </div>
                </div>
            </>        
        )
    } else {
        return router.replace("/")
    }

    
}

export default UpdateTeam;