import React from "react";
import router from "next/router";

export default function TeamInfo(props) {
    const handleKick = async (e) => {
        const userid = e.target.value
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
            <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5 mb-10">
                <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 items-center mt-28" id="midMain">

                    <div className="rounded-full border-yellow-500 border-8 overflow-hidden shadow-xl w-44 mx-auto"> 
                        <img src={"https://robohash.org/"+props.team._id+"?set=set2"} alt="" className="bg-gray-200" />
                    </div>
\
                    <div className="mt-5 text-4xl font-bold text-center mb-10"> 
                        {props.team.team_name}
                    </div>
                    

                    {/* <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                        <div id="games" className="gap-5 text-xl ml-3 mb-10">
                            <div className="flex w-36 py-5 rounded-2xl pl-7 gap-5 items-center">
                                <a href="#" className="transition duration-300 ease-in-out transform hover:scale-125 w-16 h-auto ">
                                    <img
                                        src={"../../../../public/image/gamelogos/"+props.team.game.toLowerCase()+".png"} alt="GameLogo" 
                                        className=""
                                    />
                                </a>                           
                            </div>
                        </div>
                    </legend> */}

                    

                    <hr/>

                    <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">Basic Information</legend>

                    <div id="bio" className="text-xl w-full ml-3 mt-5">
                        <label htmlFor="bio">Bio:</label>
                        <p id="bio" className="w-full h-32 border-gray-200 border-2 focus:outline-none focus:border-yellow-200 rounded-2xl resize-none pl-2 pt-2" >
                            {props.team.bio}
                        </p>
                    </div>
                    <div id="inGameName" className="text-xl w-full ml-3 mt-5">
                        <legend className="text-xl mb-5 border-gray-500 border-l-4 pl-2 mt-10">Team Members</legend>
                        <div className="flex gap-5 flex-col w-full mb-4">
                            {props.team.players.map((player, key) => (
                                <div key={key}>
                                    <label htmlFor="csgoign" className="w-full flex items-center">
                                        {player.username}
                                        {props.user._id == props.team.team_cap && (
                                        <>
                                        {!(player.username == props.user.username) && (
                                            <button type="submit" onClick={handleKick} value={player._id} className="absolute ml-80 border border-gray-400 rounded-lg px-3 py-1">
                                                Kick
                                            </button>
                                        )}
                                        </>
                                    )}
                                    </label>
                                    
                                </div>
                            ))}
                            
                        </div>
                                                        
                    </div>
                    <hr/>
                </div>
            </div>
        </>
    )
}