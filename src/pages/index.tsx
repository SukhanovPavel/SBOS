import {Sets} from "@/components/Sets/Sets";
import {TopServices} from "@/components/TopServices/TopServices";
import {WorkScheme} from "@/components/WorkScheme/WorkScheme";
import {AboutInstall} from "@/components/AboutInstall/AboutInstall";
import {Advantages} from "@/components/Advantages/Advantages";
import {Answers} from "@/components/Answers/Answers";
import {Contacts} from "@/components/Contacts/Contacts";
import {Modal} from "@/components/Modal/Modal";
import React, {useState} from "react";
import {Description} from "@/components/Description/Description";
import {Calc} from "@/components/Calc/Calc";
import Layout from "@/components/Layout/Layout";

import styles from '@/styles/Home.module.css';
import Head from "next/head";

const servicesMap = [
    {
        title: "Видеонаблюдение для офиса",
        image: "https://videonablydenie.ru/assets/img/sol/ofis.jpg",
        link: "/services/office-camera",
        description: "Разработаем оптимальную систему для видеонаблюдения с решением большого объёма задач.\n" +
            "Установим систему, которая поможет вести контроль за сотрудниками и повысить качество их работы."
    },
    {
        title: "Видеонаблюдение для квартиры",
        image: "https://videonablydenie.ru/assets/img/sol/kvartira.jpg",
        link: "/services/home-camera",
        description: "Соберём комплект для охраны вашего имущества. Грамотно подобранная система снизит риск кражи,\n" +
            "а в случае возникновения ЧС предоставит неопровержимые доказательства."
    },
    {
        title: "Видеонаблюдение для подъезда",
        image: "https://videonablydenie.ru/assets/img/sol/podjest.jpg",
        link: "/services/entrance-camera",
        description: "Установим современную систему для охраны. Обеспечим круглосуточный контроль за подъездом.\n" +
            "Множество вариантов систем видеонаблюдения."
    },
];

export default function Home() {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Head>
                <link rel="canonical"/>
            </Head>
            <Layout
                meta="Камеры видеонаблюдения. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре. Установка систем видеонаблюдения в Московской области">
                <Description handleClick={() => openModal(true)} href={"#calc"}/>
                <main className={styles.main}>

                    <Calc/>

                    <Sets handleClick={() => openModal(true)}/>

                    <TopServices titleH2="ПОПУЛЯРНЫЕ УСЛУГИ" servicesMap={servicesMap} allServicesButton/>

                    <WorkScheme/>

                    <AboutInstall handleClick={() => openModal(true)}/>

                    <Advantages/>

                    <Answers/>

                    <Contacts handleClick={() => openModal(true)}/>

                    {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}

                </main>
            </Layout>
        </>
    )
}
