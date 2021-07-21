import React from "react";
import Profile from "../../components/userprofile/profile";
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
                router.replace('/login')
            } else {
                setIsLoading(false);
            }
        })
    }, [router]);

    if(isLoading) return <p>Loading...</p>

    if (data) {
        console.log(data.firstname)
        return(
            <div>
                <Profile firstname={data.firstname} lastname={data.lastname} address={data.address} phone={data.phone} gender={data.gender} dob={data.dob} />
            </div>
        )
    
    }

    return(
        <Profile firstname="" lastname="" address="" phone="" gender="" dob="" />
    )

 

}

export default userProfile;

