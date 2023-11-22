import {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import {ProductCard} from "@/components/ProductCard/ProductCard";
import {Modal} from "@/components/Modal/Modal";
import Layout from "@/components/Layout/Layout";
import {PRODUCT_DATA} from "../api/productsData";

export default function Page() {

    const [modal, openModal] = useState(false);

    const router = useRouter();

    const indexOfProduct = router.query.product;

    const [data, setData] = useState({
        title: "",
        image: "img",
        price: "",
        description: [""],
        title1: "",
        list1: [""],
        title2: "",
        list2: [""],
        title3: "",
        list3: [""],
    });

    useEffect(() => {PRODUCT_DATA.forEach(item => item.name === indexOfProduct ?
        setData({
            title: item.title,
            image: item.image,
            price: item.price,
            description: item.description,
            title1: item.title1,
            list1: item.list1,
            title2: item.title2,
            list2: item.list2,
            title3: item.title3,
            list3: item.list3,
    }) : null)}, [])

    return (
        <>
            <p>Post: {router.query.product}</p>
            <Layout meta={data.title}>
                <ProductCard
                    title={data.title}
                    image={data.image}
                    price={data.price}
                    description={data.description}
                    title1={data.title1}
                    list1={data.list1}
                    title2={data.title2}
                    list2={data.list2}
                    title3={data.title3}
                    list3={data.list3}
                />
                {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
            </Layout>
        </>
    )
}