import { connectToDatabase } from "../../../utils/mongodb";
import { getSession} from "next-auth/client";

export default async (req, res) => {
    //getting session 
    const session = await getSession({req});

    //getting newDate
    var today = new Date(), 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    //collecting resources from request
    const {method} = req;
    const {
        team_name,
        bio,
        team_id,
    } = req.body;

    var  mongo  = require('mongodb');
    var o_id = new mongo.ObjectID(team_id);
    
    if(method == "POST") {
        const {db} = await connectToDatabase();
        const alreadyExists = false
        const teams = await db.collection('teams').find()
        const team = await db.collection('teams').findOne({
            _id : o_id
        })

        teams.map((team) => {
            if(team.team_name == team_name & team.game == game) {
                alreadyExists=true
            }
        })

        if(alreadyExists) {
            res.status(405).json({ error:true, message: "Team name is already taken" });
        }
        else {
            await db.collection('team').update(
                {"_id" : o_id},
                {
                    $set:{
                        team_name,
                        bio,
                        update_date: date,
                    }
                }
            )

            await db.collection('users').update(
                {
                    email : session.user.email,
                    "teams._id" : o_id
                },
                {
                    $set:{
                        "teams.$.team_name" : team_name
                    }
                }
            )
        }

        
        
    } 

    return (
        res.status(200).json({
            message: "successful",
        })
    )
}