import styles from '../../css/filters.module.css';

export default function Filters({ filters }) {
    return (
        <>
            {filters.categories && filters.categories.length > 1 && (
                <ul className={styles.filterGroup} id="category_filters">
                    <span className={styles.filterTitle}>Categories</span>
                    {filters.categories.map((category, index) => (
                        <li key={index} className={styles.filterOption}>
                            <input type="checkbox" id={`category_${index}`} value={category} className={styles.filterBox} />
                            <label htmlFor={`category_${index}`}>{category}</label>
                        </li>
                    ))}
                </ul>
            )}
            {filters.publishers && filters.publishers.length > 1 && (
                <ul className={styles.filterGroup} id="publisher_filters">
                    <span className={styles.filterTitle}>Publishers</span>
                    {filters.publishers.map((publisher, index) => (
                        <li key={index} className={styles.filterOption}>
                            <input type="checkbox" id={`publisher_${index}`} value={publisher} className={styles.filterBox}/>
                            <label htmlFor={`publisher_${index}`}>{publisher}</label>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
