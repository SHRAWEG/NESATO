import React from 'react'
import Header from '../../components/Header'
import Link from 'next/link'
import Image from 'next/image'
import nesaLogo from '../../public/img/NesaLogo.png'


function Home() {
    return (
        <div>
            <Header />
            <div className="bg-gray-200 font-body flex flex-col w-full items-center h-full min-h-screen">
                <Link href="/home">
                    <a className="w-48 mt-6"><Image src={nesaLogo} alt="Nesa Logo" /></a>
                </Link>

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
            </div>
        </div>
    )
}

export default Home
