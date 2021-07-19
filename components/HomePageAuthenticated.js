import { useSession, signOut } from 'next-auth/client';
import React from 'react'


function HomePageAuthenticated() {
    const [session, loading] = useSession();
    return (
        <div className="w-screen flex flex-col justify-center items-center">
            <button className="border-4" onClick={signOut}>Sign Out</button>
            Hello {session.user.email}
            {/* {console.log(session.user.email)} */}
        </div>
        
    )
    console.log(session.user.email)
}

export default HomePageAuthenticated
