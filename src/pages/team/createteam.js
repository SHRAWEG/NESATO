import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";
import CreateTeam from '../../components/team/createTeam';
import { connectToDatabase } from "../../utils/mongodb";

const teamProfile = () => {
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

    return (
        <>
            <CreateTeam/>
        </>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()
    const collection = await db.collection('users').find().toArray();
    
    if (!collection) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            collection: JSON.parse(JSON.stringify(collection))
        },

        revalidate: 1,
    }

}

export default teamProfile;