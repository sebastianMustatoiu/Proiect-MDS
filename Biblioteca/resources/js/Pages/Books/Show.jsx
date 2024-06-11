import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Layout.jsx";
import styles from "/resources/css/Books/showBook.module.css";

export default function Show({ book, auth }) {
    const [showModal, setShowModal] = useState(false);
    const [endDate, setEndDate] = useState("");
    const { data, setData, post } = useForm({
        book_id: book.id,
        return_date: ""
    });

    const handleLoanClick = () => {
        setShowModal(true);
    };

    const handleDateChange = (e) => {
        setEndDate(e.target.value);
        setData("return_date", e.target.value);
    };

    const handleLoanSubmit = () => {
        if (endDate) {
            console.log("Submitting loan with book_id:", data.book_id, "and return_date:", data.return_date); // Log data
            post(route('loans.store'));
            setShowModal(false);
        } else {
            console.log("No end date selected.");
        }
    };

    return (
        <Layout activeMenu={"None"} user={auth.user}>
            <div className={styles.contentFlex}>
                <img src={book.image} alt={book.title} />
                <div className={styles.detailsFlex}>
                    <div className={styles.bookTitle}>
                        {book.title}
                    </div>
                    <div className={styles.detail}>
                        <label>Author</label>
                        <p>{book.author}</p>
                        <hr />
                        <label>Publisher</label>
                        <p>{book.publisher}</p>
                        <hr />
                        <label>Category</label>
                        <p>{book.category}</p>
                        <hr />
                        <label>Publish date</label>
                        <p>{book.publication_date}</p>
                    </div>
                    <div className={styles.loanButton} onClick={handleLoanClick}>
                        Loan
                    </div>
                </div>
                <div className={styles.descriptionBlock}>
                    <div className={styles.descriptionTitle}>Description</div>
                    <div className={styles.description}>{book.description}</div>
                </div>
            </div>
            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Select Loan End Date</h2>
                        <input
                            type="date"
                            value={endDate}
                            onChange={handleDateChange}
                            className={styles.dateInput}
                        />
                        <button onClick={handleLoanSubmit}>Submit</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </Layout>
    );
}
