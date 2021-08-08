import React from 'react';

import { connectToDatabase } from "../../../utils/mongodb";
import useSWR from 'swr';
import UpdateTeam from '../../../components/team/updateTeam';

const Team = ( {teams} ) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher);

    let team;

    if (teams) {
        teams.map((team1) => (
            team = {
                ...team1
            }
        ))
    }

    return (
        <>
            {data && (
                <UpdateTeam self={data} team={team}/>
            )}  
        </>
    )

    
    
}

export const getStaticProps = async ({ params }) => {
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectID(params.id);

    const { db } = await connectToDatabase();

    const teams = await db.collection('team').find({_id: o_id}).toArray();

    return {
        props: {
            teams: JSON.parse(JSON.stringify(teams)),
        },
        revalidate: 1,
    }
}

export const getStaticPaths = async () => {
    const {db} = await connectToDatabase();
    const collection = await db.collection('team').find().toArray();
    const data = JSON.parse(JSON.stringify(collection))

    const paths = data.map((team) => ({
        params: { id: team._id},
    }))

    return{
        paths,
        fallback : true
    };
}



export default Team;