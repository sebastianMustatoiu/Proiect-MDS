import React from 'react';
import { Link, Head } from '@inertiajs/react';
import styles from '/resources/css/Books/books.module.css';
import OurAuthenticatedLayout from "@/Layouts/OurAuthenticatedLayout.jsx";
import OurGuestLayout from "@/Layouts/OurGuestLayout.jsx";
import {Pagination} from "@/Components/Pagination.jsx";

export default function Books({ books, auth, activeMenu }) {
    const content = (
        <div className={styles.booksContainer}>
            <div className={styles.booksGrid}>
                {books.data.map((book) => (
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
        <>
            {auth.user ? (
                <OurAuthenticatedLayout user={auth.user} activeMenu={"Home"}>
                    {content}
                </OurAuthenticatedLayout>
            ) : (
                <OurGuestLayout>
                    {content}
                </OurGuestLayout>
            )}

            <Pagination links={books.links} currentPage={books.current_page} />
        </>
    );
}
