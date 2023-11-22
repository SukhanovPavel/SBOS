import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "@/pages/api/productsData";

export default function Viguard() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta={PRODUCT_DATA.viguard.title}>
            <ProductCard
                title={PRODUCT_DATA.viguard.title}
                image={PRODUCT_DATA.viguard.image}
                price={PRODUCT_DATA.viguard.price}
                description={PRODUCT_DATA.viguard.description}
                title1={PRODUCT_DATA.viguard.title1}
                list1={PRODUCT_DATA.viguard.list1}
                title2={PRODUCT_DATA.viguard.title2}
                list2={PRODUCT_DATA.viguard.list2}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </Layout>
    )};