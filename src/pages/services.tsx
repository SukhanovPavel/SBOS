import Link from "next/link";
import {useState} from "react";
import {TopServices} from "@/components/TopServices/TopServices";
import styles from "@/styles/Home.module.css";
import {Modal} from "@/components/Modal/Modal";
import Layout from "@/components/Layout/Layout";

const servicesMap = [
    {
        title: "Установка видеонаблюдения в квартире",
        img: "https://videonablydenie.ru/assets/gallery/1/3.jpg",
        link: "/services/home-camera",
        price: "4990"
    },
    {
        title: "Установка видеонаблюдения в офисе",
        img: "https://videonablydenie.ru/assets/gallery/2/9.jpg",
        link: "/services/office-camera",
        price: "13490"
    },
    {
        title: "Установка видеонаблюдения на улице",
        img: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F3%2F19.jpg",
        link: "/services/street-camera",
        price: "9990"
    },
    {
        title: "Установка видеонаблюдения в подъезде",
        img: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F4%2F22.jpg",
        link: "/services/entrance-camera",
        price: "27990"
    },
    {
        title: "Установка видеонаблюдения в магазине",
        img: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F5%2F25.jpg",
        link: "/services/shop-camera",
        price: "63990"
    },
    {
        title: "Установка видеонаблюдения на даче",
        img: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F8%2F61.jpg",
        link: "/services/dacha-camera",
        price: "18990"
    },
    {
        title: "Установка видеонаблюдения в кафе",
        img: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F6%2F53.jpg",
        link: "/services/cafe-camera",
        price: "44990"
    },
    {
        title: "Установка видеонаблюдения на складе",
        img: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F9%2F34.jpg",
        link: "/services/sclad-camera",
        price: "14990"
    },
    {
        title: "Установка видеонаблюдения в школе",
        img: "https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F12%2F46.jpg",
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

                <h2>
                    <Link href="/">Back to home</Link>
                </h2>

                {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
            </main>
        </Layout>
    )
}

export default Services;