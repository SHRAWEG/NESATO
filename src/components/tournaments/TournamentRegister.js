import React from 'react'

function TournamentRegister(props) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-semibold">
                {props.tournament.tournament_name}
            </h1>

            
        </div>
    )
}

export default TournamentRegister
