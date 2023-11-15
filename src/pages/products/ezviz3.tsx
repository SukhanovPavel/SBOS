import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "@/pages/products/productsData";

export default function Ezviz3() {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Layout meta={PRODUCT_DATA.ezviz3.title}/>
            <ProductCard
                title={PRODUCT_DATA.ezviz3.title}
                image={PRODUCT_DATA.ezviz3.image}
                price={PRODUCT_DATA.ezviz3.price}
                description={PRODUCT_DATA.ezviz3.description}
                title1={PRODUCT_DATA.ezviz3.title1}
                list1={PRODUCT_DATA.ezviz3.list1}
                title2={PRODUCT_DATA.ezviz3.title2}
                list2={PRODUCT_DATA.ezviz3.list2}
                title3={PRODUCT_DATA.ezviz3.title3}
                list3={PRODUCT_DATA.ezviz3.list3}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </>
    )};