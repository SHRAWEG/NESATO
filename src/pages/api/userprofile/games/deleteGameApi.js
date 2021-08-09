import { connectToDatabase } from "../../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({ req })
    const {method} = req;

    const {
        game,
    } = req.body

    if (method == 'POST') {
        const { db } = await connectToDatabase();

        await db.collection('users').updateOne(
            {
                email : session.user.email,
            },
            {     
                $pull: {
                    games: {
                        name: game
                    }
                }
            }
        )

        return res.status(200).json({message: "successful"})
    }
}
