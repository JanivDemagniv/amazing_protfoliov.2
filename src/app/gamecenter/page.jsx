import React from 'react';
import styles from '../page.module.css'
import ImageSlider from '../components/ImageSlider';
import Title from '../components/Title';

const slides = [
    {
        image: 'https://placehold.co/400x400',
        header: 'Beautiful Beach',
        content: 'Relax at the serene beaches with golden sands and crystal-clear waters.',
    },
    {
        image: 'https://placehold.co/400x400',
        header: 'Mountain Adventure',
        content: 'Explore the breathtaking mountains and experience the thrill of adventure.',
    },
    {
        image: 'https://placehold.co/400x400',
        header: 'City Lights',
        content: 'Discover the vibrant life of the city and its stunning skyline at night.',
    },
];

export default function page() {
    return (
        <div className={styles.main}>
            <Title title='Game Center' subtitle='Here are some games I have created' />
            <ImageSlider slides={slides} />
        </div>
    )
}
