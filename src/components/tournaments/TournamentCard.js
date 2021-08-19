import React from 'react'
import Link from 'next/dist/client/link'

function TournamentCard(props) {


    return (
        <div className="flex flex-col bg-gray-200 p-4 rounded-xl items-center gap-4">
            <h1 className="font-semibold text-2xl">
                {props.tournament.tournament_name}
            </h1>
            <h1 className="font-semibold text-2xl">
                Organized by {props.tournament.organizer}
            </h1>

            <div className="">
                <span className="font-semibold text-xl">
                    Game: 
                </span>
                <span className="font-paragraph text-lg ml-2">  
                    {props.tournament.game}
                </span>
            </div>
            <div className="font-paragraph">
                Registration ends on {props.tournament.registration_start_date}
            </div>
            <Link href={'/tournaments/register/' + props.tournament._id}>
                <button className="bg-yellow-500 text-gray-900 hover:bg-gray-500 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1 w-40">
                    Register
                </button>
            </Link>   
        </div>
    )
}

export default TournamentCard
