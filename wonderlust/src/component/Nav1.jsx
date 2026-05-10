"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav1 = () => {

    const p = usePathname()

    return (
        <div className='flex items-center gap-7'>
            <Link href={`/`}>
                {
                    p === '/'
                        ? <Button size='sm' className='bg-linear-to-r from-cyan-600 to-blue-600 text-white'>Home</Button>
                        : <span className='font-semibold text-sm'>Home</span>
                }
            </Link>

            <Link href={`/destination`}>
                {
                    p === '/destination'
                        ? <Button size='sm' className='bg-linear-to-r from-cyan-600 to-blue-600 text-white'>Destinations</Button>
                        : <span className='font-semibold text-sm'>Destinations</span>
                }
            </Link>

            <Link href={`/booking`}>
                {
                    p === '/booking'
                        ? <Button size='sm' className='bg-linear-to-r from-cyan-600 to-blue-600 text-white'>My Bookings</Button>
                        : <span className='font-semibold text-sm'>My Bookings</span>
                }
            </Link>

            <Link href={`/add-destination`}>
                {
                    p === '/add-destination'
                        ? <Button size='sm' className='bg-linear-to-r from-cyan-600 to-blue-600 text-white'>
                            Add Destination
                        </Button>
                        : <span className='font-semibold text-sm'>Add Destination</span>
                }
            </Link>
        </div>
    );
};

export default Nav1;