import React from "react";
import CreateTournament from "../../components/tournaments/createTournament";
import { connectToDatabase } from '../../utils/mongodb'

const createTournament = ({games}) => {
    
    return (
        <>
            <div>
                <CreateTournament games = {games}/>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const {db} = await connectToDatabase();

    const games = await db.collection('games').find().toArray();

    return {
        props: {
            games: JSON.parse(JSON.stringify(games))
        }
    }
}

export default createTournament;