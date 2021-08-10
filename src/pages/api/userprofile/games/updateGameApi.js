import { connectToDatabase } from "../../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({ req })
    const {method} = req;

    const {
        id,
        game,
    } = req.body

    if (method == 'POST') {
        const { db } = await connectToDatabase();

        if(id != "") {
            await db.collection('users').updateOne(
                {
                    email : session.user.email,
                    "games.name" : game
                },
                {     
                    $set: {
                        "games.$.id": id
                    }
                }
            )
        }

        return res.status(200).json({message: "successful"})
    }
}
