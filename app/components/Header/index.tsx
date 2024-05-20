import React from 'react';
import Link from 'next/link';
import { Container } from './styled';

const Header = () => {
    return (
        <Container>
            <Link href="/">Home</Link>
            <br />
            <Link href="/sobre">About</Link>
            <br />
            <Link href="/contato">Contact</Link>
        </Container>
    );
};

export default Header;
