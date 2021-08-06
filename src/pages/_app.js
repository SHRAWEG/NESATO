import {Provider} from "next-auth/client"
import '../../styles/globals.css';
import '../../styles/animate.css';
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

function MyApp({ Component, pageProps }) {
    switch (Component.name) {
        case "Home":
            return <Component {...pageProps} />;

        case "SignIn":
            return <Component {...pageProps} />;
            
        case "SignUp":
            return <Component {...pageProps} />;

        default:
            const [isLoading , setIsLoading] = useState(true);
            const router = useRouter();
        
            useEffect(() =>
            {
                getSession().then((session) =>{
                    if(!session) {
                        router.replace('/signin')
                    } else {
                        setIsLoading(false);
                    }
                })
            }, [router]);

            if(isLoading) return(
                <Layout>
                    <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5 ">
                        <div className="flex items-center mt-96">
                            <p>Loading...</p>
                        </div> 
                    </div>
                </Layout>
                
            ) 

            return (
                <>
                    <Layout>
                        <Provider session={pageProps.session}>
                            <Component {...pageProps} />
                        </Provider>
                    </Layout>
                </>
            )
    }  
}

export default MyApp