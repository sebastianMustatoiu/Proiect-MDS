import {Link} from "@inertiajs/react";
import styles from '/resources/css/Layouts/OurGuestLayout.module.css'
export default function OurGuestLayout( {children} ) {
    return (
        <>
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
