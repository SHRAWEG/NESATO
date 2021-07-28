import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";

import {connectToDatabase} from '../../utils/mongodb'


const joinTeam = ({teams}) => {
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
            hello World 
        </>
    )
}

export default joinTeam;
