import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";
import { connectToDatabase } from "../../utils/mongodb";
import TeamProfile from '../../components/team/teamprofile';
import useSWR from 'swr';

const Team = ( {teams, users} ) => {
    const [isLoading, setIsLoading] = useState();
    const router = useRouter();

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    useEffect(() => {
        getSession().then((session) =>{
            if(!session) {
                router.replace("/");
            }
            else {
                setIsLoading(false);
            }
        });
    },[router]);

    

    if (isLoading) return <p> loading... </p>;

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
                <TeamProfile user={data} users={users} team={team} />
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
    
    return {
        props: {
            teams: JSON.parse(JSON.stringify(teams)),
            users: JSON.parse(JSON.stringify(users))
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