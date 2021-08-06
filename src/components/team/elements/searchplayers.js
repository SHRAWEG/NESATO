import { faDungeon } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from 'react';

function SearchPlayers(props) {
    const [searchUsername, setSearchUsername] = useState('')

    let players = [] 
    let alreadyJoined = false;

    if (props.invitations) {
        props.invitations.map((invitation) => {
            if(invitation.status == "Pending") {
                let dum = document.getElementById(invitation.sent_to)
                if (dum) {
                    dum.innerHTML = "Invited"
                }
            }
        })
    }

    props.users.map((user) => {
        if (user.teams) {
            user.teams.map((team) => {
                if(team._id == props.team._id) {
                    alreadyJoined = true;
                }
            })
            
            if (!alreadyJoined) {
                players.push(user)
            }

        } else {
            players.push(user)
        }
    })
            
    const handleInvite = async (e) => {
        const userid = e.target.value

        try {
            const response = await fetch('/api/team/inviteApi',{
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

    return (
        <div>
            
                    <div>
                        <label className="block text-gray-700 text-lg font-bold mb-2" >
                            Add team members
                        </label>
                        <input
                            className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Search.."
                            name="search"
                            onChange={(e) => {
                                setSearchUsername(e.target.value);
                            }}
                            autoComplete="off"
                        />

                        {players.filter((val) => {
                            if (searchUsername == "" ) {
                                return null
                            } else if (val.username.toLowerCase().includes(searchUsername.toLowerCase())) {
                                        return val;
                            }
                            }).map((val, key) => {
                                return (
                                    <div key={key} className="flex flex-col px-6 py-3 border-2 border-gray-400 rounded mb-1 w-5/12 z-50" >
                                    <p>{val.username}</p> 
                                    <button type="submit" onClick={handleInvite} id={val._id} value={val._id} className="absolute ml-56 border border-gray-400 rounded-lg px-3 py-1">
                                        Invite
                                    </button>
                                </div>
                                )
                            }    
                            )
                        }
                    </div>
                
        </div>
    )
}

export default SearchPlayers
