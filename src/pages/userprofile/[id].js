import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";
import { connectToDatabase } from '../../utils/mongodb';
// import { connectToDatabase } from "../../utils/mongodb";
// import TeamProfile from '../../components/team/teamprofile';
// import useSWR from 'swr';

import UserProfile from '../../components/userprofile/userProfile';


const userProfile = ({users}) => {
    const [isLoading, setIsLoading] = useState();
    const router = useRouter();

    // const fetcher = (url) => fetch(url).then((res) => res.json());
    // const {data} = useSWR('/api/userprofile/getuserdata', fetcher);

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

    let user

    if (users) {
        users.map((user1) => (
            user = {
                ...user1
            }
        ))
    }

    console.log(user)

    return (
            <UserProfile user={user} /> 
    )
}



export const getStaticPaths = async () => {
    const {db} = await connectToDatabase();
    const collection = await db.collection('user').find().toArray();
    const data = JSON.parse(JSON.stringify(collection))

    const paths = data.map((user) => ({
        params: { id : user._id},
    }))

    return{ 
        paths,
        fallback:true
    };
}

export const getStaticProps = async ({params}) => {
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectID(params.id);

    const {db} = await connectToDatabase();
    const users = await db.collection('users').find({_id : o_id}).toArray();
    
    if (!users) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            users: JSON.parse(JSON.stringify(users))
        },
        revalidate: 1,
    }
}

export default userProfile;