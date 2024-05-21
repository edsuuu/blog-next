import React from 'react';
import Header from '@/app/components/Header';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '@/styles/Global-styled';
import { theme } from '@/styles/theme';
import Footer from '@/app/components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyled />
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </>
    );
}
