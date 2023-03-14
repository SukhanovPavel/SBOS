import {Map, Placemark} from "@pbe/react-yandex-maps";

import styles from "./Contacts.module.css";

export const Contacts = () => (
    <div className={styles._}>
        <div className={styles.block}>
            <div>Контакты</div>
            <div>
                <div>Адрес</div>
                <div>Москва, МКАД 32 км, вл.4, ТЦ Шелковый путь</div>
            </div>
            <div>
                <div>Телефон</div>
                <div>8 (800) 000-00-00</div>
            </div>
            <div>
                <div>Режим работы</div>
                <div>Пн-пт: 9:00-19:00</div>
            </div>
            <div>
                <div>Email</div>
                <div>mail@sbos.ru</div>
            </div>
            <button>Обратный звонок</button>
        </div>
        <div className={styles.block}>
            <Map
                className={styles.map}
                defaultState={{ center: [55.575271, 39.529011], zoom: 15 }}
                width="30rem"
                height="40rem"
            >
                <Placemark defaultGeometry={[55.575271, 39.529011]} />
            </Map>
        </div>
    </div>
)