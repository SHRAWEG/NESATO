import React from 'react'
import { useState } from 'react'

function tournament() {

    const [match_id, setMatchId] = useState('');
    const [winner, setWinner] = useState('');

    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');

    const [t1p1, setT1p1] = useState('');
    const [t1p2, setT1p2] = useState('');
    const [t1p3, setT1p3] = useState('');
    const [t1p4, setT1p4] = useState('');
    const [t1p5, setT1p5] = useState('');
    const [t2p1, setT2p1] = useState('');
    const [t2p2, setT2p2] = useState('');
    const [t2p3, setT2p3] = useState('');
    const [t2p4, setT2p4] = useState('');
    const [t2p5, setT2p5] = useState('');

    const [t1p1_agent, setT1p1agent] = useState('');
    const [t1p2_agent, setT1p2agent] = useState('');
    const [t1p3_agent, setT1p3agent] = useState('');
    const [t1p4_agent, setT1p4agent] = useState('');
    const [t1p5_agent, setT1p5agent] = useState('');
    const [t2p1_agent, setT2p1agent] = useState('');
    const [t2p2_agent, setT2p2agent] = useState('');
    const [t2p3_agent, setT2p3agent] = useState('');
    const [t2p4_agent, setT2p4agent] = useState('');
    const [t2p5_agent, setT2p5agent] = useState('');

    const [t1p1_avs, setT1p1avs] = useState('');
    const [t1p2_avs, setT1p2avs] = useState('');
    const [t1p3_avs, setT1p3avs] = useState('');
    const [t1p4_avs, setT1p4avs] = useState('');
    const [t1p5_avs, setT1p5avs] = useState('');
    const [t2p1_avs, setT2p1avs] = useState('');
    const [t2p2_avs, setT2p2avs] = useState('');
    const [t2p3_avs, setT2p3avs] = useState('');
    const [t2p4_avs, setT2p4avs] = useState('');
    const [t2p5_avs, setT2p5avs] = useState('');

    const [t1p1_kills, setT1p1kills] = useState('');
    const [t1p2_kills, setT1p2kills] = useState('');
    const [t1p3_kills, setT1p3kills] = useState('');
    const [t1p4_kills, setT1p4kills] = useState('');
    const [t1p5_kills, setT1p5kills] = useState('');
    const [t2p1_kills, setT2p1kills] = useState('');
    const [t2p2_kills, setT2p2kills] = useState('');
    const [t2p3_kills, setT2p3kills] = useState('');
    const [t2p4_kills, setT2p4kills] = useState('');
    const [t2p5_kills, setT2p5kills] = useState('');

    const [t1p1_deaths, setT1p1deaths] = useState('');
    const [t1p2_deaths, setT1p2deaths] = useState('');
    const [t1p3_deaths, setT1p3deaths] = useState('');
    const [t1p4_deaths, setT1p4deaths] = useState('');
    const [t1p5_deaths, setT1p5deaths] = useState('');
    const [t2p1_deaths, setT2p1deaths] = useState('');
    const [t2p2_deaths, setT2p2deaths] = useState('');
    const [t2p3_deaths, setT2p3deaths] = useState('');
    const [t2p4_deaths, setT2p4deaths] = useState('');
    const [t2p5_deaths, setT2p5deaths] = useState('');

    const [t1p1_assists, setT1p1assists] = useState('');
    const [t1p2_assists, setT1p2assists] = useState('');
    const [t1p3_assists, setT1p3assists] = useState('');
    const [t1p4_assists, setT1p4assists] = useState('');
    const [t1p5_assists, setT1p5assists] = useState('');
    const [t2p1_assists, setT2p1assists] = useState('');
    const [t2p2_assists, setT2p2assists] = useState('');
    const [t2p3_assists, setT2p3assists] = useState('');
    const [t2p4_assists, setT2p4assists] = useState('');
    const [t2p5_assists, setT2p5assists] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = fetch('/api/valoScore', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                match_id, 
                winner,
        
                t1, 
        
                t2,

                t1p1, 
                t1p1_kills, 
                t1p1_assists, 
                t1p1_deaths, 
                t1p1_avs,
                t1p1_agent,

                t1p2, 
                t1p2_kills, 
                t1p2_assists, 
                t1p2_deaths, 
                t1p2_avs,
                t1p2_agent,

                t1p3, 
                t1p3_kills, 
                t1p3_assists, 
                t1p3_deaths, 
                t1p3_avs,
                t1p3_agent,

                t1p4, 
                t1p4_kills, 
                t1p4_assists, 
                t1p4_deaths, 
                t1p4_avs,
                t1p4_agent,

                t1p5, 
                t1p5_kills, 
                t1p5_assists, 
                t1p5_deaths, 
                t1p5_avs,
                t1p5_agent,

                t2p1, 
                t2p1_kills, 
                t2p1_assists, 
                t2p1_deaths, 
                t2p1_avs,
                t2p1_agent,

                t2p2, 
                t2p2_kills,  
                t2p2_assists, 
                t2p2_deaths, 
                t2p2_avs,
                t2p2_agent,

                t2p3, 
                t2p3_kills, 
                t2p3_assists, 
                t2p3_deaths, 
                t2p3_avs,
                t2p3_agent,

                t2p4, 
                t2p4_kills, 
                t2p4_assists, 
                t2p4_deaths, 
                t2p4_avs,
                t2p4_agent,

                t2p5, 
                t2p5_kills, 
                t2p5_assists, 
                t2p5_deaths, 
                t2p5_avs,
                t2p5_agent,
            }),
        })

        if (res.status === 200) {
            alert('Successful');
        }

        else {
            alert('Unsuccessful');
        }
    }

    
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input 
                    className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={match_id}
                    onChange={(e) => setMatchId(e.target.value)} 
                    name="match_id"
                    id="match_id"
                    aria-describedby="at-sign"
                    type="text"
                    placeholder="Match Id"
                />

                <input 
                    className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={winner}
                    onChange={(e) => setWinner(e.target.value)} 
                    name="winner"
                    id="winner"
                    aria-describedby="at-sign"
                    type="text"
                    placeholder="Winner"
                /> 

                <input 
                    className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={t1}
                    onChange={(e) => setT1(e.target.value)} 
                    name="t1"
                    id="t1"
                    aria-describedby="at-sign"
                    type="text"
                    placeholder="First Team"
                />
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
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p1}
                                onChange={(e) => setT1p1(e.target.value)} 
                                name="t1p1"
                                id="t1p1"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 1"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p1_agent}
                                onChange={(e) => setT1p1agent(e.target.value)} 
                                name="t1p1_agent"
                                id="t1p1_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p1_avs}
                                onChange={(e) => setT1p1avs(e.target.value)} 
                                name="t1p1_avs"
                                id="t1p1_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p1_kills}
                                onChange={(e) => setT1p1kills(e.target.value)} 
                                name="t1p1_kills"
                                id="t1p1_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p1_deaths}
                                onChange={(e) => setT1p1deaths(e.target.value)} 
                                name="t1p1_deaths"
                                id="t1p1_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p1_assists}
                                onChange={(e) => setT1p1assists(e.target.value)} 
                                name="t1p1_assists"
                                id="t1p1_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                    <tbody>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p2}
                                onChange={(e) => setT1p2(e.target.value)} 
                                name="t1p2"
                                id="t1p2"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 2"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p2_agent}
                                onChange={(e) => setT1p2agent(e.target.value)} 
                                name="t1p2_agent"
                                id="t1p2_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p2_avs}
                                onChange={(e) => setT1p2avs(e.target.value)} 
                                name="t1p2_avs"
                                id="t1p2_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p2_kills}
                                onChange={(e) => setT1p2kills(e.target.value)} 
                                name="t1p2_kills"
                                id="t1p2_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p2_deaths}
                                onChange={(e) => setT1p2deaths(e.target.value)} 
                                name="t1p2_deaths"
                                id="t1p2_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p2_assists}
                                onChange={(e) => setT1p2assists(e.target.value)} 
                                name="t1p2_assists"
                                id="t1p2_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                    <tbody>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p3}
                                onChange={(e) => setT1p3(e.target.value)} 
                                name="t1p3"
                                id="t1p3"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 3"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p3_agent}
                                onChange={(e) => setT1p3agent(e.target.value)} 
                                name="t1p3_agent"
                                id="t1p3_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p3_avs}
                                onChange={(e) => setT1p3avs(e.target.value)} 
                                name="t1p3_avs"
                                id="t1p3_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p3_kills}
                                onChange={(e) => setT1p3kills(e.target.value)} 
                                name="t1p3_kills"
                                id="t1p3_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p3_deaths}
                                onChange={(e) => setT1p3deaths(e.target.value)} 
                                name="t1p3_deaths"
                                id="t1p3_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p3_assists}
                                onChange={(e) => setT1p3assists(e.target.value)} 
                                name="t1p3_assists"
                                id="t1p3_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                    <tbody>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p4}
                                onChange={(e) => setT1p4(e.target.value)} 
                                name="t1p4"
                                id="t1p4"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 4"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p4_agent}
                                onChange={(e) => setT1p4agent(e.target.value)} 
                                name="t1p4_agent"
                                id="t1p4_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p4_avs}
                                onChange={(e) => setT1p4avs(e.target.value)} 
                                name="t1p4_avs"
                                id="t1p4_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p4_kills}
                                onChange={(e) => setT1p4kills(e.target.value)} 
                                name="t1p4_kills"
                                id="t1p4_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p4_deaths}
                                onChange={(e) => setT1p4deaths(e.target.value)} 
                                name="t1p4_deaths"
                                id="t1p4_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p4_assists}
                                onChange={(e) => setT1p4assists(e.target.value)} 
                                name="t1p4_assists"
                                id="t1p4_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                    <tbody>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p5}
                                onChange={(e) => setT1p5(e.target.value)} 
                                name="t1p5"
                                id="t1p5"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 5"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p5_agent}
                                onChange={(e) => setT1p5agent(e.target.value)} 
                                name="t1p5_agent"
                                id="t1p5_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p5_avs}
                                onChange={(e) => setT1p5avs(e.target.value)} 
                                name="t1p5_avs"
                                id="t1p5_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p5_kills}
                                onChange={(e) => setT1p5kills(e.target.value)} 
                                name="t1p5_kills"
                                id="t1p5_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p5_deaths}
                                onChange={(e) => setT1p5deaths(e.target.value)} 
                                name="t1p5_deaths"
                                id="t1p5_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t1p5_assists}
                                onChange={(e) => setT1p5assists(e.target.value)} 
                                name="t1p5_assists"
                                id="t1p5_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                </table>

                <input 
                    className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={t2}
                    onChange={(e) => setT2(e.target.value)}  
                    name="t2"
                    id="t2"
                    aria-describedby="at-sign"
                    type="text"
                    placeholder="Second Team"
                />

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
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p1}
                                onChange={(e) => setT2p1(e.target.value)} 
                                name="t2p1"
                                id="t2p1"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 1"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p1_agent}
                                onChange={(e) => setT2p1agent(e.target.value)} 
                                name="t2p1_agent"
                                id="t2p1_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p1_avs}
                                onChange={(e) => setT2p1avs(e.target.value)} 
                                name="t2p1_avs"
                                id="t2p1_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p1_kills}
                                onChange={(e) => setT2p1kills(e.target.value)} 
                                name="t2p1_kills"
                                id="t2p1_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p1_deaths}
                                onChange={(e) => setT2p1deaths(e.target.value)} 
                                name="t2p1_deaths"
                                id="t2p1_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p1_assists}
                                onChange={(e) => setT2p1assists(e.target.value)} 
                                name="t2p1_assists"
                                id="t2p1_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                    <tbody>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p2}
                                onChange={(e) => setT2p2(e.target.value)} 
                                name="t2p2"
                                id="t2p2"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 2"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p2_agent}
                                onChange={(e) => setT2p2agent(e.target.value)} 
                                name="t2p2_agent"
                                id="t2p2_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p2_avs}
                                onChange={(e) => setT2p2avs(e.target.value)} 
                                name="t2p2_avs"
                                id="t2p2_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p2_kills}
                                onChange={(e) => setT2p2kills(e.target.value)} 
                                name="t2p2_kills"
                                id="t2p2_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p2_deaths}
                                onChange={(e) => setT2p2deaths(e.target.value)} 
                                name="t2p2_deaths"
                                id="t2p2_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p2_assists}
                                onChange={(e) => setT2p2assists(e.target.value)} 
                                name="t2p2_assists"
                                id="t2p2_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                    <tbody>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p3}
                                onChange={(e) => setT2p3(e.target.value)} 
                                name="t2p3"
                                id="t2p3"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 3"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p3_agent}
                                onChange={(e) => setT2p3agent(e.target.value)} 
                                name="t2p3_agent"
                                id="t2p3_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p3_avs}
                                onChange={(e) => setT2p3avs(e.target.value)} 
                                name="t2p3_avs"
                                id="t2p3_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p3_kills}
                                onChange={(e) => setT2p3kills(e.target.value)} 
                                name="t2p3_kills"
                                id="t2p3_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p3_deaths}
                                onChange={(e) => setT2p3deaths(e.target.value)} 
                                name="t2p3_deaths"
                                id="t2p3_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p3_assists}
                                onChange={(e) => setT2p3assists(e.target.value)} 
                                name="t2p3_assists"
                                id="t2p3_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                    <tbody>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p4}
                                onChange={(e) => setT2p4(e.target.value)} 
                                name="t2p4"
                                id="t2p4"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 4"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p4_agent}
                                onChange={(e) => setT2p4agent(e.target.value)} 
                                name="t2p4_agent"
                                id="t2p4_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p4_avs}
                                onChange={(e) => setT2p4avs(e.target.value)} 
                                name="t2p4_avs"
                                id="t2p4_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p4_kills}
                                onChange={(e) => setT2p4kills(e.target.value)} 
                                name="t2p4_kills"
                                id="t2p4_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p4_deaths}
                                onChange={(e) => setT2p4deaths(e.target.value)} 
                                name="t2p4_deaths"
                                id="t2p4_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p4_assists}
                                onChange={(e) => setT2p4assists(e.target.value)} 
                                name="t2p4_assists"
                                id="t2p4_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                    <tbody>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p5}
                                onChange={(e) => setT2p5(e.target.value)} 
                                name="t2p5"
                                id="t2p5"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Player 5"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-50 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p5_agent}
                                onChange={(e) => setT2p5agent(e.target.value)} 
                                name="t2p5_agent"
                                id="t2p5_agent"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Agent"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-36 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p5_avs}
                                onChange={(e) => setT2p5avs(e.target.value)} 
                                name="t2p5_avs"
                                id="t2p5_avs"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="AVS"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p5_kills}
                                onChange={(e) => setT2p5kills(e.target.value)} 
                                name="t2p5_kills"
                                id="t2p5_kills"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Kills"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p5_deaths}
                                onChange={(e) => setT2p5deaths(e.target.value)} 
                                name="t2p5_deaths"
                                id="t2p5_deaths"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Deaths"
                            />
                        </td>
                        <td className="border border-black p-2">
                            <input 
                                className="shadow appearance-none border w-24 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={t2p5_assists}
                                onChange={(e) => setT2p5assists(e.target.value)} 
                                name="t2p5_assists"
                                id="t2p5_assists"
                                aria-describedby="at-sign"
                                type="text"
                                placeholder="Assists"
                            />
                        </td>
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default tournament
