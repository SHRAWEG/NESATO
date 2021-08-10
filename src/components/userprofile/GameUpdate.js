import React from 'react'
import Image from 'next/dist/client/image';
import router from 'next/router';
import { useState } from 'react';

function GameUpdate(props) {
    const [searchGame, setSearchGame] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('/api/userprofile/games/updateGameApi', {
            body: JSON.stringify({
                id: e.target.id.value,
                game: e.target.game.value,
            }),
            headers: {
            'Content-Type': 'application/json'
            },
            method: 'POST'
            })

            if (res.status == 200) {
                router.reload('/userprofile/games/updategames')
            }
    }

    const handleRemove = async (e) => {
        const game_name = e.target.value

        const res = await fetch('/api/userprofile/games/deleteGameApi', {
            body: JSON.stringify({
                game: game_name
            }),
            headers: {
            'Content-Type': 'application/json'
            },
            method: 'POST'
            })

            if (res.status == 200) {
                router.reload('/userprofile/games/updategames')
            }
    }

    if(!props.self.games) {
        return (
            <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5">
                <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-10 w-8/12 items-center mt-32" id="midMain">
                    You Dont have any games
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5">
            <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-10 w-8/12 items-center mt-32" id="midMain">   
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

                <div className="flex flex-col gap-8 mt-10">
                    {props.self.games.filter((val) => {
                        if (searchGame == "" ) {
                            return val
                        } else if (val.name.toLowerCase().includes(searchGame.toLowerCase())) {
                            return val;
                        }
                        }).map((val, key) => (
                            <form key={key} onSubmit={handleSubmit}>
                                <div className="flex bg-gray-100 rounded-2xl justify-between" >
                                    <div className="w-5/12 h-auto rounded-l-2xl my-auto flex items-center overflow-hidden">
                                        <Image src={require('../../../public/img/games/' + val.name + '.jpg')} />
                                    </div>
                                    <div className="flex flex-col items-center justify-evenly w-7/12">
                                        <div className="flex flex-col items-center">
                                            
                                            <label className="text-xl mt-1 font-semibold mr-2">
                                                Current {val.id_label}
                                            </label>
                                            {
                                             val.id ? (
                                                val.id
                                             ): (
                                                 "#NAN"
                                             )
                                            }
                                            <label className="text-xl mt-1 font-semibold mr-2">
                                                New {val.id_label}
                                            </label>
                                            <input
                                                className="border-gray-400 border-2 w-80 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                                id="id"
                                                name={val.id_name}
                                                autoComplete= "off"
                                            />
                                            <input
                                                className="hidden"
                                                id="game"
                                                value={val.name}
                                                readOnly
                                            />
                                        </div>
                                        <div className="flex justify-between gap-16">
                                            <button className="bg-red-600 text-gray-900 hover:bg-red-800 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1 w-32" value={val.name} onClick={handleRemove}>
                                                Remove
                                            </button>
                                            <button className="bg-yellow-500 text-gray-900 hover:bg-gray-500 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1 w-28" type="submit" >
                                                Save
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GameUpdate
