import React from 'react'
import useSWR from 'swr';
import GameUpdate from '../../../components/userprofile/GameUpdate';

export default function updateGames() {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    return (
        <div>
            {data && (
                <GameUpdate self={data} />
            )}
        </div>
    )
}
