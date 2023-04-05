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
                УСТАНОВКА СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ В МОСКВЕ ПОД КЛЮЧ
            </h1>
            <div className={styles.par}>
                <div>
                    ➤ Установка видеонаблюдения любой сложности в Москве и области с гарантией качества. В наш
                    комплекс работ входит: составление проекта, оптимальный подбор оборудования, монтаж камер и
                    видеорегистратора. Настройка доступа к просмотру видео в режиме реального времени со смартфона.
                    Принимаем заказы на частные и коммерческие объекты: квартиры, офисы, предприятия, склады,
                    парковки.
                </div>
                <div>
                    ☛ На нашем складе всегда в наличии готовые комплекты: IP, CCTV, AHD оборудования. Для расчета
                    точной стоимости Вашего объекта Вы можете вызвать замерщика или рассчитать примерную цену на
                    сайте.
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