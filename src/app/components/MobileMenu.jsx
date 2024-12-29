"use client"

import React, { useState } from 'react'
import styles from './styles/Burger.module.css'

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.burgerIcon}
                onClick={toggleMenu}
            >
                <div />
                <div />
                <div />
            </div>
            <nav
                className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/gamecenter">GameCenter</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    )
}
