import { connectToDatabase } from "../../../utils/mongodb";
import { useSession } from "next-auth/client";

export default async (req, res) => {
    const [session] = getSession();
    const {method} = req;

    const {
        // team_id,
        team_name,
        team_tag,
        // team_formdate,
    } = req.body ;

    if (method =='POST') {
        const {db} = await connectToDatabase();
        await db.collection('team').insertOne(
            team_name,
            team_tag,
            // 'team_formdate' = team_formdate,
            // (team_captain = session.user.email)

        ).then(({ops}) => ops[0]);
    }

    return res.status(200).json({message : "successful"})
}