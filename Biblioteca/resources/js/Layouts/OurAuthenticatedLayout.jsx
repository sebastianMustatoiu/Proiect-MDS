import styles from '/resources/css/Layouts/OurAuthenticatedLayout.module.css';
import {Link} from "@inertiajs/react";

export default function OurAuthenticatedLayout( {user, children, activeMenu} ) {
    return (
        <>
            <head>
                <title> Biblioteca </title>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100,0,0"/>
            </head>
            <div className={styles.headerSection}>
                <div className={styles.headerTitle}> BIBLIOTECA</div>
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
                     <div className={styles.dropDown}>
                         {user.name}
                         <span className={styles.arrow} >&darr; </span>
                        <div className={styles.dropDownContent}>
                            <Link href={route('profile.edit')}> Profile </Link>
                            <Link method="post" href={route('logout')}> Log out </Link>
                        </div>
                    </div>
         </nav>
            {children}
        </>
    )
}
