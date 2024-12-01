'use client';

import React, { useState } from 'react';
import styles from './styles/Button.module.css'
import Link from 'next/link';

const Button = ({ label, to, color = '#1c1c1c' }) => {
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 4;
        const y = e.clientY - rect.top - size / 4;

        setRipples((prev) => [...prev, { x, y }]);
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            <Link href={to} style={{ color: color }}>{label}</Link>
            {ripples.map((ripple, index) => (
                <span
                    key={index}
                    className={styles.ripple}
                    style={{
                        left: `${ripple.x}px`,
                        top: `${ripple.y}px`,
                        width: '50px',
                        height: '50px',
                    }}
                />
            ))}
        </button>
    );
};

export default Button;
