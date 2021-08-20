import { connectToDatabase } from "../../../utils/mongodb";


export default async (req, res) => {
    const {method} = req;

    const {
        tournament_name,organizer, max_team_size, tournament_start_date,
        registration_start_date, registration_start_time, registration_end_date, 
        registration_end_time

    } = req.body
    console.log(tournament_name);
    if (method == 'POST') {
        const { db } = await connectToDatabase();

       await db.collection('tournament').insertOne({
            tournament_name, 
            organizer,
            max_team_size,
            tournament_start_date,
            registration_end_date,
            registration_end_time,
            registration_start_date,
            registration_start_time,
        }).then(({ops}) => ops[0]);



        return res.status(200).json({
            tournament_name: tournament_name,
            organizer: organizer,
            max_team_size: max_team_size,
            tournament_start_date: tournament_start_date,
            registration_end_date: registration_end_date,
            registration_end_time: registration_end_time,
            registration_start_date: registration_start_date,
            registration_start_time: registration_start_time,
        })
    }
    return
}
