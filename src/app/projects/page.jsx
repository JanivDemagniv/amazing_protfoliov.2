import React from 'react'
import Timeline from '../components/Timeline';
import styles from '../page.module.css'

const events = [
    { title: "Graduation", date: "June 2018", description: "Graduated with a Bachelor's degree." },
    { title: "First Job", date: "July 2018", description: "Started my first job as a web developer." },
    { title: "Freelancing", date: "January 2020", description: "Began working as a freelance developer." },
    { title: "Portfolio Upgrade", date: "November 2024", description: "Redesigned my portfolio with Next.js!" }
];

export default function page() {
    return (
        <div className={styles.main}>
            <Timeline events={events} />
        </div>
    )
}
