import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({ req })
    const {method} = req;

    const {
        id,
        id_name,
        game,
    } = req.body

    if (method == 'POST') {
        const { db } = await connectToDatabase();

        let idExists = false;

        const user = await db.collection('users').findOne({email: session.user.email})

        if(user.gamer_id)
            user.gamer_id.map((ids) => {
                if(ids[id_name]) {
                    idExists = true;
                }
            })

        if (idExists) {
            await db.collection('users').updateOne(
                {email : session.user.email},
                {     
                    $push: {
                        games: {
                            name: game
                        }     
                    }
                }
            )
        } else {
            await db.collection('users').updateOne(
                {email : session.user.email},
                {     
                    $push: {
                        games: {
                            name: game
                        },
                        gamer_id: {
                            [id_name] : id,
                        }      
                    }
                }
            )
        }
        return res.status(200).json({message: "successful"})
    }
}
