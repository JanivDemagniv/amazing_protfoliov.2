'use client';

import React from 'react';
import styles from './styles/Title.module.css'


export default function Title({ title, subtitle }) {
    return (
        <div className={styles.title}>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
            <hr />
        </div>
    )
}