import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "@/pages/api/productsData";
import React, {useState} from "react";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import {Modal} from "@/components/Modal/Modal";

export default function Registrator1() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta={PRODUCT_DATA.registrator1.title}>
            <ProductCard
                title={PRODUCT_DATA.registrator1.title}
                image={PRODUCT_DATA.registrator1.image}
                price={PRODUCT_DATA.registrator1.price}
                description={PRODUCT_DATA.registrator1.description}
                title1={PRODUCT_DATA.registrator1.title1}
                list1={PRODUCT_DATA.registrator1.list1}
                title2={PRODUCT_DATA.registrator1.title2}
                list2={PRODUCT_DATA.registrator1.list2}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </Layout>
    )};