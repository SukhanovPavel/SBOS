import React, {useState} from 'react';
import Layout from "@/components/Layout/Layout";
import styles from "@/styles/Home.module.css";
import {TopServices} from "@/components/TopServices/TopServices";
import Link from "next/link";
import {Modal} from "@/components/Modal/Modal";
import {OurWorksList} from "@/components/OurWorksList/OurWorksList";

const ourWorksList = [
    {
        title: "",
        img: "/work1.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work4.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work5.jpg",
        link: "/products/product1",
        price: ""
    },
    // {
    //     title: "",
    //     img: "/work6.jpg",
    //     link: "/products/product1",
    //     price: ""
    // },
    {
        title: "",
        img: "/work7.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work8.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work9.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work10.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work11.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work12.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work13.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work14.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work15.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work16.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work17.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work18.jpg",
        link: "/products/product1",
        price: ""
    },
    {
        title: "",
        img: "/work19.jpg",
        link: "/products/product1",
        price: ""
    },
]

const Ourworks = () => {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta="Камеры видеонаблюдения. Домофоны. Видеонаблюдение готовые наборы. Наши работы" >
            <main className={styles.main}>

                <OurWorksList
                    title="Наши работы"
                    ourWorksImages={ourWorksList}
                />

                <h2>
                    <Link href="/">Back to home</Link>
                </h2>

                {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
            </main>
        </Layout>
    );
};

export default Ourworks;