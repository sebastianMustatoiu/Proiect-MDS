import styles from '../../css/filters.module.css';
import {router} from "@inertiajs/react";

const valueExistsExactly = (value, list) => {
    return list.split('_').includes(value);
};


export default function Filters({ filters, queryParams}) {

     queryParams = queryParams || {};
    const handleCheckbox = (checkbox) => {
        const filterType = checkbox.id.split('_')[0];
        const filterValue = checkbox.value;

        if (checkbox.checked) {
            queryParams[filterType] = queryParams[filterType] || '';
            queryParams[filterType] = queryParams[filterType] ? `${queryParams[filterType]}_${filterValue}` : filterValue;
        }
        else {
            if (valueExistsExactly(filterValue, queryParams[filterType])) {
                queryParams[filterType] = queryParams[filterType]
                    .split('_')
                    .filter(item => !(item === filterValue))
                    .join('_');

                queryParams[filterType] = queryParams[filterType].replace(/^_+|_+$/g, '');
                queryParams[filterType] = queryParams[filterType].replace(/_+/g, '_');
            }
        }

        router.get(route('books.index'), queryParams);
    };


    return (
        <>
            {filters.categories && filters.categories.length > 1 && (
                <ul className={styles.filterGroup} id="category_filters">
                    <span className={styles.filterTitle}>Categories</span>
                    {filters.categories.map((category, index) => (
                        <li key={index} className={styles.filterOption}>
                            <input type="checkbox"
                                   id={`category_${index}`}
                                   value={category}
                                   defaultChecked={queryParams['category'] && valueExistsExactly(category, queryParams['category']) }
                                   className={styles.filterBox}
                                   onChange={(e) => handleCheckbox(e.target)}
                            />
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
                            <input type="checkbox"
                                   id={`publisher_${index}`}
                                   value={publisher}
                                   defaultChecked={queryParams['publisher'] && valueExistsExactly(publisher, queryParams['publisher']) }
                                   className={styles.filterBox}
                                   onChange={(e) => handleCheckbox(e.target)}
                            />
                            <label htmlFor={`publisher_${index}`}>{publisher}</label>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
