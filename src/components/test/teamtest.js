import React from 'react';
import {useState} from 'react';
import useSWR from 'swr';
import Link from 'next/link';



export default function TestTeam(props) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher);

    // const datas = JSON.stringfy(data)

    
    if (data) {
        let teams = [] = data.teams
        console.log(teams);
        return(
            <>
                 this had loaded.
                 <div>
                    {teams.map((team, key) => (
                        <div key={team._id}>
                            

                            <Link href = {'/test/' + team._id } >
                                <a>
                                    <h3>
                                        {team.team_name}
                                    </h3>
                                </a>
                            </Link>

                        </div>
                    ))}
                 </div>
            </> 
         )
    } else {
        return null
    }


    
    
    
}