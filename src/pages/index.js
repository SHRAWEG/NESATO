import React from "react";
import { getSession } from "next-auth/client";
import Homepage from "../components/home/Homepage";
import { connectToDatabase } from "../utils/mongodb";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";


export default function HomeAuth( {team, invitation} ) {
  const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

	useEffect(() => {
		getSession().then((session) => {
			if (!session) {
				router.replace("/home");
			} else {
          setIsLoading(false)
			}
		});
	}, [router]);

	if (isLoading) return <p>Loading...</p>;

  if(data) {
    return(
      <>
          <Homepage user={data} invitation={invitation} team={team}  />
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
