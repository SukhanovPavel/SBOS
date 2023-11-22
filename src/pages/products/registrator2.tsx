import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "@/pages/products/productsData";

export default function Registrator2() {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Layout meta={PRODUCT_DATA.registrator2.title}/>
            <ProductCard
                title={PRODUCT_DATA.registrator2.title}
                image={PRODUCT_DATA.registrator2.image}
                price={PRODUCT_DATA.registrator2.price}
                description={PRODUCT_DATA.registrator2.description}
                title1={PRODUCT_DATA.registrator2.title1}
                list1={PRODUCT_DATA.registrator2.list1}
                title2={PRODUCT_DATA.registrator2.title2}
                list2={PRODUCT_DATA.registrator2.list2}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </>
    )};