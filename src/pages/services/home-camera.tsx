import {useState} from "react";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";

export default function HomeCamera() {

    const [modal, openModal] = useState(false);

    return (
    <>
        <Head>
            <title>Видеонаблюдение в квартире. Установка видеонаблюдения в квартире.</title>
            <meta name="description" content="Установка видеонаблюдения в квартире. Видеонаблюдение через смартфоню Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
            <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="yandex-verification" content="5710205815328da3" />
            <link rel="icon" href="/favicon.webp" />
        </Head>
        <Header handleClick={() => openModal(true)}/>
        <Menu />
        <main className={styles.main}>
            <div className={styles._}>
                <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ В КВАРТИРЕ</h1>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <img
                            className={styles.img}
                            src="https://smarthomegadget.ru/wp-content/uploads/2022/07/f28c37d4be861064bb0a22c71fdcd5b4.jpg"
                            alt="camera at home"
                        />
                    </div>
                    <div className={styles.block}>
                        <h3>Цена от 4990 руб.</h3>
                        <div>Кол-во камер: 1</div>
                        <div>Срок установки: 1 день</div>
                        <button onClick={() => openModal(true)}>Заказать</button>
                        <p>
                            Выполняем установку видеонаблюдения в квартире. Вы сможете удалённо контролировать всё,
                            что происходит в доме. Устройства видео фиксации передают данные по интернету. Подключиться
                            к IP-камере можно через смартфон или планшет в любое время. Информация будет автоматически
                            собираться и сохраняться на жёстком диске. Мы поможем разобраться с системой, осуществим
                            монтаж и настройку оборудования. Видео съёмка способна работать в разном режиме:
                            постоянном, при срабатывании датчиков, с ночным переключением на ИК подсветку. Вызывайте
                            мастера на замер помещения, чтобы узнать стоимость монтажа вместе с аппаратурой.
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