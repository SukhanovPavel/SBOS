import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";
import Layout from "@/components/Layout/Layout";

export default function SchoolCamera() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta="Видеонаблюдение в школе. Установка камер видеонаблюдения в школе. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре">
            <main className={styles.main}>
                <div className={styles._}>
                    <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ В ШКОЛЕ</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <img
                                className={styles.img}
                                src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F12%2F45.jpg"
                                alt="camera at school"
                            />
                        </div>
                        <div className={styles.block}>
                            <h3>Цена от 54990 руб.</h3>
                            <div>Кол-во камер: 15</div>
                            <div>Срок установки: 1-3 дня</div>
                            <button onClick={() => openModal(true)}>Заказать</button>
                            <p>
                                Наша специализация - монтаж видеонаблюдения для школы. Обращайтесь, поможем выбрать
                                нужную конфигурацию системы высокого качества по привлекательной цене. Мы сделаем работу
                                быстро и предоставим гарантию на монтаж и оборудование. Рекомендуем вызвать замерщика
                                сейчас, до повышения цен. Мастер приедет на объект, сделает расчёт и подробно
                                расскажет о выбранном решении. Наши системы работают годами.
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