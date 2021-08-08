import { connectToDatabase } from "../../../utils/mongodb";

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

        const sent_to = await db.collection('users').findOne({_id: u_id})
        const sent_by = await db.collection('team').findOne({_id: t_id})

        const invitationCount = await db.collection('invitation').find({$and: [{sent_by: t_id}, {$or: [{status: "Pending"}, {status: "Accepted"}]}]}).count()

        const alreadySent = await db.collection('invitation').findOne({$and: [{sent_to: u_id}, {sent_by: t_id}, {status: "Pending"}]})

        if (sent_to.teams) {
            sent_to.teams.map((team) => {
                if (team._id == team_id) {
                    alreadyJoined = true;
                }
            })
        }
        
        if (alreadySent) {
            return res.status(403).json({message: "You have already sent the request to this user"})
        }

        if (alreadyJoined) {
            return res.status(403).json({message: "The user is already in the team"})
        }

        if(invitationCount == 6) {
            return res.status(403).json({message: "The invitation limit has been exceeded"})
        }

        await db.collection('invitation').insertOne({
            sent_by: t_id,
            sent_to: u_id,
            game: sent_by.game,
            status: "Pending"
        }).then(({ops}) => ops[0]);
    }

    return res.status(200).json({
        message : "successful"
    })
}