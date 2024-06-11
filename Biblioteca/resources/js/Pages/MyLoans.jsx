import Layout from "@/Layouts/Layout.jsx";
import {Link} from "@inertiajs/react";

export default function MyLoans({ auth, loans }) {
    const content = (
        <>
            <table>
                <thead>
                <tr>
                    <th>Book</th>
                    <th>Loan Date</th>
                    <th>Return Date</th>
                </tr>
                </thead>
                <tbody>
                {loans.map((loan) => (
                    <tr key={loan.id}>
                        <td><Link href={route('books.show', { id: loan.book.id })}>{loan.book.title}</Link></td>
                        <td>{loan.loan_date}</td>
                        <td>{loan.return_date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

    return (
        <Layout activeMenu={'None'} user={auth.user}>
            {content}
        </Layout>
    );
}
