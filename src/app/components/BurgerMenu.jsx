"use client"

import React from 'react'
import styles from './styles/Burger.module.css';

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.container}>
            {/* Burger Icon */}
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </div>

            {/* Menu */}
            <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#about" onClick={toggleMenu}>About</a>
                <a href="#services" onClick={toggleMenu}>Services</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
            </nav>
        </div>
    )
}
