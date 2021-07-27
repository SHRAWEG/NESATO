import React from 'react';
import {useState} from 'react';
import useSWR from 'swr';


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
                        <div key={key}>
                            {team.team_name}
                            <br/>
                            <a href="/team/">
                                <button type="submit" onClick={()=>console.log(team._id)} value={team._id} >Invite</button>
                            </a>
                            
                            <br/>
                        </div>
                    ))}
                 </div>
            </> 
         )
    }

    else {
        return null
    }
    
    
    
}