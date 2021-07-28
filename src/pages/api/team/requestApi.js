import { connectToDatabase } from "../../../utils/mongodb";

export default async (req, res) => {
    const {method} = req;

    let alreadySent = false;

    const {
        user_id,
        team_id,
    } = req.body;

    if (method =='POST') {
        var mongo = require('mongodb');

        const {db} = await connectToDatabase();

        const request = await db.collection('request').find().toArray()

        JSON.parse(JSON.stringify(request)).map((data) => {
            if(data.sent_to == user_id && data.sent_by == team_id & data.status=="Pending") {
                alreadySent = true;
            }
        })

        if (alreadySent) {
            return res.status(403).json({message: "You have already sent the request to this team"})
        }

        await db.collection('request').insertOne({
            sent_by: new mongo.ObjectID(user_id),
            sent_to: new mongo.ObjectID(team_id),
            status: "Pending"
        }).then(({ops}) => ops[0]);
        
        return res.status(200).json({message: "Successful"})

    }
    
}
