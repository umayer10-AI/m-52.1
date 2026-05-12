 "use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const Nav2 = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

    return (
        <div className='font-semibold flex items-center gap-5'>
            <Link href={'/profile'} className='flex items-center gap-1'><FaRegUser />Profile</Link>
            {
                user ? 
                <div className='flex items-center gap-2'>
                    <Link href={'/profile'}>
                    <Avatar size='sm'>
                        <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    </Avatar></Link>
                    <Button variant='danger-soft' onClick={async () => await authClient.signOut()} className={'border border-red-800'} size='sm'>Sign Out</Button>
                </div> :
                <div className='flex items-center gap-5'>  
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/signup'}>Sign Up</Link>
                </div>
            }
            
        </div>
    );
};

export default Nav2;