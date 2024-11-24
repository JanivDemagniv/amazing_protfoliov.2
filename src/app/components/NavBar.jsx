import React from 'react'
import styles from './styles/navbar.module.css'
import Button from './Button'
import { Lobster } from 'next/font/google'

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
})

export default function NavBar({ }) {
    return (
        <nav className={styles.nav_bar}>
            <div className={`${styles.logo} ${lobster.className}`}>
                <div className={styles.profilePic}><img src="./protfolioPic.jpg" alt="Profile Picture" /></div>
                <span className={styles.title}><span className={styles.backColor}>Yaniv</span> Romem</span>
            </div>
            <div>
                <ul>
                    <li><Button key='homeUp' to='/' label='Home' /></li>
                    <li><Button key='aboutUp' to='/about' label='About' /></li>
                    <li><Button key='projectsUp' to='/projects' label='Projects' /></li>
                    <li><Button key='gameUp' to='/gamecenter' label='Game Center' /></li>
                    <li><Button key='contactUp' to='/contact' label='Contact Me' /></li>
                </ul>
            </div>
        </nav>
    )
}