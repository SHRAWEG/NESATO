import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";
import CreateTeam from '../../components/team/createTeam';


const createTeam = () => {
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

export default createTeam;