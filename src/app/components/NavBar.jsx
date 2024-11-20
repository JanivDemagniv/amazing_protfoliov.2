import React from 'react'
import styles from './styles/navbar.module.css'
import Button from './Button'

export default function NavBar({ }) {
    return (
        <nav className={styles.nav_bar}>
            <div className={styles.logo}>
                <div className={styles.profilePic}><img src="./protfolioPic.jpg" alt="Profile Picture" /></div>
                <span className={styles.title}><span className={styles.backColor}>Yaniv</span> Romem</span>
            </div>
            <div>
                <ul>
                    <li><Button to='/' label='Home' /></li>
                    <li><Button to='/about' label='About' /></li>
                    <li><Button to='/projects' label='Projects' /></li>
                    <li><Button to='/gamecenter' label='Game Center' /></li>
                    <li><Button to='/contact' label='Contact Me' /></li>
                </ul>
            </div>
        </nav>
    )
}