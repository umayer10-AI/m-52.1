import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const Nav2 = () => {
    return (
        <div className='font-semibold flex items-center gap-5'>
            <Link href={'/profile'} className='flex items-center gap-1'><FaRegUser />Profile</Link>
            <Link href={'/login'}>Login</Link>
            <Link href={'/signup'}>Sign Up</Link>
        </div>
    );
};

export default Nav2;