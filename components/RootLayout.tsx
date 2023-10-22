import PageTop from "@/components/PageTop";
import {PageBottom} from "@/components/PageBottom";
import React from "react";
import Head from 'next/head'
import Script from "next/script";

type RootLayoutProps = {
    children: React.ReactNode,
};

const RootLayout = ({children}: RootLayoutProps) => {
    const bodyClasses = 'bodyclasses';
    const view = '';
    const subView = '';

    return (
        <div className={bodyClasses}>
            <Head>
                <title>underSCREEN default title</title>
                <link rel='stylesheet'
                      href='https://fonts.googleapis.com/css?family=Montserrat:700|Roboto+Slab:300|Open+Sans:300,700'
                      type='text/css'/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="gIgRt4WRjhTbDoEQqKnBT34wOeLkH_za_5XyohbwVGo"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script src="/js/vendor/modernizr-2.8.3.min.js"></Script>
            <PageTop view={view} subView={subView}/>
            {children}
            <PageBottom view={view}/>
        </div>
);
}

export default RootLayout;