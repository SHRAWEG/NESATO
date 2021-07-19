import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
    const {method} = req;

    const {scores} = await connectToDatabase();

    const { 
        match_id, 
        winner_Id,

        t1_id, 
        t1_name, 

        t2_id, 
        t2_name,

        t1p1, 
        t1p1_kills, 
        t1p1_assists, 
        t1p1_assists, 
        t1p1_deaths, 
        t1p1_avs,
        t1p1_agent,

        t1p2, 
        t1p2_kills, 
        t1p2_assists, 
        t1p2_assists, 
        t1p2_deaths, 
        t1p2_avs,
        t1p2_agent,

        t1p3, 
        t1p3_kills, 
        t1p3_assists, 
        t1p3_assists, 
        t1p3_deaths, 
        t1p3_avs,
        t1p3_agent,

        t1p4, 
        t1p4_kills, 
        t1p4_assists, 
        t1p4_assists, 
        t1p4_deaths, 
        t1p4_avs,
        t1p4_agent,

        t1p5, 
        t1p5_kills, 
        t1p5_assists, 
        t1p5_assists, 
        t1p5_deaths, 
        t1p5_avs,
        t1p5_agent,

        t2p1, 
        t2p1_kills, 
        t2p1_assists, 
        t2p1_assists, 
        t2p1_deaths, 
        t2p1_avs,
        t2p1_agent,

        t2p2, 
        t2p2_kills, 
        t2p2_assists, 
        t2p2_assists, 
        t2p2_deaths, 
        t2p2_avs,
        t2p2_agent,

        t2p3, 
        t2p3_kills, 
        t2p3_assists, 
        t2p3_assists, 
        t2p3_deaths, 
        t2p3_avs,
        t2p3_agent,

        t2p4, 
        t2p4_kills, 
        t2p4_assists, 
        t2p4_assists, 
        t2p4_deaths, 
        t2p4_avs,
        t2p4_agent,

        t2p5, 
        t2p5_kills, 
        t2p5_assists, 
        t2p5_assists, 
        t2p5_deaths, 
        t2p5_avs,
        t2p5_agent,
    } = req.body;

    if ( method == 'POST') {
        const matchScore = await scores.collection('tournaments').insertOne(
            {   
                "matches": {
                    "_id": match_id,
                    "winner_team": winner_Id,
                    "team1": {
                        "id": t1_id,
                        "name": t1_name,
                        "players": [
                            {
                                "name": t1p1,
                                "kills": t1p1_kills,
                                "assists": t1p1_assists,
                                "deaths": t1p1_deaths,
                                "avs": t1p1_avs,
                                "agent": t1p1_agent
                            },
                            {
                                "name": t1p2,
                                "kills": t1p2_kills,
                                "assists": t1p2_assists,
                                "deaths": t1p2_deaths,
                                "avs": t1p2_avs,
                                "agent": t1p2_agent
                            },
                            {
                                "name": t1p3,
                                "kills": t1p3_kills,
                                "assists": t1p3_assists,
                                "deaths": t1p3_deaths,
                                "avs": t1p3_avs,
                                "agent": t1p3_agent
                            },
                            {
                                "name": t1p4,
                                "kills": t1p4_kills,
                                "assists": t1p4_assists,
                                "deaths": t1p4_deaths,
                                "avs": t1p4_avs,
                                "agent": t1p4_agent
                            },
                            {
                                "name": t1p5,
                                "kills": t1p5_kills,
                                "assists": t1p5_assists,
                                "deaths": t1p5_deaths,
                                "avs": t1p5_avs,
                                "agent": t1p5_agent
                            },
                        ]
                    },        
                        
                    "team2": {
                        "id": t2_id,
                        "name": t2_name,
                        "players": [
                            {
                                "name": t2p1,
                                "kills": t2p1_kills,
                                "assists": t2p1_assists,
                                "deaths": t2p1_deaths,
                                "avs": t2p1_avs,
                                "agent": t2p1_agent
                            },
                            {
                                "name": t2p2,
                                "kills": t2p2_kills,
                                "assists": t2p2_assists,
                                "deaths": t2p2_deaths,
                                "avs": t2p2_avs,
                                "agent": t2p2_agent
                            },
                            {
                                "name": t2p3,
                                "kills": t2p3_kills,
                                "assists": t2p3_assists,
                                "deaths": t2p3_deaths,
                                "avs": t2p3_avs,
                                "agent": t2p3_agent
                            },
                            {
                                "name": t2p4,
                                "kills": t2p4_kills,
                                "assists": t2p4_assists,
                                "deaths": t2p4_deaths,
                                "avs": t2p4_avs,
                                "agent": t2p4_agent
                            },
                            
                            {
                                "name": t2p5,
                                "kills": t2p5_kills,
                                "assists": t2p5_assists,
                                "deaths": t2p5_deaths,
                                "avs": t2p5_avs,
                                "agent": t2p5_agent
                            },
                                
                        ]
                    }
                }
            }
        ). then(({ ops }) => ops[0]);

        res.status(200).json({message: "success"});
    }

    if (method == 'GET') {
        
    }
}
