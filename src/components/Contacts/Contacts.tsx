import {Map, Placemark} from "@pbe/react-yandex-maps";

import styles from "./Contacts.module.css";

type Props = {
    handleClick: () => void;
}

export const Contacts = ({handleClick}: Props) => (
    <div className={styles._}>
        <div className={styles.block}>
            <div>Контакты</div>
            <div>
                <div>Адрес</div>
                <div>Шатура, проспект Ильича д.40</div>
            </div>
            <div>
                <div>Телефон</div>
                <div>8 (977) 371-64-88</div>
            </div>
            <div>
                <div>Режим работы</div>
                <div>Пн-пт: 9:00-18:00</div>
            </div>
            <div>
                <div>Email</div>
                <div>mail@sbos.ru</div>
            </div>
            <button onClick={handleClick}>Обратный звонок</button>
        </div>
        <div className={styles.block}>
            <Map
                className={styles.map}
                defaultState={{ center: [55.575271, 39.529011], zoom: 15 }}
                width="100%"
                height="90%"
            >
                <Placemark defaultGeometry={[55.575271, 39.529011]} />
            </Map>
        </div>
    </div>
)