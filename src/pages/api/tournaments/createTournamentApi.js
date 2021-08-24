import { connectToDatabase } from "../../../utils/mongodb";


export default async (req, res) => {
    var today = new Date(), 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const {method} = req;

    const {
        tournament_name,
        organizer, 
        game,
        max_team_size,
        max_participant_size, 
        tournament_start_date,
        registration_start_date, 
        registration_start_time, 
        registration_end_date, 
        registration_end_time
    } = req.body

    //Disecting registration end date 
    const reg_end_fullDate = new Date (registration_end_date) 
    const reg_end_date =  reg_end_fullDate.getDate()
    const reg_end_year = reg_end_fullDate.getFullYear()
    const reg_end_month = reg_end_fullDate.toLocaleString('en-us', {month: 'short'})
    const reg_end_date_time = new Date(reg_end_date+" "+reg_end_month+" "+reg_end_year+" "+registration_end_time)

    //Disecting Registeration start date
    const reg_start_fullDate = new Date (registration_start_date) 
    const reg_start_date =  reg_start_fullDate.getDate()
    const reg_start_year = reg_start_fullDate.getFullYear()
    const reg_start_month = reg_start_fullDate.toLocaleString('en-us', {month: 'short'})
    const reg_start_date_time = new Date(reg_start_date+" "+reg_start_month+" "+reg_start_year+" "+registration_start_time)
    


    if (method == 'POST') {
        const { db } = await connectToDatabase();

        const tournamentNameConflict = await db.collection('tournaments').findOne({
            tournament_name: { $regex: "^"+tournament_name+"$", $options: "i" }
        })

        if ( tournamentNameConflict ) {
            return res.status(405).json({
                error : true,
                message : "Tournament of that title already exists"
            })
        }   
            
        await db.collection('tournaments').insertOne({
                create_date : date,
                tournament_name, 
                organizer,
                game,
                max_team_size,
                max_participant_size,
                tournament_start_date,
                "registration_end_date_time" : reg_end_date_time,
                "registration_start_date_time" : reg_start_date_time,

                status:"Ongoing"
            }).then(({ops}) => ops[0]);
    

            return res.status(200).json({
                message:"Successful",
                game
            })
            return;
        }
}
