import styles from "@/components/Contacts/Contacts.module.css";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {Modal} from "@/components/Modal/Modal";
import {useState} from "react";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";


const Contacts = () => {

    const [modal, openModal] = useState(false);

    return (
        <YMaps>
            <Head>
                <title>СБОС. Видеонаблюдение</title>
                <meta name="description" content="Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/favicon.webp" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <Menu />
            <main className={styles.main}>
                <div className={styles._}>
                    <div className={styles.block}>
                        <h1>Контакты</h1>
                        <div className={styles.contact}>
                            <p>Адрес:</p>
                            <p>Шатура, проспект Ильича д.40</p>
                        </div>
                        <div className={styles.contact}>
                            <p>Телефон:</p>
                            <a href="tel:+79773716488">8 (977) 371-64-88</a>
                        </div>
                        <div className={styles.contact}>
                            <p>Режим работы:</p>
                            <div>Пн-пт: 9:00-18:00</div>
                        </div>
                        <div className={styles.contact}>
                            <p>Email:</p>
                            <a href="mailto:mail@sbos.ru">mail@sbos.ru</a>
                        </div>
                        <button onClick={() => openModal(true)}>Обратный звонок</button>
                    </div>
                    <div className={styles.block}>
                        <Map
                            className={styles.map}
                            defaultState={{center: [55.575271, 39.529011], zoom: 15}}
                            width="100%"
                            height="75%"
                        >
                            <Placemark defaultGeometry={[55.575271, 39.529011]}/>
                        </Map>
                    </div>
                </div>
            </main>
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </YMaps>
    );
}

export default Contacts;