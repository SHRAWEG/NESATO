import {Provider} from "next-auth/client"
import '../../styles/globals.css';
import '../../styles/animate.css';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {

    switch (Component.name) {
        case "Home":
            return <Component {...pageProps} />;

        case "SignIn":
            return <Component {...pageProps} />;
            
        case "SignUp":
            return <Component {...pageProps} />;

        default:
            return (
                <Layout>
                    <Provider session={pageProps.session}>
                        <Component {...pageProps} />
                    </Provider>
                </Layout>
            )
    }  
}

export default MyApp