import styles from "./Calc.module.css";
import {useState} from "react";
import {Form} from "@/components/Form/Form";


export const Calc = () => {

    const [number, setNumber] = useState(1);
    const [changed, setChange] = useState({
        bad: true,
        gud: false
    });

    return (
        <div id="calc" className={styles.calc}>
            <h2>КАЛЬКУЛЯТОР СТОИМОСТИ МОНТАЖА ВИДЕОНАБЛЮДЕНИЯ</h2>
            <div className={styles.calcFlex}>
                <div className={styles.calcBlock}>
                    <div className={styles.calcImgContain}>
                        {changed.gud ?
                            <img
                                alt="img"
                                className={styles.calcImg}
                                src="https://videonablydenie.ru/assets/img/calc/calc2-min.jpg"
                            /> : <img
                                alt="img"
                                className={styles.calcImg}
                                src="https://videonablydenie.ru/assets/img/calc/calc3-min.jpg"
                            />}
                    </div>
                    <h3>В стоимость входит:</h3>
                    <ul className={styles.calcList}>
                        <li>Проектирование проекта</li>
                        <li>Профессиональное оборудование и расходники</li>
                        <li>Установка и настройка системы видеонаблюдения</li>
                        <li>Доступ к любой камере в онлайн режиме из любой точки мира</li>
                        <li>Постоянная запись или запись при движении</li>
                        <li>Хорошее качество записи в тёмное время суток</li>
                        <li>Консультация и обучение по эксплуатации системы</li>
                        <li>Выезд оценщика в Москве осуществляется БЕСПЛАТНО!</li>
                    </ul>
                </div>
                <div className={styles.calcBlock}>
                    <div>
                        <h3>1. Укажите количество камер</h3>
                        <div>
                            <button
                                className={styles.calcButton}
                                onClick={number > 0 ? () => setNumber(number-1) : () => setNumber(0)}
                            >
                                -
                            </button>
                            <input
                                className={styles.inputNum}
                                value={number}
                                readOnly
                            />
                            <button
                                className={styles.calcButton}
                                onClick={() => setNumber(number+1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className={styles.calcColumn}>
                        <h3>2. Выберите разрешение камер</h3>
                        <div className={styles.flex}>
                            <div className={styles.flex}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    checked={changed.bad}
                                    onChange={() => setChange({
                                        bad: true,
                                        gud: false
                                    })}
                                />
                                Хорошее (IP)
                            </div>
                            <div className={styles.flex}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    checked={changed.gud}
                                    onChange={() => setChange({
                                        bad: false,
                                        gud: true
                                    })}
                                />
                                Высокое (HD)
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>3. Стоимость с установкой</h3>
                        <h2>Итого: от {changed.gud ? number * 18900 : number * 12900} руб</h2>
                    </div>
                    <div>
                        Стоимость установки в базовой комплектации. Для получения точного расчёта, рекомендуем вызывать
                        оценщика. Для Москвы услуга бесплатна. Стоимость выезда оценщика по Московской области
                        обсуждается по телефону.
                    </div>
                    <Form notFocus={true} handleCloseModal={() => {return null}} />
                </div>
            </div>
        </div>
    )
}