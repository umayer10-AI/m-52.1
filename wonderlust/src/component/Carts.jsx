import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Carts = ({p}) => {
    // console.log(p)
    return (
        <div className='border shadow-lg shadow-cyan-600 rounded-xl p-4'>
            <div className=" rounded-sm overflow-hidden shadow-md">

  {/* Image Section */}
  <div className="relative">
    <Image height={100} width={100}
      src={p.imageUrl}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="Bali Paradise"
      className="w-full h-[170px] object-cover"
    />

    {/* Rating */}
    <div className="absolute top-3 right-3 bg-white/50 px-2 py-1 text-sm flex items-center gap-1 rounded-sm">
      <span>4.5</span>
      <span>★</span>
    </div>
  </div>

  {/* Content */}
  <div className="p-4 space-y-2">

    {/* Country */}
    <p className="text-gray-500 text-sm flex items-center gap-1">
      📍 {p.country}
    </p>

    {/* Title + Price */}
    <div className="flex justify-between items-start">
      <h2 className="text-xl font-medium text-cyan-400">
        {p.destinationName}
      </h2>

      <p className="text-2xl font-semibold text-black">
        ${p.price}
        <span className="text-sm text-gray-400 font-normal">
          /Person
        </span>
      </p>
    </div>

    {/* Duration */}
    <p className="text-gray-500 text-sm flex items-center gap-1">
      📅 {p.duration}/6 Nights
    </p>

    {/* Button */}
    <Link href={`/destination/${p._id}`} className="mt-3 text-sky-500 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
      BOOK NOW ↗
    </Link>

  </div>
</div>
        </div>
    );
};

export default Carts;