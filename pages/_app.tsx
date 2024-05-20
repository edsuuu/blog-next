'use client';
import React from 'react';
import { GlobalStyled } from '@/styles/GlobalStyled';
import Navbar from '@/app/components/Navbar/Navbar';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <GlobalStyled />
        </>
    );
}

export default MyApp;
