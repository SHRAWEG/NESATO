import Head from "next/head";
import React from "react";
import Link from "next/link";
import HomePage from "../components/HomePage";
import { useSession, signOut} from "next-auth/client";
import HomePageAuthenticated from "../components/HomePageAuthenticated";

export default function Home() {

  const [session, loading] = useSession();

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