import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";
import Layout from "@/components/Layout/Layout";

export default function ShoppCamera() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta="Видеонаблюдение в магазин. Установка камер видеонаблюдения в магазин. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре">
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
        </Layout>
    )};