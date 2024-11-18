'use client';

import React from 'react';
import './IconButton.css';
import Link from 'next/link';


const IconButton = ({ to, icon, alt }) => {


    return (
        <button className="iconbutton">
            <Link href={to}><img src={icon} alt={alt} /></Link>
        </button>
    );
};

export default IconButton;
