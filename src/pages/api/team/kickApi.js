import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const {method} = req;

    let alreadyJoined = false;

    const {
        user_id,
        team_id,
    } = req.body ;

    // Converting string _id to object _id
    var mongo = require('mongodb');
    var t_id = new mongo.ObjectID(team_id);

    var u_id = new mongo.ObjectID(user_id)

    if (method =='POST') {

        const {db} = await connectToDatabase();

        // const sent_to = await db.collection('users').findOne({_id: u_id})
        // const sent_by = await db.collection('team').findOne({_id: t_id})
        // const invitation = await db.collection('invitation').find().toArray()

        await db.collection('team').update(
            { _id : t_id },
            {
                $pull : {
                    players: {
                        _id : u_id
                    }
                }
            },
        )

        await db.collection('users').update(
            { _id : u_id },
            {
                $pull : {
                    teams: {
                        _id : t_id
                    }
                }
            },
        )
    }

    return res.status(200).json({message : "successful"})
}