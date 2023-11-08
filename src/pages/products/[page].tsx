import {useState} from "react";
import Layout from "@/components/Layout/Layout";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import {Modal} from "@/components/Modal/Modal";
import {useRouter} from "next/router";
import {PRODUCT_DATA} from "@/pages/products/productsData";


export default function Page() {

    const [modal, openModal] = useState(false);

    const router = useRouter();

    let path = router.query.page;

    return (
        <>
            <Layout meta={PRODUCT_DATA[path].title}/>
            <ProductCard
                title={PRODUCT_DATA[path].title}
                image={PRODUCT_DATA[path].image}
                price={PRODUCT_DATA[path].price}
                description={PRODUCT_DATA[path].description}
                title1={PRODUCT_DATA[path].title1}
                list1={PRODUCT_DATA[path].list1}
                title2={PRODUCT_DATA[path].title2}
                list2={PRODUCT_DATA[path].list2}
                title3={PRODUCT_DATA[path].title3}
                list3={PRODUCT_DATA[path].list3}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </>
    )};