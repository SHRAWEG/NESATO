import router from 'next/router'
import React from 'react'

function Invitation(props) {

    const handleStatus = async (e) => {
        const invitation_id = e.target.value
        const status = e.target.innerHTML

        try {
            const response = await fetch('/api/team/acceptrejectApi',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/JSON'
                },
                body: JSON.stringify({
                    invitation_id: invitation_id,
                    status: status,
                    user_id: props.user._id,
                }),
            })

            if (response.status == 200) {
                router.replace('/')
            }

        } catch (error){
            console.log(
                error
            );
        }
    }

    return (
        <>
            <div className="flex-col bg-white py-5 rounded-2xl ml-10 mt-5 pr-10 w-full">
                <div className="flex flex-col mx-8 gap-5 items-start">
                    <h1 className="text-3xl font-bold">Invitations</h1>
                        {props.invitations.map((invitation) => {
                            if (invitation.status == "Pending" & invitation.sent_to == props.user._id) {
                                return (
                                    props.teams.map((team, key) => (
                                        (team._id == invitation.sent_by) && (
                                            <div key={key} className="bg-gray-300 rounded-lg px-3 py-3">
                                                <h1 className="text-xl">{team.game}</h1> 
                                                <p className="text-lg mb-2 ml-3"><span className="pl-2">Team: {team.team_name}</span></p>
                                                
                                                <button onClick={handleStatus} value={invitation._id} className="bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold mr-7">
                                                    Accept
                                                </button>

                                                <button onClick={handleStatus} value={invitation._id} className="bg-red-400 text-gray-700 px-4 py-2 rounded-3xl font-bold">
                                                    Reject
                                                </button>
                                            </div>
                                        )
                                    ))
                                )
                            }
                        })}    
                </div>
            </div>
        </>
    )
}

export default Invitation