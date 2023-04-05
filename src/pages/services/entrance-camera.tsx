import {useState} from "react";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";

export default function EntranceCamera() {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Head>
                <title>Видеонаблюдение в подъезд. Установка камер видеонаблюдения в подъезд</title>
                <meta name="description" content="Видеонаблюдение в подъезд. Установка камер видеонаблюдения в офис. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/favicon.webp" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <Menu />
            <main className={styles.main}>
                <div className={styles._}>
                    <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ В ПОДЪЕЗДЕ</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <img
                                className={styles.img}
                                src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F4%2F22.jpg"
                                alt="camera at entrance"
                            />
                        </div>
                        <div className={styles.block}>
                            <h3>Цена от 27990 руб.</h3>
                            <div>Кол-во камер: 5</div>
                            <div>Срок установки: 1-2 дня</div>
                            <button onClick={() => openModal(true)}>Заказать</button>
                            <p>
                                Наша специализация - установка видеонаблюдения для подъезда. Мы проконсультируем по
                                продукции и поможем выбрать подходящую систему, которая будет отвечать потребностям и
                                выполнять поставленные задачи. Установим систему в кратчайший срок, научим ей
                                пользоваться и будем проводить своевременное сервисное обслуживание. Предлагаем вам
                                лучшие условия. Узнайте цену прямо сейчас! Позвоните и вызовите мастера на замер в Шатуре.
                            </p>
                            <div>{DONE}  Бесплатный выезд специалиста</div>
                            <div>{DONE}  Гарантия 5 лет</div>
                            <div>{DONE}  Сертифицированное оборудование</div>
                        </div>
                    </div>
                </div>
            </main>

            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </>
    )};