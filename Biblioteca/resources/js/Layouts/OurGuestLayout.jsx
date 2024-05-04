import {Link} from "@inertiajs/react";
import styles from '/resources/css/Layouts/OurGuestLayout.module.css'
export default function OurGuestLayout( {children, activeMenu} ) {
    return (
        <>
            <head>
                <title> Biblioteca </title>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100,0,0"/>
            </head>
            <div className={styles.headerSection}>
                <Link href={route('books.index')} className={styles.headerTitle}> BIBLIOTECA</Link>
                <form className={styles.searchBar}>
                    <div className={`${styles.iconSearch} material-symbols-outlined`}>
                        search
                    </div>
                    <input type='text' placeholder='What book would you like to read?' name='search'/>
                </form>
                <div className={`${styles.iconLarge} material-symbols-outlined`}>
                    account_circle
                </div>
            </div>
            <nav className={styles.menu}>
                <div className={styles.leftButtons}>
                    <Link href={route('books.index')} className={activeMenu === "Home" ? styles.activeMenu : null}> Home </Link>
                    <Link href={route('books.create')} className={activeMenu === "Add" ? styles.activeMenu : null}> Add </Link>
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
