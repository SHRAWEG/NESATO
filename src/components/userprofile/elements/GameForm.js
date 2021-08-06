import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import csgo from '../../../../public/img/games/csgo.jpg'
import dota2 from '../../../../public/img/games/dota2.jpg'

function GameForm() {
    const [searchGame, setSearchGame] = useState('')



    return (
        <> 
            <div>
                <label className="block text-gray-700 text-lg font-bold mb-2" >
                    Search for games
                </label>
                <input
                    className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Search.."
                    name="search"
                    onChange={(e) => {
                        setSearchGame(e.target.value);
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
        </>
    )
}

export default GameForm
