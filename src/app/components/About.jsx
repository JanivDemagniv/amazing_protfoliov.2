import React from 'react'
import styles from './styles/About.module.css'
import Button from './Button'


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
                Welcome!
                <br />
                <br />
                My name is Yaniv Romem.I'm 33 years old, living in Tel Aviv.
                <br />
                <br />
                For the better part of my life, I’ve been pursuing my childhood dream of becoming a musician, but through the years I’ve realized that while music will always remain my love, it should not be my profession as well.
                <br />
                <br />
                A year and a half ago, I decided to change direction and instead aim at another subject I was always fascinated by- Software Development.
                <br />
                <br />
                As a kid I loved building Websites using Photoshop and HTML.Back then I barely knew English, but it didn't stop me from building the things I wanted, using the tools and knowledge I managed to find on my own. Today, having learned Software Development properly, I believe my experience, determination, and continuous will to learn will help me get along in any work environment I'll set foot in.
            </p>
            <Button to="./YanivRomem_Cv.pdf" download={true} label="Download my CV" />
        </div>
    )
}
