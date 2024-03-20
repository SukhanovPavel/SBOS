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

                <Link className={styles.card} href="/news">
                    Новости
                </Link>

                <Link className={styles.card} href="/contacts">
                    Контакты
                </Link>
            </div>
            <div className={styles.contacts}>
                <span>VK: <Link href="https://vk.com/sbospro" target="_blank">vk.com/sbospro</Link></span>
                <span>mail: <Link href="mailto:mail@sbos.pro">mail@sbos.pro</Link></span>
            </div>

            <div>
                ООО СБОС входит в группу компаний:
                <p><Link href="https://mot-xi.vercel.app/" target="_blank">М.О.Телеком</Link></p>
                <p><Link href="https://высота-шатура.рф" target="_blank">Высота</Link></p>
                <p><Link href="https://energylite.ru/" target="_blank">Energylite</Link></p>
            </div>
        </div>
    );
};

export default Footer;