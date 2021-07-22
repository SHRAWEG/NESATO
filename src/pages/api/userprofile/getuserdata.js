import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({ req })

        const { db } = await connectToDatabase();
        const collection = await db.collection('users').findOne(
            {email : session.user.email},
            )

        return res.status(200).json(collection);
}
