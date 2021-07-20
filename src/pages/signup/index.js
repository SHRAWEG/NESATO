import React from "react";
import Signup from "../../components/authentication/signup";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

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
        <Signup />
    )
}

export default SignUp;