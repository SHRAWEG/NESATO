import { connectToDatabase } from "../../../utils/mongodb";
import {getSession} from "next-auth/client"

export default async (req, res) => {
    const session = await getSession({req});
    const {method} = req;

    const {
        status,
        invitation_id,
        user_id,
    } = req.body;

    if (method == 'POST') {
        var mongo = require('mongodb');
        var o_id = new mongo.ObjectID(invitation_id)
        const {db} = await connectToDatabase();

        const invitation = await db.collection("invitation").findOne({_id: o_id})
        const new_player = await db.collection("users").findOne({_id: new mongo.ObjectID(user_id)})
        const team = await db.collection("team").findOne({_id : invitation.sent_by})
        const invitations = await db.collection('invitation').find().toArray();

        const game = team.game;
        

        if (status == "Accept"){
            await db.collection('invitation').updateOne(
                {_id : o_id},
                {
                    $set : {
                        status : "Accepted",
                    }
                }
            )

            await db.collection('team').updateOne(
                {_id : invitation.sent_by},
                {
                    $push: {
                        players: {
                            _id : new_player._id,
                            email: new_player.email,
                            username: new_player.username
                        }
                    }
                }
            )

            await db.collection('users').updateOne(
                {_id : new_player._id},
                {
                    $push:{
                        teams: 
                            {
                                _id: team._id,
                                team_name : team.team_name,
                                game : game,
                                isCaptain: false,
                            }
                    }
                }
            )

            JSON.parse(JSON.stringify(invitations)).map(async (data) => {
                if (data.game == game & data.sent_to == user_id & data.status == "Pending") {
                    await db.collection('invitation').updateOne(
                        {_id : new mongo.ObjectID(data._id)},
                        {
                            $set : {
                                status : "Rejected",
                            }
                        }
                    )
                }
            })

        } else if ( status == "Reject"){
            await db.collection('invitation').updateOne(
                {_id : o_id},
                {
                    $set : {
                        status : "Rejected",
                    }
                }
            )
            
        }

        return (
            res.status (200).json({message : " sucessful "})
        )
    }
}
