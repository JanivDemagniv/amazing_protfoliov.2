import React from 'react'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'
import styles from '../page.module.css'


export default function page() {
    return (
        <div className={styles.main}>
            <Title
                title='Contact Me'
                subtitle='Send me mail :)'
                src='./sendmail.jpeg'
                alt='send mail'
            />
            <ContactForm />
        </div>
    )
}
