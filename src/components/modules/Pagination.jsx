import React, { useState } from 'react';
import styles from  "./Pagination.module.css"

function Pagination({page, setPage}) {

    const previousHandler = () => {
        if (page <= 1) return;
        setPage(page => page - 1);
    }

    const nextHandler = () => {
        if (page >= 10) return;
        setPage(page => page + 1);
    }

    return (
        <div className={styles.pagination}>
            <button onClick={previousHandler} className={page === 1 ? styles.disabled : null}>Previuos</button>
            <p className={page === 1 ? styles.selected : null}>1</p>
            <p className={page === 2 ? styles.selected : null}>2</p>
            {page > 2 && page < 9 && (
                <div>
                <span className={styles.pages}> ... </span>
                <p className={ 
                    page === 3 ||
                    page === 4 || 
                    page === 5 ||
                    page === 6 ||
                    page === 7 ||
                    page === 8  ? styles.selected : null}>{page}</p>
                </div>
            )}
                <span> ... </span>
            <p className={page === 9 ? styles.selected : null}>9</p>
            <p className={page === 10 ? styles.selected : null}>10</p>
            <button onClick={nextHandler} className={page === 10 ? styles.disabled : null}>Next</button>
        </div>
    )
}

export default Pagination
