import Link from "next/link";
import {useState} from "react";
import {TopServices} from "@/components/TopServices/TopServices";
import {Modal} from "@/components/Modal/Modal";
import Layout from "@/components/Layout/Layout";

import styles from "@/styles/Home.module.css";

const servicesMap = [
    {
        title: "Установка видеонаблюдения в квартире",
        image: "https://videonablydenie.ru/assets/gallery/1/3.jpg",
        link: "/services/home-camera",
        price: "4990"
    },
    {
        title: "Установка видеонаблюдения в офисе",
        image: "https://videonablydenie.ru/assets/gallery/2/9.jpg",
        link: "/services/office-camera",
        price: "13490"
    },
    {
        title: "Установка видеонаблюдения на улице",
        image: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F3%2F19.jpg",
        link: "/services/street-camera",
        price: "9990"
    },
    {
        title: "Установка видеонаблюдения в подъезде",
        image: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F4%2F22.jpg",
        link: "/services/entrance-camera",
        price: "27990"
    },
    {
        title: "Установка видеонаблюдения в магазине",
        image: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F5%2F25.jpg",
        link: "/services/shop-camera",
        price: "63990"
    },
    {
        title: "Установка видеонаблюдения на даче",
        image: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F8%2F61.jpg",
        link: "/services/dacha-camera",
        price: "18990"
    },
    {
        title: "Установка видеонаблюдения в кафе",
        image: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F6%2F53.jpg",
        link: "/services/cafe-camera",
        price: "44990"
    },
    {
        title: "Установка видеонаблюдения на складе",
        image: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F9%2F34.jpg",
        link: "/services/sclad-camera",
        price: "14990"
    },
    {
        title: "Установка видеонаблюдения в школе",
        image: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F12%2F46.jpg",
        link: "/services/school-camera",
        price: "54990"
    },
]

const Services = () => {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta="Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" >
            <main className={styles.main}>

                <TopServices
                    titleH1="НАШИ УСЛУГИ ПО УСТАНОВКЕ ВИДЕОНАБЛЮДЕНИЯ"
                    servicesMap={servicesMap}
                    allServicesButton={false}
                />

                {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
            </main>
        </Layout>
    )
}

export default Services;