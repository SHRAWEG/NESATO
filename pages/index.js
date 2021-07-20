// import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useSession, signOut} from "next-auth/client";
import HomePage from "../components/HomePage";
import HomePageAuthenticated from "../components/HomePageAuthenticated";




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