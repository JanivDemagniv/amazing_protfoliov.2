import React from 'react'
import styles from '../page.module.css'
import Title from '../components/Title'
import About from '../components/About'

export default function page() {
    return (
        <div className={styles.main}>
            <Title
                title='About Me'
                subtitle='Here You Get A Chance To know me a liltle better'
                src='./mypic.jpg'
                alt='profilepic'
            />
            <About />
        </div>
    )
}
