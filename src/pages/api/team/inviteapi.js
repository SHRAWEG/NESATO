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
        const invitation = await db.collection('invitation').find().toArray()

        JSON.parse(JSON.stringify(invitation)).map((data) => {
            if(data.sent_to == sent_to._id && data.sent_by == sent_by.team_name) {
                alreadySent = true;
            }
        })

        if (sent_to.teams) {
            sent_to.teams.map((team) => {
                if(team.game == sent_by.game) {
                    alreadyJoined = true;
                }
            }
            )
        }

        if (alreadyJoined) {
            return res.status(403).json({message: "The user has already joined the team with the chosen game"})
        }

        if (alreadySent) {
            return res.status(403).json({message: "You have already sent the request to this user"})
        }

        if (user == session.user.email) {
            return res.status(403).json({message: "You cannot add yourself to the team"})
        }

        await db.collection('invitation').insertOne({
            sent_by: o_id,
            sent_to: sent_to._id,
            status: "Pending"
        }).then(({ops}) => ops[0]);
    }

    return res.status(200).json({message : "successful"})
}