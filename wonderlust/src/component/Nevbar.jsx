import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';

const Nevbar = () => {
    return (
        <div>
            <Nav1></Nav1>
            <h2 className='text-2xl font-bold text-cyan-500'>Wanderlast</h2>
            <Nav2></Nav2>
        </div>
    );
};

export default Nevbar;