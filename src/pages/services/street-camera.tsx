import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";
import Layout from "@/components/Layout/Layout";

export default function StreetCamera() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta="Видеонаблюдения для улицы. Камера на улицу. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре">
            <main className={styles.main}>
                <div className={styles._}>
                    <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ НА УЛИЦЕ</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <img
                                className={styles.img}
                                src="https://hddfile.com/assets/galleries/54955/oktjabrskaja8a.jpg"
                                alt="camera at street"
                            />
                        </div>
                        <div className={styles.block}>
                            <h3>Цена от 9990 руб.</h3>
                            <div>Срок установки: 1 день</div>
                            <button onClick={() => openModal(true)}>Заказать</button>
                            <p>
                                Мы занимаемся установкой готовых систем видеонаблюдения для улицы. Позвоните, поможем
                                подобрать решение, отвечающее потребностям. Мы установим комплектацию, способную
                                выполнить все поставленные задачи. Советуем не откладывать обращение. Предлагаем вам
                                установку видеорегистрации по конкурентной цене в Москве. Сделаем работу качественно,
                                поможем разобраться в управлении и предоставим гарантию на работу и оборудование.
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