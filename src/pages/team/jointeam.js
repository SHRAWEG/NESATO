import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";

import {connectToDatabase} from '../../utils/mongodb'
import JoinTeam from '../../components/team/joinTeam';

import useSWR from 'swr';


const joinTeam = ({teams}) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    return (
        <>
        {(data) &&
            <JoinTeam teams = {teams} user = {data}/>
        }
        </>
    )
}

export const getStaticProps = async () => {
    const {db} = await connectToDatabase();
    const teams = await db.collection('team').find().toArray();

    return{
        props: {
            teams: JSON.parse(JSON.stringify(teams))
        },
        revalidate: 1
    }
}

export default joinTeam;
