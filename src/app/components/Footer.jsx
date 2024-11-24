import React from 'react';
import styles from './styles/footer.module.css';
import Button from './Button';
import IconButton from './IconButton';
import { Lobster, Handlee } from 'next/font/google'

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
})

const handlee = Handlee({
    subsets: ['latin'],
    weight: ['400']
})

export default function Footer({ }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.link_list}>
                    <h5>Links</h5>
                    <ul>
                        <li><Button key='1' color='#f1f1f1' to='/' label='Home' /></li>
                        <li><Button key='2' color='#f1f1f1' to='/projects' label='Projects' /></li>
                        <li><Button key='3' color='#f1f1f1' to='/gamecenter' label='Game Center' /></li>
                        <li><Button key='4' color='#f1f1f1' to='/contact' label='Contact Me' /></li>
                    </ul>
                </div>
                <div className={styles.short_about}>
                    <h5>About</h5>
                    <p className={handlee.className} style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>My name is Yaniv Romem, I'm 32 form Tel Aviv. most of my life I tried to pursue my life goal to become a musician. trough out the years I realized that music is my love, but not my proffetion. I dicided to take a change in my life and go back to my old dream to become a web developer. as a kid I used to build websites with photoshop and HTML, back then I didn't know English but it didn't bother me finding the relvnte code I needed for my websites. I do belive that my life expriens will help me get along in any working enviorment</p>
                </div>
            </div>
            <div className={styles.media}>
                <IconButton icon='./facebook.svg' alt='facebook' to='https://www.facebook.com/yaniv.romem' />
                <IconButton icon='./linkedIn.svg' alt='linkedIn' to='https://www.linkedin.com/in/yaniv-romem/' />
                <IconButton icon='./location.svg' alt='location' to='#' />
                <IconButton icon='./whatsapp.svg' alt='whatsapp' to='#' />
                <IconButton icon='./email.svg' alt='email' to='#' />
            </div>
            <span className={lobster.className}>Yaniv Romem&copy;</span>
        </footer>
    )
}