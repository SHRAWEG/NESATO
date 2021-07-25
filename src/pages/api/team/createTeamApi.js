import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    const {
        team_name,
        team_tag,
    } = req.body ;

    if (method =='POST') {
        const {db} = await connectToDatabase();
        await db.collection('team').insertOne({
            team_name,
            team_tag,
            team_cap : session.user.email,
        }).then(({ops}) => ops[0]);

        

        await db.collection('users').update(
            {email : session.user.email},
            {
                $set:{
                    team_name,
                }
            }
        )
    }

    return res.status(200).json({message : "successful"})
}