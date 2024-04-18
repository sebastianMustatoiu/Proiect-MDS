import { Link, Head } from '@inertiajs/react';
import styles from '/resources/css/Books/books.module.css';
import OurGuestLayout from "@/Layouts/OurGuestLayout.jsx";
import OurAuthenticatedLayout from "@/Layouts/OurAuthenticatedLayout.jsx";

export default function Books({ books, auth }) {
    const pageContent = () => {
        return (
            <>
                <h1> Pagina cu cărți</h1>
                <img src='storage/images/bug72819.jpg'/>
            </>
    )
    };
    return (
        <>
            {auth.user ? (
                <OurAuthenticatedLayout
                    user={auth.user}
                >
                    {pageContent()}
                </OurAuthenticatedLayout>
            ) : (
                <OurGuestLayout>
                    {pageContent()}
                </OurGuestLayout>


            )}
        </>
    );
}
