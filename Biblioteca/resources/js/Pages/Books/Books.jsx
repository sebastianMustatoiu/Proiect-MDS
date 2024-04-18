import React from 'react';
import { Link, Head } from '@inertiajs/react';
import styles from '/resources/css/Books/books.module.css';

export default function Books({ books, auth }) {
    const content = (
        <div className={styles.booksContainer}>
            <h1 className={styles.pageTitle}> Biblioteca: </h1>
            <div className={styles.booksGrid}>
                {books.map((book) => (
                    <div key={book.id} className={styles.bookCard}>
                        <img src={book.image} alt={book.title}/>
                        <div className={styles.bookDetails}>
                            <p className={styles.bookAuthor}>
                                {book.author},
                                <span className={styles.bookTitleItalic}> {book.title}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
    return (

    );
}
