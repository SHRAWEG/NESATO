import React from "react";
import router from "next/router";
import Image from 'next/image'


export default function TeamInfo(props) {
    let createDate = new Date(props.team.create_date)

    let month = createDate.toLocaleString('en-us', {month: 'short'});
    let year = createDate.getFullYear();
    let date = createDate.getDate();

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
            <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 items-center mt-28" >
                <div className="rounded-full border-yellow-500 border-8 overflow-hidden shadow-xl w-44 mx-auto"> 
                    <img src={"https://robohash.org/"+props.team._id+"?set=set2"} alt="" className="bg-gray-200" />
                </div>
                <div className="mt-5 text-4xl font-bold text-center mb-10"> 
                    {props.team.team_name}
                </div>
                
                <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">
                    <div className="flex">
                        <div className="h-8 w-8">
                            <Image                          
                                src={require("../../../../public/img/gamelogos/"+props.team.game.toLowerCase()+".png")} alt="GameLogo" 
                            />
                        </div >
                        <div className="ml-2">
                            {props.team.game.toUpperCase()}
                        </div>  
                    </div>
                </legend>                            

                <hr/>

                <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">Basic Information</legend>

                <div id="bio" className="text-xl w-full ml-3 mt-5">
                    <label htmlFor="bio">
                        <b className="font-normal">Team Created on :</b> &nbsp; &nbsp; {date} {month} , {year}
                    
                    </label>
                </div>

                <div id="bio" className="text-xl w-full ml-3 mt-5">
                    <label htmlFor="bio">Bio:</label>
                    <p id="bio" className="w-full h-32 border-gray-200 border-2 focus:outline-none focus:border-yellow-200 rounded-2xl resize-none pl-2 pt-2" >
                        {props.team.bio}
                    </p>
                </div>
                
                    <legend className="text-xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">Team Members</legend>
                    <div className="flex gap-5 flex-col w-full mb-4">
                        {props.team.players.map((player, key) => (
                            <div key={key} className="">
                                <label htmlFor="csgoign" className="flex bg-gray-50 hover:bg-gray-200 p-3 rounded-xl w-full items-center justify-between">
                                    <div className="flex font-medium gap-3">
                                        <img src={"https://robohash.org/"+player.username+"?set=set5"} className="w-12 h-12 rounded-3xl bg-blue-100"/>
                                        <div className="ml-3">
                                            <a href={"http://localhost:3000/userprofile/"+player._id} className="text-2xl w-auto font-semibold hover:text-yellow-600">
                                                {player.username}
                                            </a>
                                            <div className="text-sm font-normal text-gray-700">
                                                Member since : {player.join_date}
                                            </div>
                                        </div>           
                                    </div>
                                    {props.user._id == props.team.team_cap && (
                                    <>
                                    {!(player.username == props.user.username) && (
                                        <button type="submit" onClick={handleKick} value={player._id} className="border font-semibold text-xl border-red-300 rounded-xl hover:bg-red-600 px-7 py-2">
                                            Kick
                                        </button>
                                    )}
                                    </>
                                )}
                                </label>
                                
                            </div>
                        ))}
                                                    
                </div>
                <hr/>
            </div>
        </>
    )
}