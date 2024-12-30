import React from 'react';
import styles from './styles/footer.module.css';
import Button from './Button';
import IconButton from './IconButton';
import { Lobster, Handlee } from 'next/font/google'
import about_text from '../data/about_text';

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
                        <li><Button key='home' color='#f1f1f1' to='/' label='Home' /></li>
                        <li><Button key='projects' color='#f1f1f1' to='/projects' label='Projects' /></li>
                        <li><Button key='gamecenter' color='#f1f1f1' to='/gamecenter' label='Game Center' /></li>
                        <li><Button key='contact' color='#f1f1f1' to='/contact' label='Contact Me' /></li>
                    </ul>
                </div>
                <div className={styles.short_about}>
                    <h5>About</h5>
                    <p className={handlee.className} style={{ fontWeight: 'normal' }}>{about_text.text}</p>
                </div>
            </div>
            <div className={styles.media}>
                <IconButton icon='./facebook.svg' alt='facebook' to='https://www.facebook.com/yaniv.romem' />
                <IconButton icon='./linkedIn.svg' alt='linkedIn' to='https://www.linkedin.com/in/yaniv-romem/' />
                {/* <IconButton icon='./location.svg' alt='location' to='#' />
                <IconButton icon='./whatsapp.svg' alt='whatsapp' to='#' /> */}
                <IconButton icon='./email.svg' alt='email' to='/contact' />
            </div>
            <span className={lobster.className}>Yaniv Romem&copy;</span>
        </footer>
    )
}