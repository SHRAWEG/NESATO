import { connectToDatabase } from "../../../utils/mongodb";

export default async (req, res) => {
    const {method} = req;

    const {
        firstname,
        lastname,
        address,
        gender,
        phone,
        dob,
        plat_pc,
        plat_mobile,

        // csgo_plays,
        // csgo_nick,

        // dota_plays,
        // dota_nick,

        // valo_plays,
        // valo_nick,

        // fifa_plays,
        // fifa_nick,

        // pes_plays,
        // pes_nick,

        // apex_plays,
        // apex_nick,

        // pubg_plays,
        // pubg_nick,

        // pubgm_plays,
        // pubgm_nick,

        // mobleg_plays,
        // mobleg_nick,

    } = req.body

    if (method == 'POST') {
        const { db } = await connectToDatabase();
         await db.collection('userprofile').updateMany(
            {email : sessionStorage.email},
            {
                $set:{
                    "firstname":firstname,
                    "lastname":lastname,
                    "address":address,
                    "gender":gender,
                    "phone":phone,
                    "dob":dob,
                    // games:{
                    //     csgo:{
                    //         plays:false,
                    //         nick:"",
                    //     },
                    //     dota:{
                    //         plays:false,
                    //         nick:"",
                    //     },
                    //     valo:{
                    //         plays:false,
                    //         nick:"",
                    //     },
                    //     pubgm:{
                    //         plays:false,
                    //         nick:"",
                    //     },
                    //     mobleg:{
                    //         plays:false,
                    //         nick:"",
                    //     },
                    // },

                    "platform":{
                        "mobile":plat_mobile,
                        "pc":plat_pc,
                    },
                }
            }
        )
            }
}
