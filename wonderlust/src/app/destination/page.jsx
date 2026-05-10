import Carts from '@/component/Carts';
import React from 'react';

const page = async () => {

    const res = await fetch(`http://localhost:5000/destination`)
    const data = await res.json()

    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-semibold'>Explore All Destinations</h2>
            <h2 className='text-gray-400 mt-2'>Find your perfect travel experience from our curated collection</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    data.map(v => <Carts key={v._id} p={v}></Carts>)
                }
            </div>
        </div>
    );
};

export default page;