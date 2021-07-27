import React from "react";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import Signin from "../../components/authentication/signin";
import Header from '../../components/Header'
import Link from 'next/link'
import Image from 'next/image'
import nesaLogo from '../../../public/img/NesaLogoDark.png'



const SignIn = () => {
    
    const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		getSession().then((session) => {
			if (session) {
				router.replace("/");
			} else {
				setIsLoading(false);
			}
		});
	}, [router]);

	if (isLoading) return <p>Loading...</p>;

    return (
		<>
			<Header />
			<div className="bg-gray-200 font-body flex flex-col w-full items-center h-full min-h-screen">
				<Link href="/home">
					<a className="w-48 mt-6"><Image src={nesaLogo} alt="Nesa Logo" /></a>
				</Link>
				<Signin />
			</div>
		</>
    )
}

export default SignIn;