'use client';

import React from 'react';
import './Title.css'


export default function Title({ title, subtitle }) {
    return (
        <div className='title'>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
            <hr />
        </div>
    )
}