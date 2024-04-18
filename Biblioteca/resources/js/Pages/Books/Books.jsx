import React from 'react';
import { Link, Head } from '@inertiajs/react';
import '/resources/css/Books/books.css';

export default function Books({ books }) {
    return (
        <div className="books-container">
            <h1 className="page-title"> Biblioteca: </h1>
            <div className="books-grid">
                {books.map((book) => (
                    <div key={book.id} className="book-card">
                        <img src={book.coverUrl} />
                        <div className="book-details">
                            <h2 className="book-title">{book.title}</h2>
                            <p className="book-author">{book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
