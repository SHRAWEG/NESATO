import Link from 'next/dist/client/link';
import React from 'react'

function Profile(props) {
    return (
        <div>
            <div>
                <h1>Profile</h1>
                <p>{props.user.username}</p>
                <Link href="/userprofile">
                    <button className="mt-2 rounded-full py-2 bg-yellow-400 text-gray-600 hover:bg-blue-300 font-semibold">Update</button>
                </Link>
            </div>
        </div>
    )
}

export default Profile
