import React from "react";
import Profile from "../../components/userprofile/profile";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

const userProfile = () => {
    const [isLoading , setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() =>
    {
        getSession().then((session) =>{
            if(!session) {
                router.replace('/login')
            } else {
                setIsLoading(false);
            }
        })
    }, [router]);

    if(isLoading) return <p>Loading...</p>

    return(
        <Profile />
    )

}

export default userProfile;

