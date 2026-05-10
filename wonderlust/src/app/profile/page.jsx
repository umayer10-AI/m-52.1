"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import { Calendar, DollarSign, Edit3, Globe, MapPin, Plane, User } from 'lucide-react';
import React from 'react';

const page = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user)

    const stats = [
    { label: 'Total Bookings', value: '12', icon: <Plane className="text-cyan-500" />, bg: 'bg-cyan-50' },
    { label: 'Countries Visited', value: '18', icon: <Globe className="text-green-500" />, bg: 'bg-green-50' },
    { label: 'Upcoming Trips', value: '2', icon: <Calendar className="text-orange-500" />, bg: 'bg-orange-50' },
    { label: 'Total Spent', value: '$15,750', icon: <DollarSign className="text-purple-500" />, bg: 'bg-purple-50' },
  ];

    return (
        <div>
            <div className="max-w-5xl mx-auto p-8 bg-slate-800 font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-gray-900">My Profile</h1>
        <p className="text-gray-500 mt-2">Manage your account settings and travel preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Sidebar: Profile Card */}
        <div className="card border border-gray-100 shadow-sm rounded-none p-6 text-center">
          <div className="relative inline-block mx-auto mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-1 right-1 bg-cyan-500 p-2 rounded-full text-white shadow-md">
              <User size={16} />
            </button>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800">Sarah Mitchell</h2>
          <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mt-1 mb-6">
            <MapPin size={14} />
            <span>San Francisco, CA</span>
          </div>

          <div className="space-y-3 text-sm border-t pt-6 text-left">
            <div className="flex justify-between">
              <span className="text-gray-400">Member since</span>
              <span className="font-bold text-gray-700">Mar 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Nationality</span>
              <span className="font-bold text-gray-700">United States</span>
            </div>
          </div>

          <Button className="w-full mt-8 rounded-xl gap-2 bg-linear-to-r from-cyan-600 to-blue-600">
            <Edit3 size={18} />
            Edit Profile
          </Button>
        </div>

        {/* Right Section: Statistics */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-cyan-500 mb-4">Travel Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center rounded-xl  justify-between p-6 border border-gray-500 shadow-sm">
                <div>
                  <p className="text-xs uppercase text-gray-300 tracking-wider mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold ">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bg}`}>
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default page;