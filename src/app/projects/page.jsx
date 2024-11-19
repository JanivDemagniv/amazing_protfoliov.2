import React from 'react'
import Timeline from '../components/Timeline';
import styles from '../page.module.css'
import Title from '../components/Title';
import projects from '../data/projects'

export default function page() {
    return (
        <div className={styles.main}>
            <Title title='My Projects' subtitle='My Proggress as a Developer' />
            <Timeline events={projects} />
        </div>
    )
}
