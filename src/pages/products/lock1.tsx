import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "@/pages/api/productsData";

export default function Lock1() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta={PRODUCT_DATA.lock1.title}>
            <ProductCard
                title={PRODUCT_DATA.lock1.title}
                image={PRODUCT_DATA.lock1.image}
                price={PRODUCT_DATA.lock1.price}
                description={PRODUCT_DATA.lock1.description}
                title1={PRODUCT_DATA.lock1.title1}
                list1={PRODUCT_DATA.lock1.list1}
                title2={PRODUCT_DATA.lock1.title2}
                list2={PRODUCT_DATA.lock1.list2}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </Layout>
    )};