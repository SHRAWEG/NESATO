import React, { useState } from 'react';
import Router from 'next/router'
import Image from 'next/image'




export default function TeamInfo(props) {
    let createDate = new Date(props.team.create_date)

    let month = createDate.toLocaleString('en-us', {month: 'short'});
    let year = createDate.getFullYear();
    let date = createDate.getDate();

    const [isOpen, setIsOpen] = useState(false);
    const [uId, setUId] = useState("");
    const [usName , setUsName] = useState("");

    const togglePopup = (uid, uname) => {
        setIsOpen(!isOpen)  
        console.log(isOpen, uid, uname)
        setUId(uid)     
        setUsName(uname)
    }

    const handleKick = async (e) => {
        // console.log(uId)
        const userid = uId
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
                // router.replace("/team/"+props.team_id)
                Router.reload(window.location.pathname);
                console.log(window.location.pathname)
                
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
                    <div>
                        <hr/>
                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-5">
                            <div className="flex">
                                <div className="h-8 w-8">
                                    <Image                          
                                        src={require("../../../../public/img/gamelogos/"+props.team.game.toLowerCase()+".png")} alt="GameLogo" 
                                    />
                                </div >
                                <p className="ml-2 font-paragraph" >
                                    {props.team.game.toUpperCase()}
                                </p>  
                            </div>
                        </legend>                            
    
                        <hr/>
    
                        <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-10">Basic Information</legend>
    
                        <p id="bio" className="text-xl w-full ml-3 mt-5 font-paragraph">
                            <label htmlFor="bio">
                                <b>Team Created on :</b> &nbsp; &nbsp; {date} {month} , {year}
                            
                            </label>
                        </p>
    
                        <div id="bio" className="text-xl w-full ml-3 mt-5">
                            <label htmlFor="bio">Bio:</label>
                            <p id="bio" className="w-full h-32 border-gray-200 border-2 focus:outline-none focus:border-yellow-200 rounded-2xl resize-none pl-2 pt-2 font-paragraph" >
                                {props.team.bio && (
                                    props.team.bio.split('\n').map(function(item, key) {
                                        return (
                                            <span key={key}>
                                                {item}
                                                <br/>
                                            </span>
                                        )
                                    })
                                )}
                                
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
                                                <p  className="text-sm font-normal text-gray-700 font-paragraph">
                                                    Member since : {player.join_date}
                                                </p>
                                            </div>           
                                        </div>
                                        {props.user._id == props.team.team_cap && (
                                            <>
                                                {!(player.username == props.user.username) && (
                                                    <div id={player.username}>  
                                                        <button type="button" onClick={() =>togglePopup(player._id, player.username)} className="border font-semibold text-xl border-red-300 rounded-xl hover:bg-red-600 px-7 py-2">
                                                            Kick
                                                        </button>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </label>
                                </div>
                            ))}                        
                        </div>
                    </div>
    
                    {
                        isOpen && 
                        <div className="flex items-center justify-center fixed w-screen h-screen z-50">
                            <div className=" ">
                                <div>
                                    <p className="font-meduim text-lg">Are you sure you want to kick {" "+" "} ?</p>
                                </div>
                                <div className="flex flex-row  gap-14 items-center justify-center">
                                    <button type="submit" onClick={handleKick}  className="border font-semibold text-lg border-red-300 rounded-xl hover:bg-red-600 px-6">
                                        Yes
                                    </button>
                                    <button type="button" onClick={togglePopup} className="border font-semibold text-lg border-yellow-300 rounded-xl hover:bg-yellow-500 px-6">
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    }

            </>
        )
    
    

    // if (isOpen == true){
    //     return(
    //             <div className="fixed w-screen h-screen">
    //                 <div className=" ">
    //                     <div>
    //                         <p className="font-meduim text-lg">Are you sure you want to kick {" "+ usName +" "} ?</p>
    //                     </div>
    //                     <div className="flex flex-row  gap-14 items-center justify-center">
    //                         <button type="submit" onClick={handleKick}  className="border font-semibold text-lg border-red-300 rounded-xl hover:bg-red-600 px-6">
    //                             Yes
    //                         </button>
    //                         <button type="button" onClick={togglePopup} className="border font-semibold text-lg border-yellow-300 rounded-xl hover:bg-yellow-500 px-6">
    //                             No
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //     )
    // }
}