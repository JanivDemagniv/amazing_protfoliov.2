'use client';

import React from 'react';
import styles from './styles/Title.module.css'


export default function Title({ title, subtitle, src, alt }) {
    return (
        <div className={styles.title}>
            <div className={styles.header}>
                <h1>{title}</h1>
                <h6>{subtitle}</h6>
            </div>
            <div className={styles.picture}>
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}