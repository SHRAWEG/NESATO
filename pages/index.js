import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import nesaLogo from '../public/img/NesaLogo.png';



import { useSession, signIn, signOut} from "next-auth/client";

export default function Home() {

  const [session, loading] = useSession();

  console.log(session)

  return(
    // <div>
    //   <>
    //     {!session && (
    //       <div>
    //         Not signed in <br />
    //         <button onClick={signIn}>Sign in</button>
    //       </div>
    //     )}
    //   </>

    //   <>
    //       {session && (
    //         <div>
    //           You can now access the page <br />
    //           Your username is {session.user.email} <br />
    //           <button onClick={signOut}>Sign Out</button>
    //         </div>
    //       )}
    //   </>
    // </div>

    <>
      <Head>
        <title>NESA</title>
        <meta name="description" content="Nesa App" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gray-200 font-body flex flex-col w-screen items-center h-screen">
        <Link href="/">
          <a className="w-48 mt-20 md:mt-20"><Image src={nesaLogo} alt="Nesa Logo" /></a>
        </Link>

        <div className="flex flex-col items-center justify-center">
        <h1 className="sm:text-6xl lg:text-9xl text-gray-500 lg:mt-60 md:mt-40 sm:mt-40 typewriter ">
          Ready to JOUST?
        </h1>

        <Link href="/signup">
		    <button className="bg-transparent border border-gray-500 hover:border-yellow-500 text-gray-500 hover:text-yellow-500 font-bold py-4 px-8 rounded-full mt-16 lg:text-4xl md:text-3xl sm:text-3xl button-ani">
          Absolutely!
        </button>
        </Link>
        </div>
      </div>
    </>
    
  )
}