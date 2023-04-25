import Link from "next/link";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import Head from "next/head";
import {useState} from "react";
import {TopServices} from "@/components/TopServices/TopServices";
import styles from "@/styles/Home.module.css";
import {Modal} from "@/components/Modal/Modal";

const servicesMap = [
    {
        title: "Wi-fi комплект видеонаблюдения S",
        img: "https://videonablydenie.ru/assets/img/komplekti/DH-IPC1-min.jpg",
        link: "/sets/wifi-set-s",
        price: "14490"
    },
    {
        title: "Wi-fi комплект видеонаблюдения M",
        img: "https://videonablydenie.ru/assets/img/komplekti/DH-IPC2-min.jpg",
        link: "/sets/wifi-set-m",
        price: "28090"
    },
    {
        title: "Wi-fi комплект видеонаблюдения L",
        img: "https://videonablydenie.ru/assets/img/komplekti/DH-IPC3-min.jpg",
        link: "/sets/wifi-set-l",
        price: "41790"
    },
    {
        title: "HD-CVI комплект видеонаблюдения S для улицы",
        img: "https://videonablydenie.ru/assets/img/komplekti/DS-H104G1.jpg",
        link: "/sets/street-set-s",
        price: "17990"
    },
    {
        title: "HD-CVI комплект видеонаблюдения M для улицы",
        img: "https://videonablydenie.ru/assets/img/komplekti/DS-H104G2.jpg",
        link: "/sets/street-set-m",
        price: "23690"
    },
    {
        title: "HD-CVI комплект видеонаблюдения L для улицы",
        img: "https://videonablydenie.ru/assets/img/komplekti/DS-H104G3.jpg",
        link: "/sets/street-set-l",
        price: "30500"
    },
]

const Sets = () => {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Head>
                <title>Видеонаблюдение готовые наборы. Комплекты камер видеонаблюдения</title>
                <meta name="description" content="Видеонаблюдение готовые наборы. Комплекты камер видеонаблюдения. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <Menu />
            <main className={styles.main}>

                <TopServices
                    titleH1="ГОТОВЫЕ КОМПЛЕКТЫ ВИДЕОНАБЛЮДЕНИЯ В МОСКВЕ И ОБЛАСТИ"
                    servicesMap={servicesMap}
                    allServicesButton={false}
                />

                <h2>
                    <Link href="/">Back to home</Link>
                </h2>

                {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
            </main>
        </>
    )
}

export default Sets;