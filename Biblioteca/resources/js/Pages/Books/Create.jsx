// Create.jsx

import React from "react";
import { useForm } from '@inertiajs/react';
import styles from '/resources/css/Books/create.module.css'
import Layout from "@/Layouts/Layout.jsx";

export default function Create({auth}) {
    const { data, setData, post, reset, errors } = useForm({
        title: '',
        author: '',
        publication_date: '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('books.store'), { onSuccess: () => reset() });
    };
const content = (
    <section>
        <div className={styles.formBox}>
            <div>
                <h1>Add Book</h1>
                <form className={styles.addBookForm} onSubmit={handleSubmit}>
                    <div className={styles.titleInput}>
                        <label htmlFor="title">Title</label><br/>
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                        />
                    </div>
                    {errors.title && (
                        <div className="text-red-500">{errors.title}</div>
                    )}

                    <div className={styles.authorInput}>
                        <label htmlFor="author">Author</label><br/>
                        <input
                            type="text"
                            id="author"
                            value={data.author}
                            onChange={e => setData('author', e.target.value)}
                        />
                    </div>
                    {errors.author && (
                        <div className="text-red-500">{errors.author}</div>
                    )}

                    <div className={styles.publicationDateInput}>
                        <label htmlFor="publication_date">Publication Date</label><br/>
                        <input
                            type="date"
                            id="publication_date"
                            value={data.publication_date}
                            onChange={e => setData('publication_date', e.target.value)}
                        />
                    </div>
                    {errors.publication_date && (
                        <div className="text-red-500">{errors.publication_date}</div>
                    )}

                    <div className={styles.imageInput}>
                        <label htmlFor="image">Image</label><br/>
                        <input
                            type="file"
                            id="image"
                            onChange={e => setData('image', e.target.files[0])}
                        />
                    </div>
                    {errors.image && (
                        <div className="text-red-500">{errors.image}</div>
                    )}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
)
    return (
        <Layout activeMenu={"Home"} user={auth.user}>
            {content}
        </Layout>
    );
}
