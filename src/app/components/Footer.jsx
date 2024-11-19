import React from 'react';
import styles from './styles/footer.module.css';
import Button from './Button';
import IconButton from './IconButton';

export default function Footer({ }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.link_list}>
                    <h5>Links</h5>
                    <ul>
                        <li><Button color='#f1f1f1' to='/' label='Home' /></li>
                        <li><Button color='#f1f1f1' to='/projects' label='Projects' /></li>
                        <li><Button color='#f1f1f1' to='/projects' label='Game Center' /></li>
                        <li><Button color='#f1f1f1' to='/projects' label='Contact Me' /></li>
                    </ul>
                </div>
                <div className={styles.short_about}>
                    <h5>short about</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem id, dolor ipsam at quisquam iste commodi soluta, ut facilis facere mollitia suscipit? Nisi doloremque obcaecati illo delectus commodi, est officiis necessitatibus perspiciatis et! Animi autem dicta harum? Non id veritatis enim ad qui accusantium! Praesentium dolores provident labore laborum assumenda ad doloribus mollitia error accusantium! Id rerum consequuntur repellendus dolorem officiis. Veniam cum possimus veritatis adipisci laboriosam ex aliquam quo voluptate unde quis. Adipisci hic saepe molestias quae vitae esse sint, et labore nemo consequatur placeat dolor asperiores fugiat quod illo, mollitia, minus facere consectetur harum possimus incidunt numquam ad. Provident fugiat odit officiis ratione, veniam, voluptatibus tempora cum et molestias blanditiis ad minus dolores ab laudantium ipsa! Temporibus saepe quidem expedita consequatur voluptate?</p>
                </div>
            </div>
            <div className={styles.media}>
                <IconButton icon='./facebook.svg' alt='facebook' to='https://www.facebook.com/yaniv.romem' />
                <IconButton icon='./linkedIn.svg' alt='linkedIn' to='https://www.linkedin.com/in/yaniv-romem/' />
                <IconButton icon='./location.svg' alt='location' to='#' />
                <IconButton icon='./whatsapp.svg' alt='whatsapp' to='#' />
                <IconButton icon='./email.svg' alt='email' to='#' />
            </div>
        </footer>
    )
}