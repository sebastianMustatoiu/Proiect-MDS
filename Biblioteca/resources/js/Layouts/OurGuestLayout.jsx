import {Link} from "@inertiajs/react";
import styles from '/resources/css/Layouts/OurGuestLayout.module.css'
export default function OurGuestLayout( {children} ) {
    return (
        <>
            <nav className={styles.menu}>
                <div className={styles.leftButtons}>
                    <Link href={route('books.index')}> Home </Link>
                    <Link href={route('books.create')}> Add </Link>
                </div>

                <div className={styles.rightButtons}>
                   <Link href={route('login')}> Login </Link>
                    <Link href={route('register')}> Register </Link>
                </div>
            </nav>

            {children}
        </>
    )
}
