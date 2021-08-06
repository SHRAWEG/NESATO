import React from 'react'
import useSWR from 'swr';
import AddGames from '../../components/userprofile/AddGames'

export default function addgames() {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    return (
        <div>
            {data && (
                <AddGames self={data} />
            )}
        </div>
    )
}
