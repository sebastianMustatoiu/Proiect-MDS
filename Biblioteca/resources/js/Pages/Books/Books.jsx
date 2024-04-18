import { Link, Head } from '@inertiajs/react';
import '/resources/css/Books/books.css';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import OurGuestLayout from "@/Layouts/OurGuestLayout.jsx";

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
                <AuthenticatedLayout
                    user={auth.user}

                >
                    {pageContent()}
                </AuthenticatedLayout>
            ) : (
                <OurGuestLayout>
                    {pageContent()}
                </OurGuestLayout>


            )}
        </>
    );
}
