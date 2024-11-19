import React from 'react';
import styles from './Timeline.module.css'

export default function Timeline({ events }) {
    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                <div className={styles.line}></div>
                {events.map((event, index) => (
                    <div
                        className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right
                            }`}
                        key={index}
                    >
                        <div className={styles.timelineContent}>
                            <h3>{event.title}</h3>
                            <p className={styles.date}>{event.date}</p>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
