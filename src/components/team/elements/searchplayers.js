import { faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react';
import { useState } from 'react';



function SearchPlayers(props) {
    const [searchUsername, setSearchUsername] = useState('')

    let players = [] 
<<<<<<< HEAD
    let alreadyJoined = false;
=======
    let alreadyJoined
    // let alreadyInvited=false;

    console.log(props.team._id)
>>>>>>> 5a2dafbf77b917fd8bd3a227586eab96c7038d20

    if (props.invitations) {
        props.invitations.map((invitation) => {
            if(invitation.status == "Pending" && invitation.sent_by == props.team._id) {
                if (document.getElementById(invitation.sent_to)) {
                    (document.getElementById(invitation.sent_to)).innerHTML = "Invited";
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
<<<<<<< HEAD
            
            if (!alreadyJoined) {
                players.push(user)
            }

=======
            if (!alreadyJoined) {
                players.push(user)
            }
>>>>>>> 5a2dafbf77b917fd8bd3a227586eab96c7038d20
        } else {
            players.push(user)
        }
    })

    const handleInvite = async (e) => {
        const user_id = e.target.value
        console.log(e.target.value)
        try {
            const response = await fetch('/api/team/inviteApi',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/JSON'
                },
                body: JSON.stringify({
                    user_id: user_id,
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
        <div className= "flex-col bg-white py-5 rounded-2xl ml-10 w-full h-full px-2 py-2 gap10">
            <div>
                <label className="block text-gray-700 text-lg font-bold mb-2" >
                    Add team members
                </label>
                <input
                    className="shadow appearance-none border w-72 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    type="text"
                    placeholder="Search.."
                    name="search"
                    onChange={(e) => {
                        setSearchUsername(e.target.value);
                    }}
                    autoComplete="off"
                />

                {players.filter((val) => {
                    if (searchUsername == "") {
                        return null
                    } else if (val.username.toLowerCase().includes(searchUsername.toLowerCase())) {
                        return val
                    }
                    }).slice(0,5).map((val, key) => {
                        return (
                            <div key={key} className="each flex rounded shadow text-gray-600 mb-5 bg-white">
                                <div className="sec self-center p-2 pr-1">
                                    <img data="picture" className="h-10 w-14 border p-0.5 rounded-full" src = {"https://robohash.org//"+val.username+"?set=set5&&size=200x200"} alt="" />
                                </div>
                                <div className="sec self-center p-2 w-64">
                                    <div className="flex">
                                        <div className="name text-sm">{val.username}</div>
                                    </div>
                                </div>
                                <div id={val._id} className="sec self-center p-2 w-2/8 font-bold">
                                    <button onClick={handleInvite} value={val._id} className="font-bold bg-gray-200 rounded-xl px-3 py-1 ">
                                        Invite
                                    </button>
                                </div>
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
