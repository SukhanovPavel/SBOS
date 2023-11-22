import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "@/pages/api/productsData";

export default function Box1() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta={PRODUCT_DATA.box1.title}>
            <ProductCard
                title={PRODUCT_DATA.box1.title}
                image={PRODUCT_DATA.box1.image}
                price={PRODUCT_DATA.box1.price}
                description={PRODUCT_DATA.box1.description}
                title1={PRODUCT_DATA.box1.title1}
                list1={PRODUCT_DATA.box1.list1}
                title2={PRODUCT_DATA.box1.title2}
                list2={PRODUCT_DATA.box1.list2}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </Layout>
    )};