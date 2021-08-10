import { connectToDatabase } from "../../../utils/mongodb";

export default async (req, res) => {
    const {method} = req;
    const {
        user_id,
        team_id,
    } = req.body ;

    var mongo = require('mongodb');

    var t_id = new mongo.ObjectID(team_id);
    var u_id = new mongo.ObjectID(user_id)

    if (method =='POST') {
        const {db} = await connectToDatabase();
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