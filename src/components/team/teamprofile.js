import { useSession } from 'next-auth/client';
import React from 'react';
import { useState } from 'react';

function TeamProfile(props) {
    const [searchEmail, setSearchEmail] = useState('')
            
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
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="firstname">
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
                autoComplete="false"
            />

            {props.users.filter((val) => {
                if (searchEmail == "" ) {
                    return null
                } else if (val.email.toLowerCase().includes(searchEmail.toLowerCase())) {
                    return (val)
                }
                }).map((val, key) => (
<<<<<<< HEAD
                <div key={key} className="flex flex-col px-6 py-3 border-2 border-gray-400" >
                    <p>{val.email}</p>
                    <button value={val.email} onClick={handleInvite} className="absolute ml-56 border border-gray-400 rounded-lg px-3 py-1">Invite</button>
                </div>
            ))}
=======
                    <div key={key} className="flex flex-col px-6 py-3 border-2 border-gray-400">
                        <p>{val.email}</p> 
                        <button type="submit" onClick={handleInvite} value={val.email} className="absolute ml-56 border border-gray-400 rounded-lg px-3 py-1">Invite</button>
                    </div>
                ))}
>>>>>>> cfff590f4c42a4891547f68da04d95ed3f6da5b8
        </div>

    )
}

export default TeamProfile;
