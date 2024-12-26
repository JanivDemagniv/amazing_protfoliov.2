'use client';

import React, { useState } from 'react';
import styles from './styles/ImageSlider.module.css';
import Button from './Button';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.slider}>
            <div
                className={styles.sliderContainer}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={slide.image} alt={`Slide ${index}`} className={styles.image} />
                        <div className={styles.textOverlay}>
                            <h2 className={styles.header}>{slide.header}</h2>
                            <p className={styles.content}>{slide.content}</p>
                            {slide.projectUrl ? <Button label='To The Project' to={slide.projectUrl} color='white' /> : null}
                            <Button label='GitHub' to={slide.githubUrl} color='white' />
                        </div>
                    </div>
                ))}
            </div>
            <button className={`${styles.button} ${styles.prev}`} onClick={handlePrev}>
                &#10094;
            </button>
            <button className={`${styles.button} ${styles.next}`} onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
};

export default ImageSlider;
