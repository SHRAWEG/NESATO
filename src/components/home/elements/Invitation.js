import React from 'react'

function Invitation(props) {
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
                                                
                                                <button className="bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold mr-7">
                                                    Accept
                                                </button>

                                                <button className="bg-red-400 text-gray-700 px-4 py-2 rounded-3xl font-bold">
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