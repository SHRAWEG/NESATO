import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({ req })
    const {method} = req;
    const {
        firstname,
        lastname,
        address,
        gender,
        phone,
        dob,
    } = req.body

    if (method == 'POST') {
        const { db } = await connectToDatabase();
         await db.collection('users').update(
            {email : session.user.email},
            {
                $set:{
                    firstname,
                    lastname,
                    address,
                    gender,
                    phone,
                    dob,
                }
            }
        )

        return res.status(200).json({message: "successful"})
    }
}
