import { Link, usePage } from "@inertiajs/react";
import styles from '/resources/css/Layouts/OurGuestLayout.module.css';
import { useState } from 'react';

export default function OurGuestLayout({ children, activeMenu }) {
    const { queryParams } = usePage().props;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={styles.headerSection}>
                <Link href={route('books.index')} className={styles.headerLogo}>
                    <img alt={'logo'} src={'/Images/logo.png'} />
                </Link>
                <form className={styles.searchBar}>
                    <div className={`${styles.iconSearch} material-symbols-outlined`}>
                        search
                    </div>
                    <input type='text'
                           placeholder='What book would you like to read?'
                           name='search'
                           defaultValue={queryParams?.search ? queryParams.search : ''}
                    />
                </form>
                <div className={styles.dropDown}>
                    <div className={`${styles.iconLarge} material-symbols-outlined`} onClick={toggleMenu}>
                        account_circle
                    </div>
                    {menuOpen && (
                        <div className={styles.dropDownContent}>
                            <Link href={route('register')}>Register</Link>
                            <Link href={route('login')}>Login</Link>
                        </div>
                    )}
                </div>
            </div>
            <nav className={styles.menu}>
                <div className={styles.leftButtons}>
                    <Link href={route('books.index')} className={activeMenu === "Home" ? styles.activeMenu : null}> Home </Link>
                    <Link href={route('books.create')} className={activeMenu === "Add" ? styles.activeMenu : null}> Add </Link>
                </div>

                <div className={styles.rightButtons}>
                    {/* Eliminat butoanele de LOGIN și REGISTER din meniul principal */}
                </div>
            </nav>

            {children}
        </>
    );
}
