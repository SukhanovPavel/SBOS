import {useState} from "react";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";

export default function ShoppCamera() {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Head>
                <title>Видеонаблюдение в магазие. Установка камер видеонаблюдения в магазин</title>
                <meta name="description" content="Видеонаблюдение в магазин. Установка камер видеонаблюдения в магазин. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/favicon.webp" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <Menu />
            <main className={styles.main}>
                <div className={styles._}>
                    <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ В МАГАЗИНЕ</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <img
                                className={styles.img}
                                src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F2%2F12.jpg"
                                alt="camera at school"
                            />
                        </div>
                        <div className={styles.block}>
                            <h3>Цена от 63990 руб.</h3>
                            <div>Кол-во камер: 16</div>
                            <div>Срок установки: 1-3 дня</div>
                            <button onClick={() => openModal(true)}>Заказать</button>
                            <p>
                                Мы организуем продажу готовых решений. Здесь можно выбрать подходящее видеонаблюдение
                                для магазина по доступной цене. Позвоните, менеджер проконсультирует вас по вопросам и
                                подскажет какой вариант, подойдёт именно вам. После бесплатного замера в Шатуре, вы
                                сможете узнать цену и заказать систему. Монтажная бригада выполнит установку и
                                настройку, предоставит гарантию на работу и оборудование.
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