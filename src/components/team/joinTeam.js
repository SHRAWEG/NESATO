import { getSession } from "next-auth/client";
import React from "react";
import {useState} from 'react';

export default function JoinTeam() {
    const [searchTeam, setSearchTeam] = useState();

    const session = getSession();

    
    return(
        <>
            <div>
                <label className="block text-gray-700 text-lg font-bold mb-2" >
                    Search a team to Join.
                </label>
                <input
                    className = "shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus: outline-none focus:shadow-outline"
                    type = "text"
                    placeholder = "Search"
                    name = "search"
                    onChange = {(e) => {
                        setSearchTeam(e.target.value);
                    }}
                    autoComplete="off"
                >
                

                </input>
            </div>
        </>
    )
}