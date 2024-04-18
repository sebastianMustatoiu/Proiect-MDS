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
                        <img src={book.image} />
                        <div className="book-details">
                            <p className="book-author">
                                {book.author}, 
                                <span className="book-title-italic"> {book.title}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
