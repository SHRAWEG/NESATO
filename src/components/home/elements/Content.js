import React from 'react'
import { faTrophy, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Content() {
    return (
            <div className="flex justify-evenly gap-5">
                <button className="w-4/12" id="tournament">

                    <div className="bg-gray-300 text-gray-800 px-4 py-10 text-center font-bold rounded-xl text-3xl shadow-xl hover:bg-yellow-500 transition duration-150 ease-in-out transform hover:scale-110">
                        <FontAwesomeIcon icon={faTrophy} className="text-5xl"/>
                        <br /><br />Tournaments
                    </div>

                </button>

                <button className="w-4/12" id="searchPlayers">
                    <div className="bg-gray-300 text-gray-800 px-4 py-10 text-center font-bold rounded-xl text-3xl shadow-xl hover:bg-yellow-500 transition duration-150 ease-in-out transform hover:scale-110">
                        <FontAwesomeIcon icon={faSearch} className="text-5xl"/>
                        <br /><br />
                        Search Players
                    </div>
                </button>

                <button className="w-4/12" id="joinTeam">
                    <div className="bg-gray-300 text-gray-800 px-4 py-10 text-center font-bold rounded-xl text-3xl shadow-xl hover:bg-yellow-500 transition duration-150 ease-in-out transform hover:scale-110">
                        <FontAwesomeIcon icon={faUsers} className="text-5xl"/>
                        <br /><br />
                        Join Team
                    </div>
                </button>        
            </div>
    )
}

export default Content
