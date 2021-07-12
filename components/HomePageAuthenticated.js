import { useSession, signOut } from 'next-auth/client';
import React from 'react'


function HomePageAuthenticated() {
    const [session, loading] = useSession();
    return (
        <div>
            Hello {session.user.email}
            <br />
            <button className="border-4" onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default HomePageAuthenticated
