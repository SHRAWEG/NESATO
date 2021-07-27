import React from "react";
import { getSession } from "next-auth/client";
import Homepage from "../components/home/Homepage";
import { connectToDatabase } from "../utils/mongodb";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";


export default function HomeAuth( {collection} ) {
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
          <Homepage user={data} invitation={collection} />
      </>
    )
  }

  else {
    return null
  }
}

export async function getStaticProps(req) {
  const { db } = await connectToDatabase()
  const collection = await db.collection('invitation').find().toArray();

  if (!collection) {
      return {
          redirect: {
              destination: '/',
              permanent: false,
          }
      }
  }

  return {
      props: {
          collection: JSON.parse(JSON.stringify(collection)),
      },

      revalidate: 1,
  }

}
