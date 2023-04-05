import {useState} from "react";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";

export default function CafeCamera() {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Head>
                <title>Видеонаблюдение в кафе. Установка камер видеонаблюдения в кафе</title>
                <meta name="description" content="Видеонаблюдение в кафе. Установка камер видеонаблюдения в кафе. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/favicon.webp" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <Menu />
            <main className={styles.main}>
                <div className={styles._}>
                    <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ В КАФЕ</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <img
                                className={styles.img}
                                src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F6%2F53.jpg"
                                alt="camera at cafe"
                            />
                        </div>
                        <div className={styles.block}>
                            <h3>Цена от 44990 руб.</h3>
                            <div>Кол-во камер: 12</div>
                            <div>Срок установки: 1-3 дня</div>
                            <button onClick={() => openModal(true)}>Заказать</button>
                            <p>
                                Мы давно работаем на рынке и знаем как угодить клиенту. Позвоните, подберём для вас
                                идеальную систему видеонаблюдения для кафе, которая будет работать в постоянном режиме.
                                Установка в кафе займёт немного времени, сама система будет удобна в использовании.
                                Предлагаем прямо сейчас выбрать и заказать готовое решение для кафе. Вызовите мастера
                                на бесплатный замер объекта в Шатуре. Узнайте цену прямо сейчас!
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