import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import nesaLogo from '../public/img/NesaLogo.png'

const HeadLogo = () => {
    
    return(<Link href="/">
            <a className="w-48 mt-20 md:mt-20"><Image src={nesaLogo} alt="Nesa Logo" /></a>
            </Link>
    )
}

export default HeadLogo;