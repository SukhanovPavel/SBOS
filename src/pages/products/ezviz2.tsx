import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "@/pages/api/productsData";

export default function Ezviz2() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta={PRODUCT_DATA.ezviz2.title}>
            <ProductCard
                title={PRODUCT_DATA.ezviz2.title}
                image={PRODUCT_DATA.ezviz2.image}
                price={PRODUCT_DATA.ezviz2.price}
                description={PRODUCT_DATA.ezviz2.description}
                title1={PRODUCT_DATA.ezviz2.title1}
                list1={PRODUCT_DATA.ezviz2.list1}
                title2={PRODUCT_DATA.ezviz2.title2}
                list2={PRODUCT_DATA.ezviz2.list2}
                title3={PRODUCT_DATA.ezviz2.title3}
                list3={PRODUCT_DATA.ezviz2.list3}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </Layout>
    )};