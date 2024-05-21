import React from 'react';
import Link from 'next/link';
import { Container } from './styled';

const Header = () => {
    return (
        <Container>
            <Link href="/">Home</Link>
        </Container>
    );
};

export default Header;
