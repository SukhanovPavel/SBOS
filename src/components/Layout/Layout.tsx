import React, {useState} from 'react';
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Modal} from "@/components/Modal/Modal";
import Footer from "@/components/Footer/Footer";

import styles from "./Layout.module.css";

type Props = {
    meta: string;
    children: React.ReactNode
}

const Layout = ({meta, children}: Props) => {

    const [modal, openModal] = useState(false);

    return (
        <div className={styles._}>
            <Head>
                <title>Видеонаблюдение. Видеонаблюдение под ключ. Системы безопасности. СБОС</title>
                <meta name="description" content={meta} />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/favicon.png" type="image/png"/>
                <meta name="mailru-domain" content="IgHrPB4HT8Y7TDcy" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <div>
                <img src="https://mc.yandex.ru/watch/96388427" style={{position:"absolute", left:"-9999px"}} alt="" />
            </div>
            <Menu />
            {children}
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
            <Footer />
        </div>
    );
};

export default Layout;