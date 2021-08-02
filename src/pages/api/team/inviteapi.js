import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    let alreadySent = false;
    let alreadyJoined = false;

    const {
        user,
        team_id,
    } = req.body ;

    // Converting string _id to object _id
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectID(team_id);

    if (method =='POST') {

        const {db} = await connectToDatabase();

        const sent_to = await db.collection('users').findOne({email: user})
        const sent_by = await db.collection('team').findOne({_id: o_id})

        const team_count = sent_by.player_count()

        const invitation = await db.collection('invitation').find().toArray()

        JSON.parse(JSON.stringify(invitation)).map((data) => {
            if(data.sent_to == sent_to._id && data.sent_by == sent_by._id && data.status=="Pending") {
                alreadySent = true;
            }
        })

        sent_to.teams.map((team) => {
            if (team._id == team_id) {
                alreadyJoined = true;
            }
        })
        
        if (alreadySent) {
            return res.status(403).json({message: "You have already sent the request to this user"})
        }

        if (alreadyJoined) {
            return res.status(403).json({message: "The user is already in the team"})
        }

        if (user == session.user.email) {
            return res.status(403).json({message: "You cannot add yourself to the team"})
        }

        await db.collection('invitation').insertOne({
            sent_by: o_id,
            sent_to: sent_to._id,
            game: sent_by.game,
            status: "Pending"
        }).then(({ops}) => ops[0]);
    }

    return res.status(200).json({message : "successful"})
}