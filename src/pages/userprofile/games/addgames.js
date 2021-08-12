import React from 'react'
import useSWR from 'swr';
import AddGames from '../../../components/userprofile/AddGames'
import {connectToDatabase} from '../../../utils/mongodb'

export default function addgames({games}) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    return (
        <div>
            {data && (
                <AddGames self={data} games={games} />
            )}
        </div>
    )
}

export async function getStaticProps() {
    const {db} = await connectToDatabase()

    const games = await db.collection('games').find().toArray();

    return {
        props: {
            games: JSON.parse(JSON.stringify(games)),
        },

        revalidate: 1,
    }
}