"use client"
import { deleteUser } from '@/lib/data';
import React from 'react';

const DeleteBtn = ({id}) => {

    return (
        <button onClick={() => deleteUser(id)} className="flex items-center gap-2 border border-red-500/50 text-red-500 px-5 py-2 rounded-xl font-bold text-sm hover:bg-red-500/10 transition">
                <i className="fa-regular fa-trash-can"></i> Cancel
            </button>
    );
};

export default DeleteBtn;