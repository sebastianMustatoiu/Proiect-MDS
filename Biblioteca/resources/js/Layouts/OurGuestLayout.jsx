import {Link} from "@inertiajs/react";
import styles from '/resources/css/Layouts/OurGuestLayout.module.css'
export default function OurGuestLayout( {children} ) {
    return (
        <>
            <head>
                <title> Biblioteca </title>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100,0,0"/>
            </head>
            <div className={styles.headerSection}>
                <div className={styles.headerTitle}> BIBLIOTECA</div>
                <div className={styles.searchBar}>
                    <input type='text' placeholder='What book would you like to read?' name='search'/>
                </div>
                <div className={`${styles.iconLarge} material-symbols-outlined`}>
                    account_circle
                </div>
            </div>
            <nav className={styles.menu}>
                <div className={styles.leftButtons}>
                    <Link href={route('books.index')}> HOME </Link>
                    <Link href={route('books.create')}> ADD </Link>
                </div>

                <div className={styles.rightButtons}>
                    <Link href={route('login')}> LOGIN </Link>
                    <Link href={route('register')}> REGISTER </Link>
                </div>
            </nav>

            {children}
        </>
    )
}
