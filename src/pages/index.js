import React from "react";
import { useSession, getSession } from "next-auth/client";
import Homepage from "../components/home/Homepage";
import { connectToDatabase } from "../utils/mongodb";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function HomeAuth( {collection} ) {

  const [session] = useSession();

  const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		getSession().then((session) => {
			if (!session) {
				router.replace("/home");
			} else {
				setIsLoading(false);
			}
		});
	}, [router]);

	if (isLoading) return <p>Loading...</p>;

  console.log(session)

  return(
    <>
      {session && (
        <Homepage invitation={collection} />
      )}
    </>
  )
}

export async function getStaticProps() {
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
          collection: JSON.parse(JSON.stringify(collection))
      },

      revalidate: 1,
  }

}
