import cx from "classnames";
import Link from "next/link";
import {useState} from "react";
// import { Inter } from 'next/font/google';

import styles from "./Menu.module.css";

// const inter = Inter({ subsets: ['latin'] });

const ARROW = <svg className={styles.menuIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
    <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0
    256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>

const BURGER =  <svg className={styles.burgerIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

const BURGER_X = <svg className={styles.burgerIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>

export const Menu = () => {

    const [menu, openMenu] = useState(false);

    const menuStyle = cx({
        [styles.menuNone]: menu,
        [styles.burgerMenu]: menu,
        [styles.grid]: true
    })

    return (
        <div className={styles._}>
            <div className={styles.burger} onClick={() => openMenu(!menu)}>
                {menu ? BURGER_X : BURGER}
            </div>
            <div className={menuStyle}>
                <Link className={styles.card} href="/">
                    <p>Главная</p>
                    <span>{ARROW}</span>
                </Link>

                <Link className={styles.card} href="/services">
                    <p>Услуги</p>
                    <span>{ARROW}</span>
                </Link>

                <Link className={styles.card} href="/products">
                    <p>Товары</p>
                    <span>{ARROW}</span>
                </Link>

                {/*<Link className={styles.card} href="/ourworks" >*/}
                {/*    <p>Наши работы</p>*/}
                {/*    <span>{ARROW}</span>*/}
                {/*</Link>*/}

                {/*<Link className={styles.card} href="/sets">*/}
                {/*    <p>Комплекты</p>*/}
                {/*    <span>{ARROW}</span>*/}
                {/*</Link>*/}

                <Link className={styles.card} href="/contacts">
                    <p>Контакты</p>
                    <span>{ARROW}</span>
                </Link>
            </div>
        </div>
    )
}