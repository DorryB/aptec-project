import React from 'react';
import styles from './Header.module.scss';

export default function Header(){
    return (
        <header>
            <div>
                <span className={styles.logo}>Курсы SMM</span>
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}