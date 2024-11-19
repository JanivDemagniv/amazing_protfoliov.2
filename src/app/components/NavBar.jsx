import React from 'react'
import styles from './styles/navbar.module.css'
import Button from './Button'

export default function NavBar({ }) {
    return (
        <nav className={styles.nav_bar}>
            <span><span className={styles.backColor}>Yaniv</span> Romem</span>
            <ul>
                <li><Button to='/' label='Home' /></li>
                <li><Button to='/about' label='About' /></li>
                <li><Button to='/projects' label='Projects' /></li>
                <li><Button to='/projects' label='Game Center' /></li>
                <li><Button to='/contact' label='Contact Me' /></li>
            </ul>
        </nav>
    )
}