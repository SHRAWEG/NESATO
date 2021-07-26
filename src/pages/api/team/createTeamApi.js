import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    let alreadyExists = false
    let gameExists = false

    const {
        team_name,
        team_tag,
        game,
    } = req.body ;

    if (method =='POST') {
        const {db} = await connectToDatabase();
        
        const user = await db.collection('users').findOne({email: session.user.email})
        const teams = await db.collection('team').find().toArray()

        teams.map((team) => {
            if(team.team_name == team_name & team.game == game) {
                alreadyExists=true
            }
        })

        user.teams.map((team) => {
            if(team.game == game) {
                gameExists=true
            }
        })

        if (alreadyExists) {
            return res.status(403).json({message: "The team name with the chosen game already exists"})
        }

        if (gameExists) {
            return res.status(403).json({message: "You have already joined the team with the chosen game"})
        }

        const team = await db.collection('team').insertOne({
            team_name,
            team_tag,
            team_cap : user._id,
            game,
            players: [
                {
                    _id: user._id,
                    email: user.email,
                    name: user.firstname + user.lastname,
                }
            ]
        }).then(({ops}) => ops[0]);

        await db.collection('users').update(
            {email : session.user.email},
            {
                $push:{
                    teams: 
                        {
                            _id: team._id,
                            team_name,
                            game,
                            isCaptain: true,
                        }
                }
            }
        )
    }

    return res.status(200).json({message : "successful"})
}