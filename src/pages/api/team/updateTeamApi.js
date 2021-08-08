import { connectToDatabase } from "../../../utils/mongodb";
import { getSession} from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({req});
    var today = new Date(), 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

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

    return (
        res.status(200).json({
            message: "successful",
        })
    )
}