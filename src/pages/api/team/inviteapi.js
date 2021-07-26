import { connectToDatabase } from "../../../utils/mongodb";
import { getSession } from "next-auth/client";
import { useState } from "react";

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    let alreadySent = true;

    const {
        sent_to
    } = req.body ;

    if (method =='POST') {

        const {db} = await connectToDatabase();

        const sent_to = await db.collection('users').findOne({email: user})
        const sent_by = await db.collection('users').findOne({email: session.user.email})

        const invitation = await db.collection('invitation').find().toArray()

        JSON.parse(JSON.stringify(invitation)).map((data) => {
            if(data.sent_to == sent_to._id && data.sent_by == sent_by.team_name) {
                alreadySent = false;
            }
        })

        if (alreadySent == false) {
            return res.status(403).json({message: "You have already sent the request to this user"})
        }

        if (user == session.user.email) {
            return res.status(403).json({message: "You cannot add yourself to the team"})
        }

        

        await db.collection('invitation').insertOne({
            sent_by: sent_by.team_name,
            sent_to: sent_to._id,
            status: "Pending"
        }).then(({ops}) => ops[0]);
    }

    return res.status(200).json({message : "successful"})
}