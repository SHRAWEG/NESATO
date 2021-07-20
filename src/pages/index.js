import React from "react";
import { useSession } from "next-auth/client";
import HomePageAuthenticated from "../components/home/HomePageAuthenticated";
import HomePage from "../components/home/HomePage";

export default function Home() {

  const [session] = useSession();

  console.log(session)

  return(
    <>
      {!session && (
        <HomePage />
      )}

      {session && (
        <HomePageAuthenticated />
      )}
    </>
    
  )
}