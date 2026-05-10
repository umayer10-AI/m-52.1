import Booking from '@/component/Booking';
import { Book, Calendar, Eye, Tag, XCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='space-y-2 my-10 '>
                <h2 className='text-3xl font-bold text-center'>My Booking</h2>
                <h2 className='text-gray-400 text-center'>Manage and view your upcoming travel plans</h2>
            </div>
            <Booking />
        </div>
    );
};

export default page;