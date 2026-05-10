import Image from 'next/image';
import React from 'react';

const Carts = ({p}) => {
    // console.log(p)
    return (
        <div>
            <div className="w-[260px] bg-white rounded-sm overflow-hidden shadow-md">

  {/* Image Section */}
  <div className="relative">
    <Image height={100} width={100}
      src="https://i.ibb.co.com/5x7J0nS/beach.jpg"
      
      alt="Bali Paradise"
      className="w-full h-[170px] object-cover"
    />

    {/* Rating */}
    <div className="absolute top-3 right-3 bg-white px-2 py-1 text-sm flex items-center gap-1 rounded-sm">
      <span>4.5</span>
      <span>★</span>
    </div>
  </div>

  {/* Content */}
  <div className="p-4 space-y-2">

    {/* Country */}
    <p className="text-gray-500 text-sm flex items-center gap-1">
      📍 Nepal
    </p>

    {/* Title + Price */}
    <div className="flex justify-between items-start">
      <h2 className="text-xl font-medium text-gray-800">
        Bali Paradise
      </h2>

      <p className="text-2xl font-semibold text-black">
        $2700
        <span className="text-sm text-gray-400 font-normal">
          /Person
        </span>
      </p>
    </div>

    {/* Duration */}
    <p className="text-gray-500 text-sm flex items-center gap-1">
      📅 7 Days/6 Nights
    </p>

    {/* Button */}
    <button className="mt-3 text-sky-500 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
      BOOK NOW ↗
    </button>

  </div>
</div>
        </div>
    );
};

export default Carts;