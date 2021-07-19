import Head from "next/head";
import React from "react";
import Link from "next/link";
import HeadLogo from "./headLogo";

function HomePage() {
    return (
        <>
            <Head>
                <title>NESA</title>
                <meta name="description" content="Nesa App" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="bg-gray-200 font-body flex flex-col w-screen items-center h-full min-h-screen">
                <HeadLogo/>


                <div className="flex flex-col items-center justify-center">
                <h1 className="sm:text-6xl lg:text-9xl text-gray-500 lg:mt-60 md:mt-40 sm:mt-40 typewriter ">
                Ready to JOUST?
                </h1>

                <Link href="/signin">
                    <button className="bg-transparent border border-gray-500 hover:border-yellow-500 text-gray-500 hover:text-yellow-500 font-bold py-4 px-8 rounded-full mt-16 lg:text-4xl md:text-3xl sm:text-3xl button-ani">
                Absolutely!
                </button>
                </Link>
                </div>
                <footer className="align-bottom">
                </footer>
            </div>
        </>
    )
}

export default HomePage
