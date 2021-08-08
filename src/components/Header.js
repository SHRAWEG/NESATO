import React from 'react'
import Head from 'next/dist/next-server/lib/head';


const Header = () => {
    
    return(
        <>
            <Head>
                <title>NESA</title>
                <meta name="description" content="Nesa App" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="dist/clipboard.min.js"></script>
            </Head>
        </>
    )
}

export default Header;