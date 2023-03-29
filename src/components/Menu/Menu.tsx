import cx from "classnames";
import { Inter } from 'next/font/google';
import styles from "./Menu.module.css";
import Link from "next/link";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] });

const BURGER =  <svg className={styles.burgerIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

const BURGER_X = <svg className={styles.burgerIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>

export const Menu = () => {

    const [menu, openMenu] = useState(false);

    // const burgerStyles = cx({
    //     [styles.closed]: true,
    //     [styles.open]: burger,
    // })

    return (
        <div className={styles._}>
            <div className={styles.burger} onClick={() => openMenu(!menu)}>
                {menu ? BURGER_X : BURGER}
            </div>
            {menu ?
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
            </div> : null}
        </div>
    )
}