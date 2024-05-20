// app/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <br />
            <Link href="/sobre">About</Link>
            <br />
            <Link href="/contato">Contact</Link>
        </nav>
    );
};

export default Navbar;
