import { getSession } from "next-auth/client";
import React from "react";
import {useState} from 'react';
// import { getStaticProps } from "../../pages/team/jointeam";

export default function JoinTeam(props) {
    const [searchTeam, setSearchTeam] = useState(""); 

    const handleRequest = async (e) => {
        const team = e.target.value

        try {
            const response = await fetch('/api/team/requestApi',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/JSON'
                },
                body: JSON.stringify({
                    user_id: props.user._id,
                    team_id: team,
                }),
            })

            const json = await response.json();
            console.log(json.message);
         

            if (response.status == 200) {
                alert('Invitation successfully sent')
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

    
    return(
        <>
            <div>
                <label className="block text-gray-700 text-lg font-bold mb-2" >
                    Search a team to Join.
                </label>
                <input
                    className = "shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus: outline-none focus:shadow-outline"
                    type = "text"
                    placeholder = "Search"
                    name = "search"
                    onChange = {(e) => {
                        setSearchTeam(e.target.value);
                    }}
                    autoComplete="off"
                />

                {props.teams.filter((val) => {
                    if (searchTeam == "") {
                        return  null;
                    } else if (val.team_name.toLowerCase().includes(searchTeam.toLowerCase())) {
                        return val
                    }
                    }).map((val, key) => {
                        let alreadyJoined = false;
                        let alreadyGame = false
                        val.players.map((player) => {
                            if((player._id == props.user._id)) {
                                alreadyJoined = true;
                            }
                        })

                        props.user.teams.map((team) =>{
                            if(team.game == val.game){
                                alreadyGame = true
                            }
                        })

                        if (!alreadyJoined) {
                            if (!alreadyGame){
                                return (
                                <div key={key} className="flex flex-col px-6 py-3 border-2 border-gray-400">
                                    <p>{val.team_name} {val.game}</p> 
                                    <button type="submit" onClick={handleRequest} value={val._id} className="absolute mb-12 ml-40 border border-gray-400 rounded-lg px-3 py-1">
                                        Send Request
                                    </button>
                                </div>
                                )
                            }
                        }
                    }
                )}
            </div>
        </>
    )
}