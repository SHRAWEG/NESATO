import React from "react";
import Signup from "../../components/authentication/signup";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import Header from '../../components/Header'
import Link from 'next/link'
import Image from 'next/image'
import nesaLogo from '../../../public/img/NesaLogoDark.png'

const SignUp = () => {
    
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
				<Signup />
			</div>
		</>
    )
}

export default SignUp;