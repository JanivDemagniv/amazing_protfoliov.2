import React from 'react'
import Timeline from '../components/Timeline';
import styles from '../page.module.css'
import Title from '../components/Title';
import projects from '../data/projects'

export default function page() {
    return (
        <div className={styles.main}>
            <Title
                title='My Projects'
                subtitle='My Progress as a Developer'
                src='./projects.jpg'
                alt='projects'
            />
            <Timeline events={projects} />
        </div>
    )
}
