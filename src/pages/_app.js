import {Provider} from "next-auth/client"
import '../../styles/globals.css';
import '../../styles/animate.css';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Provider session={pageProps.session}>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    )
}

export default MyApp