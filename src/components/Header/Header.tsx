import styles from "./Header.module.css";
import Link from "next/link";
import {ScrollButton} from "@/components/ScrollButton/ScrollButton";
import Image from "next/image";

import LOGO from "../../../public/images/logo/sbos_logo_transparent.png";
import LOGO_MOBILE from "../../../public/images/logo/sbos_logo.png";
import {useEffect, useState} from "react";

type Props = {
    handleClick: () => void;
}
export const Header = ({handleClick}: Props) => {

    const [width, setWidth] = useState(0);

    useEffect(() => setWidth(document.documentElement.clientWidth), []);

    return (<div className={styles._}>
            <div className={styles.headerBlockLogo}>
                <Link className={styles.logoButton} href="/">
                    {width > 900 ?
                        <Image
                            src={LOGO}
                            alt="logo"
                            width={250}
                            height={100}
                        /> :
                        <><Image
                            alt="logo"
                            src={LOGO_MOBILE}
                            width={50}
                            height={50}
                        /> <h2 className={styles.h}>СБОС</h2></>}
                </Link>
            </div>
            <div className={styles.headerBlockDesc}>
                <p>город Шатура</p>
                <div>
                    <p>Системы безопасности</p>
                    <p>Видеонаблюдение</p>
                </div>
            </div>
            <div className={styles.headerBlockButton}>
                <button onClick={handleClick} className={styles.button}>Заказать звонок</button>
            </div>
            <div className={styles.headerBlockPhone}>
                <a className={styles.phone} href="tel:+79773716488">8 (977) 371-64-88</a>
                <p className={styles.none}>Пн-пт с 9:00 до 18:00</p>
            </div>
            <ScrollButton/>
        </div>
    )
}