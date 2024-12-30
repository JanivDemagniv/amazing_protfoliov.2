import React from 'react'
import styles from './styles/About.module.css'
import Button from './Button'
import about_text from '../data/about_text'


export default function About() {
    return (
        <div className={styles.aboutAll}>
            <div className={styles.aboutHeader}>
                <div className={styles.header}>
                    <h2>Yaniv Romem</h2>
                    <h5>Summary</h5>
                </div>
                <div className={styles.imgHeader}>
                    <img src="./protfolioPic.jpg" alt="Profile Picture" />
                </div>
            </div>
            <p>
                {about_text.text}
            </p>
            <Button to="./YanivRomem_Cv.pdf" download={true} label="Download my CV" />
        </div>
    )
}
