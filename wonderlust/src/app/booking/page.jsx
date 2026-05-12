import Booking from '@/component/Booking';
import { bookingData } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await bookingData()
    console.log(data)

    return (
        <div>
            <div className='space-y-2 my-10 '>
                <h2 className='text-3xl font-bold'>My Booking</h2>
                <h2 className='text-gray-400'>Manage and view your upcoming travel plans</h2>
            </div>
            <div className='flex flex-col gap-5'>
                {
                    data.map(v => <Booking key={v._id} p={v}></Booking>)
                }
            </div>
        </div>
    );
};

export default page;