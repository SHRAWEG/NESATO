// import Head from "next/head";
import React from "react";
// import Link from "next/link";
import HomePage from "../components/HomePage";
import { useSession} from "next-auth/client";
import HomePageAuthenticated from "../components/HomePageAuthenticated";

import {connectToDatabase} from "../util/mongodb";

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