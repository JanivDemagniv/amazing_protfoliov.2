import React from 'react'
import Timeline from '../components/Timeline';
import styles from '../page.module.css'
import Title from '../components/Title';

const events = [
    { title: "Graduation", date: "June 2018", description: "Graduated with a Bachelor's degree.", skills: 'React, JavaScript, Node.js', imgUrl: 'https://placehold.co/200x200', imgAlt: 'Pic' },
    { title: "First Job", date: "July 2018", description: "Started my first job as a web developer.", skills: 'React, JavaScript, Node.js', imgUrl: 'https://placehold.co/200x200', imgAlt: 'Pic' },
    { title: "Freelancing", date: "January 2020", description: "Began working as a freelance developer.", skills: 'React, JavaScript, Node.js', imgUrl: 'https://placehold.co/200x200', imgAlt: 'Pic' },
    { title: "Portfolio Upgrade", date: "November 2024", description: "Redesigned my portfolio with Next.js!", skills: 'React, JavaScript, Node.js', imgUrl: 'https://placehold.co/200x200', imgAlt: 'Pic' }
];

export default function page() {
    return (
        <div className={styles.main}>
            <Title title='My Projects' subtitle='My Proggress as a Developer' />
            <Timeline events={events} />
        </div>
    )
}
