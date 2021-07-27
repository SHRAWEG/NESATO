import React from "react";
import { useSession } from "next-auth/client";
import Homepage from "../components/home/Homepage";
import { connectToDatabase } from "../utils/mongodb";

export default function HomeAuth( {collection} ) {

  const [session] = useSession();

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
