import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    const {
        user
    } = req.body ;

    if (method =='POST') {
        const {db} = await connectToDatabase();

        await db.collection('notification').insertOne({
            sent_by: session.user.team_name,
            sent_to: user,
            type: "Team Invitation",
            status: "Pending"
        }).then(({ops}) => ops[0]);
    }

    return res.status(200).json({message : "successful"})
}