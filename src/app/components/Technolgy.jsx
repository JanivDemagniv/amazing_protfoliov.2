import React from 'react';
import styles from './styles/Technolgy.module.css'
import { Lobster, Share_Tech } from 'next/font/google';

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
});

const shereTech = Share_Tech({
    subsets: ['latin'],
    weight: ['400']
})

export default function Technolgy({ skills }) {
    return (
        <div className={styles.container}>
            <h6 className={lobster.className}>My Skills:</h6>
            <div className={styles.skillsLine}>
                {skills.map((skill) => {
                    return <div className={`${styles.skillClass} ${shereTech.className}`}>
                        <img src={skill.imgUrl} alt={skill.imgAlt} />
                        <span className={styles.toolTip}>{skill.name}</span>
                    </div>
                })}
            </div>
        </div >
    )
}
