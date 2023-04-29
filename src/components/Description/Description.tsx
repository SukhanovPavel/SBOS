import Link from "next/link";

import styles from "./Description.module.css";

type Props = {
    handleClick: () => void;
    href: string;
}
export const Description = ({handleClick, href}: Props) => (
    <div className={styles._}>
        <div className={styles.descriptionBlock}>
            <h1>
                УСТАНОВКА СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ ПОД КЛЮЧ
            </h1>
            <div className={styles.par}>
                <div className={styles.twoP}>
                    <p><b>Разработаем план размещения камер</b> и оборудования бесплатно.
                        Вы будете понимать, какое изображение получите</p>
                    <p><b>Ваше участие минимально</b>, мы сами всё установим,
                        настроим, научим пользоваться, даже уберемся за собой</p>
                </div>
                <div className={styles.twoP}>
                    <p><b>Подготовим КП с разными бюджетами</b> в течение суток после замера.
                        Выбирайте подходящий по цене и функционалу вариант</p>
                    <p><b>Выезжаем в день заказа</b> или в течение 24 часов</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <button onClick={handleClick}>Вызвать замерщика</button>
                <button><a href={href}>Рассчитать стоимость</a></button>
            </div>
        </div>
        <div className={styles.descriptionBlock}>
            <img
                alt="description"
                className={styles.descriptionImage}
                src="https://videonablydenie.ru/assets/img/videonabludenie.jpg"
            />
        </div>
    </div>
)