import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";
import Layout from "@/components/Layout/Layout";

export default function ScladCamera() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta="Видеонаблюдение на склад. Установка камер видеонаблюдения на склад. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре">
            <main className={styles.main}>
                <div className={styles._}>
                    <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ НА СКЛАДЕ</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <img
                                className={styles.img}
                                src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F9%2F34.jpg"
                                alt="camera at sclad"
                            />
                        </div>
                        <div className={styles.block}>
                            <h3>Цена от 14990 руб.</h3>
                            <div>Кол-во камер: 4</div>
                            <div>Срок установки: 1 день</div>
                            <button onClick={() => openModal(true)}>Заказать</button>
                            <p>
                                Наша компания способна выполнить все поставленные задачи. Мы поможем выбрать подходящий
                                комплект готового решения. Сделаем качественную установку видеонаблюдения для склада,
                                которая прослужит долгие годы. Установка на складах выполняется в кратчайшие сроки по
                                доступной цене. Предлагаем вам не откладывать обращение. Позвоните прямо сейчас, чтобы
                                получить заманчивое предложение. Выезд мастера на замер в Шатуре осуществляется
                                абсолютно бесплатно.
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