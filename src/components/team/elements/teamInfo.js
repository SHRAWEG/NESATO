
import Router from 'next/router'
import Image from 'next/image'
import React, {useState, useRef, useCallback, useEffect} from 'react';

import TeamLogo from './teamLogo';




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
        setUId(uid)     
        setUsName(uname)
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && isOpen) {
            setIsOpen(false)
        }
    },[setIsOpen, isOpen])

    useEffect(() => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        }, [keyPress]
    )

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
                <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-5 w-8/12 items-center mt-32" >
                        <>
                            <TeamLogo user = {props.user} team = {props.team} />
                            <hr/>
                            {/* <TeamInfo user = {props.user} team = {props.team} /> */}
                            <div>
                                <hr/>
                                <legend className="text-2xl mb-5 border-yellow-500 border-l-4 pl-2 mt-5">
                                    <div className="flex">
                                        <div className="h-8 w-8">
                                        
                                            <Image                          
                                                src={"/img/gamelogos/"+props.team.game.toLowerCase()+".png"} height="100" width="100" layout = "responsive" alt="GameLogo" 
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
            
                            
                        </>
                    </div>
    
                {
                    isOpen && 
                    <>
                        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-10"  onClick={togglePopup}>
                                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"> </div>
                                <div className=" flex flex-col gap-3 modal-container bg-white md:max-w-md mx-auto rounded-md shadow-2xl z-50 overflow-y-auto py-8 px-4 lg:w-1/5">
                                    <div>
                                        <p className="font-meduim text-lg">Are you sure you want to kick {" "+usName+" "} ?</p>
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
                    </>
                }

            </>
        )
    
    
}