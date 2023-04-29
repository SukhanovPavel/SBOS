import styles from "@/components/Contacts/Contacts.module.css";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {Modal} from "@/components/Modal/Modal";
import {useState} from "react";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Contacts as Cont} from "@/components/Contacts/Contacts";


const Contacts = () => {

    const [modal, openModal] = useState(false);

    return (
        <YMaps>
            <Head>
                <title>СБОС. Видеонаблюдение</title>
                <meta name="description" content="Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <Menu />
            <Cont handleClick={() => openModal(true)} />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </YMaps>
    );
}

export default Contacts;