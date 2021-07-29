import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    let alreadyExists = false

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

        if(!user.firstname) {
            return res.status(403).json({message: "You have not completed your profile please complete your profile first to continue."})
        }
        
        if (alreadyExists) {
            return res.status(403).json({message: "The team name with the chosen game already exists"})
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
                    username : user.username
                }
            ]
        }).then(({ops}) => ops[0]);

        await db.collection('users').updateOne(
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