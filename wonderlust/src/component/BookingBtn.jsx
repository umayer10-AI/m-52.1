import React from 'react';

const BookingBtn = ({p,id}) => {
    return (
        <button className="w-full bg-linear-to-r from-[#F7E93F] via-[#FB09B4] to-[#9100F8] text-white font-black py-4 rounded-xl shadow-lg hover:scale-[1.02] transition">
            Book Now <i className="fa-solid fa-arrow-right ml-2"></i>
        </button>
    );
};

export default BookingBtn;