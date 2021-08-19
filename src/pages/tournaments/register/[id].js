import React from 'react'
import TournamentRegister from '../../../components/tournaments/TournamentRegister'
import { connectToDatabase } from '../../../utils/mongodb'

function Tournament( {tournament} ) {

    console.log(tournament)

    return (
        <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5">
            <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-10 w-8/12 items-center mt-32 " id="midMain">
                <TournamentRegister tournament={tournament} />

            </div>
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectID(params.id);

    const { db } = await connectToDatabase();

    const tournaments = await db.collection('tournaments').findOne({_id: o_id})

    const tournament = JSON.parse(JSON.stringify(tournaments))

    return {
        props: {
            tournament
        },
        revalidate: 1,
    }
}

export const getStaticPaths = async () => {
    const {db} = await connectToDatabase();
    const collection = await db.collection('tournaments').find().toArray();
    const data = JSON.parse(JSON.stringify(collection))

    const paths = data.map((tournament) => ({
        params: { id: tournament._id},
    }))

    return{
        paths,
        fallback : true
    };
}

export default Tournament
