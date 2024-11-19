import React from 'react'
import styles from '../page.module.css'
import Button from '../components/Button'
import Title from '../components/Title'

export default function page() {
    return (
        <div className={styles.main}>
            <Title title='About Me' subtitle='Here You Get A Chance To know me a liltle better' />
            <div className={styles.aboutAll}>
                <div className={styles.aboutHeader}>
                    <div className={styles.header}>
                        <h2>Yaniv Romem</h2>
                        <h5>Small Summary</h5>
                    </div>
                    <div className={styles.imgHeader}>
                        <img src="./protfolioPic.jpg" alt="Profile Picture" />
                    </div>
                </div>
                <p>
                    My name is Yaniv Romem, I'm 32 form Tel Aviv. most of my life I tried to pursue my life goal to become a musician. trough out the years I realized that music is my love, but not my proffetion. I dicided to take a change in my life and go back to my old dream to become a web developer. as a kid I used to build websites with photoshop and HTML, back then I didn't know English but it didn't bother me finding the relvnte code I needed for my websites. I do belive that my life expriens will help me get along in any working enviorment
                </p>
                <Button to="#" label="Download my CV" />
            </div>
        </div>
    )
}
