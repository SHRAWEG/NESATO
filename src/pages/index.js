import React from "react";
import { useSession } from "next-auth/client";
import HomePageAuthenticated from "../components/home/HomePageAuthenticated";
import HomePage from "../components/home/HomePage";
import { connectToDatabase } from "../utils/mongodb";

export default function Home( {collection} ) {

  const [session] = useSession();

  console.log(session)

  return(
    <>
      {!session && (
        <HomePage />
      )}

      {session && (
        <HomePageAuthenticated invitation={collection} />
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
