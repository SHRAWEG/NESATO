import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";
import Teamprofile from '../../components/team/teamprofile';

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
        <Teamprofile />
    )
}

export default teamProfile;