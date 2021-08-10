import { connectToDatabase } from "../../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({ req })
    const {method} = req;

    const {
        id,
        id_name,
        game,
        id_label,
    } = req.body

    if (method == 'POST') {
        const { db } = await connectToDatabase();

        await db.collection('users').updateOne(
            {email : session.user.email},
            {     
                $push: {
                    games: {
                        name: game,
                        id_name,
                        id_label,
                        id
                    }     
                }
            }
        )

        return res.status(200).json({message: "successful"})
    }
}
