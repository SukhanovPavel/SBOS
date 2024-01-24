import React from 'react';

import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles._}>
            <div className={styles.links}>
                <Link className={styles.card} href="/">
                    Главная
                </Link>

                <Link className={styles.card} href="/services">
                    Услуги
                </Link>

                <Link className={styles.card} href="/products">
                    Товары
                </Link>

                <Link className={styles.card} href="/ourworks" >
                    Наши работы
                </Link>

                <Link className={styles.card} href="/sets">
                    Готовые наборы
                </Link>

                <Link className={styles.card} href="/contacts">
                    Контакты
                </Link>
            </div>
        </div>
    );
};

export default Footer;