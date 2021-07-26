import React from 'react';
import { useState } from 'react';
import useSWR from 'swr';

function TeamProfile(props) {
    const [searchEmail, setSearchEmail] = useState('')

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)
            
    const handleInvite = async (e) => {
        const user = e.target.value
        console.log({user: user})
        try {
            const response = await fetch('/api/team/inviteapi',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/JSON'
                },
                body: JSON.stringify({user: user}),
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
            {data && (
                data.team.isCaptain && (
                    <>
                        <label className="block text-gray-700 text-lg font-bold mb-2" >
                            Add team members
                        </label>
                        <input
                            className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Search.."
                            name="search"
                            onChange={(e) => {
                                setSearchEmail(e.target.value);
                            }}
                            autoComplete="off"
                        />

                        {props.users.filter((val) => {
                            if (searchEmail == "" ) {
                                return null
                            } else if (val.email.toLowerCase().includes(searchEmail.toLowerCase())) {
                                return (val)
                            }
                            }).map((val, key) => (
                                <div key={key} className="flex flex-col px-6 py-3 border-2 border-gray-400">
                                    <p>{val.email}</p> 
                                    <button type="submit" onClick={handleInvite} value={val.email} className="absolute ml-56 border border-gray-400 rounded-lg px-3 py-1">Invite</button>
                                </div>
                            ))
                        }
                    </>
                )
            )}        
        </div>
    )
}

export default TeamProfile;
