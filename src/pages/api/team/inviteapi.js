import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    const {
        sent_to
    } = req.body ;

    if (method =='POST') {
        const {db} = await connectToDatabase();

        const user = await db.collection('users').findOne({email : session.user.email})

        const team = user.team_name;

        

        

        await db.collection('notification').insertOne({
            sent_by: team,
            sent_to: sent_to,
            type: "Team Invitation",
            status: "Pending"
        }).then(({ops}) => ops[0]);
    }

    return res.status(200).json({message : "successful"})
}