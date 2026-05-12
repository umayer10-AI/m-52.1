import BookingBtn from '@/component/BookingBtn';
import DatePage from '@/component/Date';
import DeleteBtn from '@/component/DeleteBtn';
import EditBtn from '@/component/EditBtn';
import { getUserId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const page = async ({params}) => {

    
    const {id} = await params
    const p = await getUserId(id)
    console.log(p)

    // const date = format(new Date(), "EEE, dd, MMM, yyyy")

    return (
        <div className="max-w-4xl mx-auto bg-[#1A0B2E] text-white rounded-[30px] overflow-hidden shadow-2xl border border-white/5">
    
    <div className="flex items-center justify-between p-5 bg-[#130822]/50 backdrop-blur-md">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <i className="fa-solid fa-arrow-left"></i>
            <Link href={'/destination'} className="text-sm font-medium flex items-center gap-1"><FaArrowLeftLong />Back to Destinations</Link>
        </button>
        
        <div className="flex gap-3">
            <EditBtn id={id} p={p}></EditBtn>
            <DeleteBtn id={id}></DeleteBtn>
        </div>
    </div>

    <div className="p-2">
        <div className="relative h-[350px] rounded-[25px] overflow-hidden">
            <Image width={100} height={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             src={p.imageUrl} alt={p.destinationName} className="w-full h-full object-cover "/>
            <div className="absolute top-6 right-6 bg-[#00FF88] text-[#1A0B2E] px-4 py-1.5 rounded-full font-black text-xs shadow-lg">
                <p>{p.category}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
            
            <div className="lg:col-span-8">
                <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest">{p.country}</p>
                <p className="text-5xl font-black mb-6 tracking-tighter">{p.destinationName}</p>
                
                <div className="flex items-center gap-6 mb-8 text-gray-400">
                    <p className="flex items-center gap-2"><i className="fa-solid fa-star text-yellow-400"></i> 4.9 (234 reviews)</p>
                    <p className="flex items-center gap-2"><i className="fa-regular fa-calendar"></i> {p.duration}</p>
                </div>

                <div className="space-y-4">
                    <p className="text-xl font-bold text-[#F7E93F]">Overview</p>
                    <p className="text-gray-400 leading-relaxed">{p.description}</p>
                </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#130822] p-6 rounded-[25px] border border-white/5 shadow-xl">
                    <p className="text-gray-500 text-xs font-bold mb-1 uppercase">Starting from</p>
                    <p className="text-4xl font-black text-[#00FF88] mb-6">${p.price} <span className="text-xs text-gray-500 font-normal">/ person</span></p>
                    
                    <div className="bg-[#1A0B2E] p-4 rounded-xl mb-6 border border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase mb-1">Departure Date</p>
                        {/* <p className="font-bold">{p.departureDate}</p> */}
                        <DatePage date={p.departureDate}></DatePage>
                    </div>

                    <BookingBtn p={p} id={id}></BookingBtn>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default page;