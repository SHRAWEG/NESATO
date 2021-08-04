import React from "react";
import UpdateProfile from "../../components/userprofile/UpdateProfile";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import useSWR from "swr";


const userProfile = () => {
    const [isLoading , setIsLoading] = useState(true);
    const router = useRouter();

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    useEffect(() =>
    {
        getSession().then((session) =>{
            if(!session) {
                router.replace('/signin')
            } else {
                setIsLoading(false);
            }
        })
    }, [router]);

    if(isLoading) return <p>Loading...</p>

    if (data) {
        return(
            <div>
                <UpdateProfile self={data} />
            </div>
        )
    
    }

    return(
        <UpdateProfile />
    )
}

export default userProfile;

