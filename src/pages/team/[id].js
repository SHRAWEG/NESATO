import React from 'react';
import { useState, useEffect } from "react";
import { getSession, session } from "next-auth/client";
import {useRouter} from "next/router";
import { connectToDatabase } from "../../utils/mongodb";
import TeamProfile from '../../components/team/TeamProfile';

const teamProfile = ( {teams}, {users} ) => {
    const [isLoading, setIsLoading] = useState();
    const router = useRouter();

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

    teams.map((team1) => (
        team = {
            ...team1
        }
    ))

    console.log(team)

    return (
        <>
            <TeamProfile users={users} team={team} />
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectID(params.id);

    const { db } = await connectToDatabase();
    const teams = await db.collection('team').find({_id: o_id}).toArray();

    const users = await db.collection('users').find().toArray();
    
    if (!users) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }



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



export default teamProfile;