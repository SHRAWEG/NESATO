import React from 'react'
import { connectToDatabase } from '../util/mongodb'

function tournamentResult( {data} ) {
    return (
        <div>
            {data.map((data) => 
                <div>
                    <h1>Match Id: {data._id}</h1>
                    <h2>Winner: {data.winner_team}</h2>

                    <h1>{data.team1.name}</h1>

                    <table className="table-auto border-2 border-l-2 border-black">
                        <thead className="border borer-black">
                            <th className="border border-black p-2 w-44">Players</th>
                            <th className="border border-black p-2 w-44">Agent</th>
                            <th className="border border-black p-2 w-44">Avg Combat Score</th>
                            <th className="border border-black p-2 w-24">Kills</th>
                            <th className="border border-black p-2 w-24">Deaths</th>
                            <th className="border border-black p-2 w-24">Assists</th>
                        </thead>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team1.players[0].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[0].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[0].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[0].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[0].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[0].assists}   
                            </td>
                        </tbody>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team1.players[1].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[1].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[1].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[1].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[1].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[1].assists}   
                            </td>
                        </tbody>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team1.players[2].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[2].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[2].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[2].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[2].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[2].assists}   
                            </td>
                        </tbody>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team1.players[3].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[3].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[3].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[3].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[3].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[3].assists}   
                            </td>
                        </tbody>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team1.players[4].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[4].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[4].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[4].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[4].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team1.players[4].assists}   
                            </td>
                        </tbody>
                    </table>

                    <h1>{data.team2.name}</h1>

                    <table className="table-auto border-2 border-l-2 border-black">
                        <thead className="border borer-black">
                            <th className="border border-black p-2 w-44">Players</th>
                            <th className="border border-black p-2 w-44">Agent</th>
                            <th className="border border-black p-2 w-44">Avg Combat Score</th>
                            <th className="border border-black p-2 w-24">Kills</th>
                            <th className="border border-black p-2 w-24">Deaths</th>
                            <th className="border border-black p-2 w-24">Assists</th>
                        </thead>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team2.players[0].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[0].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[0].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[0].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[0].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[0].assists}   
                            </td>
                        </tbody>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team2.players[1].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[1].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[1].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[1].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[1].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[1].assists}   
                            </td>
                        </tbody>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team2.players[2].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[2].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[2].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[2].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[2].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[2].assists}   
                            </td>
                        </tbody>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team2.players[3].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[3].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[3].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[3].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[3].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[3].assists}   
                            </td>
                        </tbody>
                        <tbody>
                            <td className="border border-black p-2">
                                {data.team2.players[4].name}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[4].agent}    
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[4].avs}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[4].kills}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[4].deaths}     
                            </td>
                            <td className="border border-black p-2">
                                {data.team2.players[4].assists}   
                            </td>
                        </tbody>
                    </table>     
                </div>
            )}
        </div>
    )
}

export async function getStaticProps() {
    const {db} = await connectToDatabase()
    const data = await db.collection('tournaments').find({"_id": "1.1.1.1"}).toArray()

    return {
        props: {
            data: JSON.parse(JSON.stringify(data))
        },
        
        revalidate: 1,
    }
}

export default tournamentResult
