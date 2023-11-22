import Link from "next/link";
import {useState} from "react";
import {TopServices} from "@/components/TopServices/TopServices";
import styles from "@/styles/Home.module.css";
import {Modal} from "@/components/Modal/Modal";
import Layout from "@/components/Layout/Layout";

const servicesMap = [
    {
        title: "Видеодомофон аналоговый FX-VD7L-KIT",
        img: "https://fox-cctv.ru/upload/resize_cache/iblock/b2d/440_370_0/FX_VD7L_EL_7W_900.png",
        link: "/products/product1",
        price: "9000"
    },
    {
        title: "IP Видеодомофон FX-IVD70WP-KIT",
        img: "https://fox-cctv.ru/upload/resize_cache/iblock/00a/440_370_0/PIC1-_2_.png",
        link: "/products/domofon2",
        price: "21000"
    },
    {
        title: "КАМЕРА-IP TIANDY TC-C32XN 2.8MM",
        img: "https://tiandy-russia.ru/image/cache/catalog/img_1921%281%29-437x423.png",
        link: "/products/camera1",
        price: "3400"
    },
    {
        title: "КАМЕРА-IP TIANDY TC-C34XN I3/E/Y/2.8MM/V5.0",
        img: "https://tiandy-russia.ru/image/cache/catalog/img_1921%281%29-437x423.png",
        link: "/products/camera2",
        price: "4900"
    },
    {
        title: "КАМЕРА-IP TIANDY TC-C32QN 2.8MM",
        img: "https://tiandy-russia.ru/image/cache/catalog/img_1924%281%29-437x423.png",
        link: "/products/camera3",
        price: "3400"
    },
    {
        title: "HD-CVI комплект видеонаблюдения L для улицы",
        img: "https://tiandy-russia.ru/image/cache/catalog/img_1924%281%29-437x423.png",
        link: "/products/camera4",
        price: "4900"
    },
    {
        title: "Электромеханический замок FX-2369",
        img: "https://fox-cctv.ru/upload/resize_cache/iblock/178/440_370_0/FX_2369S_900X576.png",
        link: "/products/lock1",
        price: "2250"
    },
    {
        title: "IP-Камера видеонаблюдения IP EZVIZ C1C 720P",
        img: "https://mfs.ezvizlife.com/2a3aac5128252862aecf4b9fee963caa.png?ver=77297",
        link: "/products/ezviz1",
        price: "1950"
    },
    {
        title: "IP-Камера видеонаблюдения EZVIZ C1C 1080P",
        img: "https://mfs.ezvizlife.com/2a3aac5128252862aecf4b9fee963caa.png?ver=77297",
        link: "/products/ezviz2",
        price: "2850"
    },
    {
        title: "IP-Камера видеонаблюдения EZVIZ C1T 1080P",
            img: "https://mfs.ezvizlife.com/826eb4c9ba8fd1ad32c014f2f1b6a15c.png?ver=77297",
        link: "/products/ezviz3",
        price: "3150"
    },
    {
        title: "ViGUARD Prime lite беспроводная охранная GSM сигнализация",
            img: "https://viguard.pro/upload/resize_cache/iblock/272/500_500_1/2723dcf078fab956cc33f6fa605d4a0a.jpg",
        link: "/products/viguard",
        price: "11000"
    },
    {
        title: "IP Видеорегистратор NVR 4-х ПOTOKOBbIЙ FOX FX-iNVR4/1",
        img: "https://fox-cctv.ru/upload/resize_cache/iblock/d4e/440_370_0/FX_4GTA_FX_4QTA_FX_8GTA_FX_8QTA.png",
        link: "/products/registrator1",
        price: "5600"
    },
    {
        title: "IP Видеорегистратор NVR 8-ми ПOTOKOBbIЙ FOX FX-iNVR8/1",
        img: "https://fox-cctv.ru/upload/resize_cache/iblock/d4e/440_370_0/FX_4GTA_FX_4QTA_FX_8GTA_FX_8QTA.png",
        link: "/products/registrator2",
        price: "7400"
    },
    {
        title: "Монтажная универсальная коробка FX-BOX1 STEEL",
        img: "https://fox-cctv.ru/upload/resize_cache/iblock/a5d/440_370_0/FX_BOX2-STEEL.png",
        link: "/products/box1",
        price: "1350"
    },
]

const Products = () => {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta="Камеры видеонаблюдения. Домофоны. Видеонаблюдение готовые наборы. Комплекты камер видеонаблюдения. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" >
            <main className={styles.main}>

                <TopServices
                    titleH1="Наша продукция"
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

export default Products;