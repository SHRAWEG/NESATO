import React from "react";
import {connectToDatabase} from "../../utils/mongodb"
import { useRouter } from "next/router";



export const getStaticPaths = async () => {
    const {db} = await connectToDatabase();
    const collection = await db.collection('team').find().toArray();
    const data = JSON.parse(JSON.stringify(collection))

    const paths = data.map((team) => ({
        params: { id: team._id},
    }))

    return{
        paths,
        fallback : true
    };
}

export const getStaticProps = async ({ params }) => {
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectID(params.id);

    const { db } = await connectToDatabase();
    const collection = await db.collection('team').find({_id: o_id}).toArray();

    return {
        props: {
            collection: JSON.parse(JSON.stringify(collection))
        },
        revalidate: 1,
    }
}


const Details = ( {collection} ) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    console.log({collection})
    return (
        <>
            Details
            <div>
            {collection.map((team) =>
                    <li>
                    {team._id}
                    </li>
                )}
            </div>
        </>
    )
}

export default Details;