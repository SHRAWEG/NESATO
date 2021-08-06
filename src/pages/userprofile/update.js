import React from "react";
import UpdateProfile from "../../components/userprofile/UpdateProfile";
import useSWR from "swr";


const userProfile = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    return(
        <>
            {data && (
                <div>
                    <UpdateProfile self={data} />
                </div>
            )}
        </>
    )
}

export default userProfile;

