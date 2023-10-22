import {AppProps} from "next/app";
import RootLayout from "@/components/RootLayout";
import "../styles/bootstrap.css";
import "../styles/style.css";
import "../styles/fonts.css";

export default function UnderscreenApp({Component, pageProps}: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}