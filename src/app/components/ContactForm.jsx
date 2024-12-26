"use client"

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles/ContactForm.module.css'
import buttonStyle from '../components/styles/Button.module.css'


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_twx5cn4',
                'template_wws8zj8',
                formData,
                'usGRyKGZ-Mvp4KE9S'
            )
            .then(
                (result) => {
                    alert('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.error('Error:', error.text);
                    alert('Failed to send message. Please try again later.');
                }
            );
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required

            />
            <button className={buttonStyle.button} type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
