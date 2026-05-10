import { Calendar, Eye, Tag, XCircle } from 'lucide-react';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col md:flex-row items-center p-4 gap-6 shadow-sm">
      {/* Image Section */}
      <div className="w-full md:w-1/3 h-48 overflow-hidden rounded-sm">
        <img 
          src="https://images.unsplash.com/photo-1772289326073-c59062a8d290?w=500&auto=format&fit=crop" 
          alt="Maldip" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full w-fit border border-green-100">
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-[10px]">✓</span>
          </div>
          <span className="text-sm font-medium">Confirmed</span>
        </div>

        <h2 className="text-3xl font-serif font-bold text-gray-800">Maldip v</h2>
        
        <div className="space-y-2 text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span className="text-sm font-medium">Departure: May 12, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={18} />
            <span className="text-sm font-medium">Category: Mountain • Duration: 7 Days</span>
          </div>
        </div>

        <div className="text-3xl font-semibold text-[#0ea5e9] pt-2">
          $1000
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto self-end md:self-center">
        <button className="flex-1 flex items-center justify-center gap-2 px-6 py-2 border border-red-200 text-red-500 rounded-sm hover:bg-red-50 transition-colors">
          <XCircle size={18} />
          Cancel
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-[#17a2b8] text-white rounded-sm hover:bg-[#138496] transition-colors font-medium">
          <Eye size={18} />
          View
        </button>
      </div>
    </div>
        </div>
    );
};

export default page;