import {useState} from "react";

import styles from "./Answers.module.css";

export const ARROW = <div className={styles.svgContainer}>
    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2
    10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7
    0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>
</div>;
export const ARROW_DOWN = <div className={styles.svgContainer}>
    <svg className={styles.svg} style={{transform: "rotate(90deg)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2
    10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7
    0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>
</div>;

export const Answers = () => {

    const [answer, getAnswer] = useState({
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false
    })

    return (
        <div className={styles._}>
            <h2>ОТВЕТЫ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
            <div className={styles.listItem}>
                <h4
                    className={styles.title}
                    onClick={() => getAnswer({
                        ...answer, one: !answer.one
                    })}>
                    {answer.one ? ARROW_DOWN : ARROW}Что такое установка видеонаблюдения под ключ?
                </h4>
                {answer.one ?
                    <p className={styles.text}>
                        Это комплексная работа, включающая в себя: консультацию по объекту, выявление потребностей, монтаж и
                        всё оборудование с комплектующими. Вы получаете полноценную услугу с настройкой и с обучением
                        эксплуатации. Вы получите нужную систему с необходимым функционалом и простым управлением.
                    </p> : null}
            </div>
            <div className={styles.listItem}>
                <h4
                    className={styles.title}
                    onClick={() => getAnswer({
                        ...answer, two: !answer.two
                    })}
                >
                    {answer.two ? ARROW_DOWN : ARROW}Как различаются комплекты видеонаблюдения для квартиры, офиса и т.д?
                </h4>
                {answer.two ?
                    <p className={styles.text}>
                        Основное отличие в количестве камер и объёме работы. Учитывая предназначение помещения и радиус
                        охвата, подбирается комплектация. На сайте представлены стандартные примеры системы с ценой.
                    </p> : null}
            </div>
            <div className={styles.listItem}>
                <h4
                    className={styles.title}
                    onClick={() => getAnswer({
                        ...answer, three: !answer.three
                    })}>
                    {answer.three ? ARROW_DOWN : ARROW}Чем отличаются системы видеонаблюдения на 4 камеры: CCTV, AHD, IP?
                </h4>
                {answer.three ?
                    <p className={styles.text}>
                        Качеством изображения и функционалом. Бывает, что необходима обычная запись в стандартном режиме,
                        тогда мы предлагаем CCTV. Если необходима детализированная запись, то советуем AHD. Самым продвинутым
                        вариантом являются IP камеры.
                    </p> : null}
            </div>
            <div className={styles.listItem}>
                <h4
                    className={styles.title}
                    onClick={() => getAnswer({
                        ...answer, four: !answer.four
                    })}>
                    {answer.four ? ARROW_DOWN : ARROW}Смогу ли я просматривать видео с телефона?
                </h4>
                {answer.four ?
                    <p className={styles.text}>
                        Подключиться к оборудованию можно с любого гаджета и компьютера. Наши системы подходят ко всем
                        операционным системам. Подключив свой телефон, вы сможете просматривать запись в любое удобное время.
                    </p> : null}
            </div>
            <div className={styles.listItem}>
                <h4
                    className={styles.title}
                    onClick={() => getAnswer({
                        ...answer, five: !answer.five
                    })}>
                    {answer.five ? ARROW_DOWN : ARROW}Какая у вас гарантия на системы видеонаблюдения?
                </h4>
                {answer.five ?
                    <p className={styles.text}>
                        Мы предоставляем гарантию на установку и оборудование. Выполним ремонт или замену, восстановим
                        сбившиеся настройки на протяжении всего эксплуатационного периода. У каждой камеры свой срок гарантии.
                    </p> : null}
            </div>
            <div className={styles.listItem}>
                <h4
                    className={styles.title}
                    onClick={() => getAnswer({
                        ...answer, six: !answer.six
                    })}>
                    {answer.six ? ARROW_DOWN : ARROW}Можно ли использовать видеонаблюдение через интернет?
                </h4>
                {answer.six ?
                    <p className={styles.text}>
                        Да, у нас есть системы, поддерживающие WiFi соединение. Вы сможете следить за происходящим на своей
                        территории, находясь в любой точке земного шара посредством подключения через интернет.
                    </p> : null}
            </div>
        </div>
    )
}