'use client';

import React from 'react';
import Link from 'next/link';
import styles from './IconButton.module.css'


const IconButton = ({ to, icon, alt }) => {


    return (
        <button className={styles.iconbutton}>
            <Link href={to}><img className={styles.img} src={icon} alt={alt} /></Link>
        </button>
    );
};

export default IconButton;
