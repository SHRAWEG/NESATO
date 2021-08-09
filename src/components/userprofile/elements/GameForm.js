import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import csgo from '../../../../public/img/games/csgo.jpg'
import dota2 from '../../../../public/img/games/dota2.jpg'
import router from 'next/router';

function GameForm(props) {
    const [searchGame, setSearchGame] = useState('')

    let gamesAvailable = true;
    let games = []

    let idExists = false;

    props.games.map((game) => {
        if(props.self.games) {
            props.self.games.map((game1) => {
                if(game.name == game1.name) {
                    gamesAvailable = false
                }
            })
            if(gamesAvailable) {
                games.push(game)
            }
        } else {
            games.push(game)
        }
        gamesAvailable = true;
    })  

    const handleSubmit = async (e) => {
        e.preventDefault()


        const res = await fetch('/api/userprofile/addGameApi', {
            body: JSON.stringify({
                id: e.target.id.value,
                game: e.target.game.value,
                id_name: e.target.id_name.value,
                label: e.target.label.value
            }),
            headers: {
            'Content-Type': 'application/json'
            },
            method: 'POST'
            })

        if (res.status == 200) {
            router.push('/userprofile/' + props.self._id)
        }
    }

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
                
                <div className="flex flex-col gap-8 mt-10">
                    {games.filter((val) => {
                        if (searchGame == "" ) {
                            return val
                        } else if (val.name.toLowerCase().includes(searchGame.toLowerCase())) {
                            return val;
                        }
                        }).map((val, key) => {

                            let id_value

                            if (props.self.gamer_id) {
                                props.self.gamer_id.map((id) => {
                                    if(id.id_name == val.id) {
                                        idExists = true
                                        id_value = id.id
                                    }
                                })
                            }

                            if (idExists) {
                                idExists = false

                                return (
                                    <form key={key} onSubmit={handleSubmit}>
                                        <div className="flex bg-gray-100 rounded-2xl justify-between" >
                                            <div className="w-6/12 h-auto rounded-l-2xl my-auto flex items-center overflow-hidden">
                                                <Image src={require('../../../../public/img/games/' + val.name + '.jpg')} />
                                            </div>
                                            <div className="flex flex-col items-center justify-evenly w-6/12">
                                                <div className="flex flex-col">
                                                    <label className="text-xl mt-1 font-semibold mr-2" htmlFor={val.id}>
                                                        {val.label}
                                                    </label>
                                                    <input
                                                        className="border-gray-400 border-2 w-80 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                                        id="id"
                                                        name={val.id}
                                                        value={id_value}
                                                        disabled
                                                        autoComplete= "off"
                                                    />
                                                    <input
                                                        className="hidden"
                                                        id="game"
                                                        value={val.name}
                                                        readOnly
                                                    />
                                                    <input
                                                        className="hidden"
                                                        id="id_name"
                                                        value={val.id}
                                                        readOnly
                                                    />
                                                    <input
                                                        className="hidden"
                                                        id="label"
                                                        value={val.label}
                                                        readOnly
                                                    />
                                                </div>
                                                
                                                <div>
                                                <button className="bg-yellow-500 text-gray-900 hover:bg-gray-500 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1 w-40" type="submit" >
                                                    Add 
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )
                                
                            }

                            return (
                                <form key={key} onSubmit={handleSubmit}>
                                    <div className="flex bg-gray-100 rounded-2xl justify-between" >
                                        <div className="w-6/12 h-auto rounded-l-2xl my-auto flex items-center overflow-hidden">
                                            <Image src={require('../../../../public/img/games/' + val.name + '.jpg')} />
                                        </div>
                                        <div className="flex flex-col items-center justify-evenly w-6/12">
                                            <div className="flex flex-col">
                                                <label className="text-xl mt-1 font-semibold mr-2" htmlFor={val.id}>
                                                    {val.label}
                                                </label>
                                                <input
                                                    className="border-gray-400 border-2 w-80 hover:border-yellow-500 focus:outline-none focus:border-yellow-200 rounded-full h-10 pl-4 text-black-500"
                                                    id="id"
                                                    name={val.id}
                                                    required
                                                    autoComplete= "off"
                                                />
                                                <input
                                                    className="hidden"
                                                    id="game"
                                                    value={val.name}
                                                    readOnly
                                                />
                                                <input
                                                    className="hidden"
                                                    id="id_name"
                                                    value={val.id}
                                                    readOnly
                                                />
                                                <input
                                                        className="hidden"
                                                        id="label"
                                                        value={val.label}
                                                        readOnly
                                                    />
                                            </div>
                                            
                                            <div>
                                            <button className="bg-yellow-500 text-gray-900 hover:bg-gray-500 hover:text-gray-200 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110 hover:-translate-y-1 w-40" type="submit" >
                                                Add 
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )
                        }    
                        )
                    }
                </div>
            </div>
        </>
    )

}

export default GameForm
