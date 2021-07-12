import {Provider} from "next-auth/client"
import '../styles/globals.css';
import '../styles/animate.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp