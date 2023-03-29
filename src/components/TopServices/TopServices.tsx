

import styles from "./TopServices.module.css";

export const TopServices = () => (
    <div className={styles._}>
        <h2>ПОПУЛЯРНЫЕ УСЛУГИ</h2>
        <div className={styles.services}>
            <div className={styles.service}>
                <h3>Видеонаблюдение для офиса</h3>
                <div className={styles.desc}>
                    <img className={styles.img} src="https://videonablydenie.ru/assets/img/sol/ofis.jpg"/>
                    <div>
                        Разработаем оптимальную систему для видеонаблюдения с решением большого объёма задач.
                        Установим систему, которая поможет вести контроль за сотрудниками и повысить качество их работы.
                    </div>
                </div>
                <button>Подробнее</button>
            </div>
            <div className={styles.service}>
                <h3>Видеонаблюдение для квартиры</h3>
                <div className={styles.desc}>
                    <img className={styles.img} src="https://videonablydenie.ru/assets/img/sol/kvartira.jpg"/>
                    <div>
                        Соберём комплект для охраны вашего имущества. Грамотно подобранная система снизит риск кражи,
                        а в случае возникновения ЧС предоставит неопровержимые доказательства.
                    </div>
                </div>
                <button>Подробнее</button>
            </div>
            <div className={styles.service}>
                <h3>Видеонаблюдение для подъезда</h3>
                <div className={styles.desc}>
                    <img className={styles.img} src="https://videonablydenie.ru/assets/img/sol/podjest.jpg"/>
                    <div>
                        Установим современную систему для охраны. Обеспечим круглосуточный контроль за подъездом.
                        Множество вариантов систем видеонаблюдения.
                    </div>
                </div>
                <button>Подробнее</button>
            </div>
        </div>
        <div>
            <button className={styles.button}>Смотреть все услуги</button>
        </div>
    </div>
)