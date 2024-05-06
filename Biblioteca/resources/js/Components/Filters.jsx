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

        router.get(route('books.index'), queryParams, {preserveScroll: true});
    };


    const renderFilter = (filterType) => {
        return (
            <ul className={styles.filterGroup} id={`${filterType}_filters`} key={`${filterType}_filters`}>
                <span className={styles.filterTitle}>{filterType}</span>
                {filters[filterType].map((item, index) => (
                    <li key={index} className={styles.filterOption}>
                        <input
                            type="checkbox"
                            id={`${filterType}_${index}`}
                            value={item}
                            defaultChecked={queryParams[filterType] && valueExistsExactly(item, queryParams[filterType])}
                            className={styles.filterBox}
                            onChange={(e) => handleCheckbox(e.target)}
                        />
                        <label htmlFor={`${filterType}_${index}`}>{item}</label>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            {Object.keys(filters).map((filterType) => (
                filters[filterType] && filters[filterType].length > 1 && renderFilter(filterType)
            ))}
        </>
    );
}
