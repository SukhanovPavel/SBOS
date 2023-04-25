import {useState} from "react";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";

export const STAR = <svg className={styles.starIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7
    24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9
    4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2
    150.3 316.9 18z"/></svg>

export default function StreetSetS() {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Head>
                <title>Видеонаблюдение WI-FI комплект видеонаблюдения</title>
                <meta name="description" content="Видеонаблюдение WI-FI комплект видеонаблюдения. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/images/favicon.webp" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <Menu />
            <main className={styles.main}>
                <div className={styles._}>
                    <h1>HD-CVI КОМПЛЕКТ ВИДЕОНАБЛЮДЕНИЯ S ДЛЯ УЛИЦЫ</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <img
                                className={styles.img}
                                src="https://videonablydenie.ru/assets/img/komplekti/DS-H104G1.jpg"
                                alt="HD-CVI КОМПЛЕКТ ВИДЕОНАБЛЮДЕНИЯ S ДЛЯ УЛИЦЫ"
                            />
                        </div>
                        <div className={styles.block}>
                            <h3>Цена с установкой 17990 руб.</h3>
                            <div>Кол-во камер: 1</div>
                            <div>{STAR}{STAR}{STAR}{STAR}{STAR}</div>
                            <div>Срок установки: 1 день</div>
                            <button onClick={() => openModal(true)}>Заказать</button>
                            <h3>Преимущества:</h3>
                            <p>{DONE}  Большой архив видеозаписей 25-30 дней</p>
                            <p>{DONE}  Высокая надежность проводной системы</p>
                            <p>{DONE}  Отличное соотношение цены и качества</p>
                            <p>{DONE}  Без абонентской платы</p>
                            <h3>Недостатки:</h3>
                            <p>Необходима прокладка проводов</p>
                        </div>
                    </div>
                </div>
                <div className={styles.complect}>
                    <h3>Состав комплекта:</h3>
                    <p>{DONE}  Цветная камера высокого разрешения 720P (1280×720) - 1шт.</p>
                    <p>{DONE}  Цифровой видеорегистратор с возможностью просмотра через интернет - 1шт.</p>
                    <p>{DONE}  Жесткий диск для записи видеоархива на 1 месяц - 1шт.</p>
                    <p>{DONE}  Стабилизированный блок питания на 12В - 1шт.</p>
                    <p>{DONE}  Комбинированные кабели для видео систем.</p>
                    <p>{DONE}  Монтажный комплект (разъемы RJ-45, термоусадка, саморезы, дюбеля ...).</p>
                    <p>{DONE}  Монтажные работы.</p>
                </div>
            </main>

            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </>
    )
};