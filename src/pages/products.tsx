import Link from "next/link";
import {useState} from "react";
import {TopServices} from "@/components/TopServices/TopServices";
import {Modal} from "@/components/Modal/Modal";
import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "@/pages/api/productsData";

import styles from "@/styles/Home.module.css";

const Products = () => {

    const [modal, openModal] = useState(false);

    const productsData = PRODUCT_DATA.map(item => (
        {
            title: item.title,
            image: item.image,
            price: item.price,
            link: item.link
        })
    );
    console.log(productsData)

    return (
        <Layout meta="Камеры видеонаблюдения. Домофоны. Видеонаблюдение готовые наборы. Комплекты камер видеонаблюдения. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" >
            <main className={styles.main}>

                <TopServices
                    titleH1="Наша продукция"
                    servicesMap={productsData}
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