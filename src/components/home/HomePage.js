import { signOut } from 'next-auth/client';
import Link from 'next/dist/client/link';
import React from 'react'
import useSWR from 'swr';
import Profile from './elements/Profile';
import Team from './elements/Team';


function Homepage(props) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    

    return (
        <>
            {data && (
                <>
                    <div className="flex-col fixed w-2/12">
                        <Profile user={data} />

                        <Team />
                    </div>
                </>


            )}     
        </>
    )
}

export default Homepage
