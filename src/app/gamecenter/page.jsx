import React from 'react';
import styles from '../page.module.css'
import ImageSlider from '../components/ImageSlider';
import Title from '../components/Title';
import games from '../data/games'

export default function page() {
    return (
        <div className={styles.main}>
            <Title
                title='Game Center'
                subtitle='Here are some games I have created'
                src='./gamecenter.jpg'
                alt='gameCenter'
            />
            <ImageSlider slides={games} />
        </div>
    )
}
