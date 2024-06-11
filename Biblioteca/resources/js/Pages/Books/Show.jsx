import {Link} from "@inertiajs/react";
import Layout from "@/Layouts/Layout.jsx";
import styles from "/resources/css/Books/showBook.module.css";

export default function Show({book, auth}) {
    const content = (
        <>
            <div className={styles.contentFlex}>
                <img src={book.image} alt={book.title}/>
                <div className={styles.detailsFlex}>
                    <div className={styles.bookTitle}>
                        {book.title}
                    </div>
                    <div className={styles.detail}>
                        <label> Author </label>
                        <p>{book.author}</p>
                        <hr/>
                        <label> Publisher</label>
                        <p>{book.publisher}</p>
                        <hr/>
                        <label> Category </label>
                        <p>{book.category}</p>
                        <hr/>
                        <label> Pulbish date</label>
                        <p>{book.publication_date}</p>
                    </div>
                    <div className={styles.loanButton}>
                        <Link method="post"> Loan </Link>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
            {book.description}
            </div>
        </>
    )
    return (
        <Layout activeMenu={"None"} user={auth.user}>
            {content}
        </Layout>
    )
}
