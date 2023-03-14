
import { Inter } from 'next/font/google';

import styles from "./Menu.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });
export const Menu = () => (
    <div className={styles._}>
        <div className={styles.grid}>
            <Link className={styles.card} href="/">
                <h2 className={inter.className}>
                    Главная <span>-&gt;</span>
                </h2>
            </Link>

            <Link className={styles.card} href="/services">
                <h2 className={inter.className}>
                    Услуги <span>-&gt;</span>
                </h2>
            </Link>

            <Link className={styles.card} href="/services">
                <h2 className={inter.className}>
                    Комплекты <span>-&gt;</span>
                </h2>
            </Link>

            <Link className={styles.card} href="/services">
                <h2 className={inter.className}>
                    Оборудование <span>-&gt;</span>
                </h2>
            </Link>

            <Link className={styles.card} href="/services">
                <h2 className={inter.className}>
                    Цены <span>-&gt;</span>
                </h2>
            </Link>
        </div>
    </div>
)