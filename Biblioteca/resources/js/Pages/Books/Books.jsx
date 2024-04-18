import React from 'react';
import { Link, Head } from '@inertiajs/react';
import styles from '/resources/css/Books/books.module.css';
import OurAuthenticatedLayout from "@/Layouts/OurAuthenticatedLayout.jsx";
import OurGuestLayout from "@/Layouts/OurGuestLayout.jsx";

export default function Books({ books, auth }) {
    const content = (
        <div className={styles.booksContainer}>
            {/*    <h1 className={styles.pageTitle}> Biblioteca: </h1> */}
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
        auth.user ?
            <OurAuthenticatedLayout
                user={auth.user}
            >
                {content}
            </OurAuthenticatedLayout>
            :
            <OurGuestLayout>
                {content}
            </OurGuestLayout>

    );
}
