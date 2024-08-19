import React from 'react';
import styles from "./Layout.module.css";

function Layout({children}) {
    return (
        <div>
            <header className={styles.header}>
                <h1>Crypto App</h1>
                <p><a href='https://botostart.ir'>Botostart</a> | React.js Full Course</p>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by AYMZI</p>
            </footer>
        </div>
    )
}

export default Layout
