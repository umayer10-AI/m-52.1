"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

const BookingBtn = ({p,id}) => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(p)

    const a = () => {
        const data = {
            userID: user.id,
            userName: user.name,
            userImage: user.image,
            destinationId: p._id,
            destinationName: p.destinationName,
            price: p.price,
            image: p.imageUrl,
            country: p.country,
        }
        console.log(data)
    }

    return (
        <button onClick={a} className="w-full bg-linear-to-r from-[#F7E93F] via-[#FB09B4] to-[#9100F8] text-white font-black py-4 rounded-xl shadow-lg hover:scale-[1.02] transition">
            Book Now <i className="fa-solid fa-arrow-right ml-2"></i>
        </button>
    );
};

export default BookingBtn;