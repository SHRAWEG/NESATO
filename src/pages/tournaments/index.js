import React from 'react'
import TournamentCard from '../../components/tournaments/TournamentCard'
import useSWR from 'swr';
import { connectToDatabase } from '../../utils/mongodb'

function Tournaments( {tournaments} ) {

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)  

    if (tournaments) {
        return (
            <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5">
                <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-10 w-8/12 mt-32 flex flex-col gap-8" id="midMain">
                    {tournaments.map((tournament, key) => {

                        if(tournament.status == "Ongoing"){
                            return(
                                <div key={key} className="">
                                    {data && (
                                    <TournamentCard tournament={tournament} self={data} />
                                    )}
                                </div>
                                
                                
                            )    
                        }

                        return (
                            <div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
    
}

export async function getStaticProps() {
    const {db} = await connectToDatabase();

    const tournaments = await db.collection('tournaments').find().toArray();

    return {
        props: {
            tournaments: JSON.parse(JSON.stringify(tournaments))
        }
    }
}

export default Tournaments