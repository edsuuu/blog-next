import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '@/styles/Global-styled';
import { theme } from '@/styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyled />
                <Navbar />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
