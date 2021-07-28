import { connectToDatabase } from "../../../utils/mongodb";
import {getSession} from "next-auth/client"

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    const {
        status,
        invitation_id
    } = req.body;

    if (method == 'POST') {
        var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(invitation_id)

        const {db} = connectToDatabase();
        const invitation = db.collection("invitation").findOne(o_id)

        if (status == "accept"){
            await db.collection('inivitation').update(
                {_id : o_id},
                {
                    $set : {

                    }
                }
            )
        }
    }
}
