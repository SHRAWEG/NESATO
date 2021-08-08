import React from 'react';
import { connectToDatabase } from "../../utils/mongodb";
import TeamProfile from '../../components/team/TeamProfile';
import useSWR from 'swr';

const Team = ( {teams, users, invitations} ) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    let team

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
                <TeamProfile user={data} users={users} team={team} invitations={invitations} />
            )}  
        </>
    )
    
}

export const getStaticProps = async ({ params }) => {
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectID(params.id);

    const { db } = await connectToDatabase();

    const teams = await db.collection('team').find({_id: o_id}).toArray();
    const users = await db.collection('users').find().toArray();
    const invitations = await db.collection('invitation').find().toArray();

    return {
        props: {
            teams: JSON.parse(JSON.stringify(teams)),
            users: JSON.parse(JSON.stringify(users)),
            invitations: JSON.parse(JSON.stringify(invitations)),
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