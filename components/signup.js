import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import nesaLogo from '../public/img/NesaLogo.png';
import { useState } from "react";
import { useRouter } from "next/router";

const signup = () => {
    const [userCredentials, setUserCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const router = useRouter();

    const { username, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            alert("Password don't match");
            return;
        }

        fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            username,
            password,
          }),
        })
        // .then((r) => r.json())
        // .then((data) => {
        //     if (data && data.error) {
        //         setErrorMsg(data.message);
        //     }
        // });

        // setUserCredentials({
        //     username: "",
        //     email: "",
        //     password: "",
        //     confirmPassword: "",
        // });

        router.replace("/");
    };

    const handleChange = (e) => {
        const { name,value } = e.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <>
            <Head>
                <title>
                    Sign up
                </title>
            </Head>
            <div className="bg-gray-200 font-body flex flex-col w-screen items-center h-full min-h-screen" >

            <Link href="/">
            <a className="w-48 mt-20 md:mt-20"><Image src={nesaLogo} alt="Nesa Logo" /></a>
            </Link>

            <div className="bg-white max-w-md rounded-3xl shadow-lg mt-20 slideup">
                <div className="mx-10 my-10">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input 
                        className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        name="username"
                        onChange={handleChange}
                        required
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                        className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        name="email"
                        onChange={handleChange}
                        required
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                            Password
                        </label>
                        <input 
                        className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                        />
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                            Confirm Password
                        </label>
                        <input 
                        className="shadow appearance-none border w-80 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="confirmPassword" 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={handleChange}
                        required
                        />
                        </div>
                        <div className="flex flex-col items-between justify-evenly">
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2" type="submit">
                            Sign Up
                        </button>
                        </div>
                        <p className="pt-3 flex justify-center">Yo Buddy! You can simply&nbsp;<Link href="/singin" passHref><a className="text-yellow-500 hover:text-yellow-700 font-bold">Sign in</a></Link>&nbsp;as well!</p>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default signup
