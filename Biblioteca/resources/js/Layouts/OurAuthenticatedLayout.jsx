import styles from '/resources/css/Layouts/OurAuthenticatedLayout.module.css';
import {Link} from "@inertiajs/react";
import { ArrowDownOutline } from 'react-ionicons'


export default function OurAuthenticatedLayout( {user, children} ) {
    return (
        <>
         <nav className={styles.menu}>
                 <div className={styles.leftButtons}>
                 <Link href={route('books.index')}> Home </Link>
                     <Link href={route('books.create')}> Add </Link>
                 </div>
                     <div className={styles.dropDown}>
                         {user.name}
                         <ArrowDownOutline
                             color={'#00000'}
                             title={''}
                             height="21px"
                             width="21px"
                             className={styles.icon}
                         />
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
