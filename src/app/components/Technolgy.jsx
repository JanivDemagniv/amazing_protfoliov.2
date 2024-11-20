import React from 'react';
import styles from './styles/Technolgy.module.css'

export default function Technolgy({ skills }) {
    return (
        <div className={styles.skillsLine}>
            <h6>My Skills:</h6>
            {skills.map((skill) => {
                return <div className={styles.skillClass}><img src={skill.imgUrl} alt={skill.imgAlt} /></div>
            })}
        </div>
    )
}
