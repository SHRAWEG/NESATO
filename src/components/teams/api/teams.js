import { connectToDatabase } from "../../../utils/mongodb";

export default async (req, res) => {
    const {method} = req;
    const {
        name,
        

    } = req.body

    if (method == 'POST') {
        const { db } = await connectToDatabase();
         await db.collection('users').update(
            {email : sessionStorage.email},
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
