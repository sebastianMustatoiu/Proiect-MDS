import React from 'react';
import { Link, Head } from '@inertiajs/react';
import styles from '/resources/css/Books/books.module.css';
import OurAuthenticatedLayout from "@/Layouts/OurAuthenticatedLayout.jsx";
import OurGuestLayout from "@/Layouts/OurGuestLayout.jsx";
import {Pagination} from "@/Components/Pagination.jsx";
import Filters from "@/Components/Filters.jsx";

export default function Books({ books, auth, filters, queryParams}) {

    const content = (
        <>
            <Head>
                <title> Biblioteca </title>
            </Head>
        <div className={styles.pageContent}>
            <div className={styles.booksContainer}>
                {books.data.length ?
                    (
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
                    )
                    :
                    <div className={styles.notFound}> Sorry, we couldn't find any books matching your search.</div>
            }
            <span className={styles.paginationContainer}>
                <Pagination links={books.links} currentPage={books.current_page} />
                </span>
            </div>
            <div className={styles.filterContainer}>
                <Filters  filters={filters} queryParams={queryParams}/>
            </div>
        </div>
    </>
    )

    return (
        <>
            {auth.user ? (
                <OurAuthenticatedLayout user={auth.user} activeMenu={"Home"}>
                    {content}
                </OurAuthenticatedLayout>
            ) : (
                <OurGuestLayout activeMenu={"Home"}>
                    {content}
                </OurGuestLayout>
            )}
        </>
    );
}
