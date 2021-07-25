import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";
import { connectToDatabase } from "../../utils/mongodb";
import TeamProfile from '../../components/team/TeamProfile';

const teamProfile = ( {collection} ) => {
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
            <TeamProfile users={collection} />
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