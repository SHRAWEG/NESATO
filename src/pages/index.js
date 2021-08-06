import React from "react";
import Homepage from "../components/home/Homepage";
import { connectToDatabase } from "../utils/mongodb";
import useSWR from "swr";


export default function HomeAuth( {team, invitation} ) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

  if(data) {
    return(
      <>
          <Homepage self={data} invitation={invitation} team={team}  />
      </>
    )
  }

  else {
    return null
  }
}

export async function getStaticProps(req) {
  const { db } = await connectToDatabase()
  const invitation = await db.collection('invitation').find().toArray();
  const team = await db.collection('team').find().toArray();

  return {
      props: {
          invitation: JSON.parse(JSON.stringify(invitation)),
          team: JSON.parse(JSON.stringify(team))
      },

      revalidate: 1,
  }

}
