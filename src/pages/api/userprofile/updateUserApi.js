import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({ req })
    const {method} = req;

    var today = new Date(), 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const {
        firstname,
        lastname,
        gender,
        phone,
        dob,
        street,
        city,
        bio
    } = req.body

    if (method == 'POST') {
        const { db } = await connectToDatabase();
         await db.collection('users').updateOne(
            {email : session.user.email},
            {
                $set:{
                    firstname,
                    lastname,
                    gender,
                    dob,
                    address : {
                        street,
                        city
                    },
                    phone,
                    bio,
                    update_date: date,
                }
            }
        )

        return res.status(200).json({message: "successful"})
    }
}
