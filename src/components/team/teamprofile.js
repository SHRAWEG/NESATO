import React from 'react';
import SearchPlayers from './elements/searchplayers';

function TeamProfile(props) {
    const handleKick = async (e) => {
        const userid = e.target.value

        console.log(userid)

        try {
            const response = await fetch('/api/team/kickApi',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/JSON'
                },
                body: JSON.stringify({
                    user_id: userid,
                    team_id: props.team._id,
                }),
            })

            const json = await response.json();
            console.log(json.message);
         

            if (response.status == 200) {
                alert('Kicked'+'successfully sent')
                router.replace("/team/"+props.team_id)
                
            }

            else {
                alert(json.message)
            }

        } catch (error){
            console.log(
                error
            );
        }
    }



    return (
            <>
                <div className ="container mx-auto flex justify-evenly whitespace-nowrap gap-x-5 mb-10">
                    <div className="bg-white  h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 mt-32" id="midMain">
                        {props.user._id == props.team.team_cap && (
                            <SearchPlayers user={props.user} team={props.team} users={props.users} invitations={props.invitations} /> 
                        )}    

                        {props.team.players.map((player,  key) => (
                            <div key = {key} className = "flex  flex-nowrap border-1 w-32">
                                {player.username}
                                <br/>
                                {player.email}
                                <div>
                                
                                {!(player.username == props.user.username) && (
                                <button type="submit" onClick={handleKick} value={player._id} className="absolute ml-56 border border-gray-400 rounded-lg px-3 py-1">
                                            Kick
                                </button>
                                )}
                                </div>
                            </div>
                        ))}   
                    </div>   
                </div> 
            </>   
    )
}


export default TeamProfile;
