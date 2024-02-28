import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";
import Layout from "@/components/Layout/Layout";

export default function DachaCamera() {

    const [modal, openModal] = useState(false);

    return (
    <Layout meta="Видеонаблюдение на дачу. Установка камер видеонаблюдения на дачу. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре">
        <main className={styles.main}>
            <div className={styles._}>
                <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ НА ДАЧЕ</h1>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <img
                            className={styles.img}
                            src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F2%2F12.jpg"
                            alt="camera at office"
                        />
                    </div>
                    <div className={styles.block}>
                        <h3>Цена от 18990 руб.</h3>
                        <div>Срок установки: 1-3 дня</div>
                        <button onClick={() => openModal(true)}>Заказать</button>
                        <p>
                            Предлагаем вам установку видеонаблюдения на даче. Поможем выбрать нужную комплектацию и
                            посоветуем оптимальное количество камер. Учтём ваши требования, касающиеся угла обзора,
                            качества съёмки, дальности действия ИК-подсветки. Наши системы работают надёжно, уличные
                            камеры выдерживают перепады температуры и влажности. Настроим любой режим видео фиксации:
                            постоянный, при срабатывании датчика, ночной. Обеспечим техническое обслуживание. Чтобы
                            узнать стоимость монтажа с оборудованием, вызывайте мастера на замер.
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