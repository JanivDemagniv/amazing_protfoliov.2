import React from 'react';
import styles from './styles/Technolgy.module.css'

export default function Technolgy({ skills }) {
    return (
        <div>
            <h6>My Skills:</h6>
            <div className={styles.skillsLine}>
                {skills.map((skill) => {
                    return <div className={styles.skillClass}>
                        <img src={skill.imgUrl} alt={skill.imgAlt} />
                        <span className={styles.toolTip}>{skill.name}</span>
                    </div>
                })}
            </div>
        </div>
    )
}
