import { Link } from "@inertiajs/react";
import styles from '/resources/css/pagination.module.css';

export function Pagination({ links, currentPage }) {
    const prevIndex = 0;
    const nextIndex = links.length-1;
    const firstIndex = 1;
    const lastIndex = links.length - 2;
    const avoid = [prevIndex, nextIndex, firstIndex, lastIndex]
    const filteredLinks = links.filter((link, index) => index >= currentPage - 1 && index <= currentPage + 1 && !avoid.includes(index));

    return (
        <nav className={styles.pageNav}>
            <Link
                dangerouslySetInnerHTML={{__html: links[prevIndex].label}}
                href={links[prevIndex].url}
                className={styles.pageButton}
            />
            <Link
                dangerouslySetInnerHTML={{__html: links[firstIndex].label}}
                href={links[firstIndex].url}
                className={`${styles.pageButton} ${links[firstIndex].active ? styles.active : ''}`}
            />
            { currentPage >= 4 ? <span className={styles.pageButton}> ... </span> : null}


            {filteredLinks.map((link, index) => (
                <Link
                    key={index}
                    dangerouslySetInnerHTML={{__html: link.label}}
                    href={link.url}
                    className={`${styles.pageButton} ${link.active ? styles.active : ''}`}
                />
            ))}
            { currentPage <= links.length - 5 ? <span className={styles.pageButton}> ... </span> : null}
            {lastIndex != 1 ?
            <Link
                dangerouslySetInnerHTML={{__html: links[lastIndex].label}}
                href={links[lastIndex].url}
                className={`${styles.pageButton} ${links[lastIndex].active ? styles.active : ''}`}
            />
           : null }
            <Link
                dangerouslySetInnerHTML={{__html: links[nextIndex].label}}
                href={links[nextIndex].url}
                className={styles.pageButton}
            />
        </nav>
    );
}
