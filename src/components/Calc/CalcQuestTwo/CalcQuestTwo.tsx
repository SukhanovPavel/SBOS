import {useEffect, useState} from "react";
import Image from "next/image";

import styles from "./CalcQuestTwo.module.css";

import CALCBAD from "../../../../public/images/calc/calc3-min.jpeg";
import CALCGUD from "../../../../public/images/calc/calc2-min.jpeg";

const CHECK = <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8
     0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>

type Props = {
    number: number;
    setNumber: (arg: number) => void;
    changed: {bad: boolean; gud: boolean;};
    setChange: (args: {bad: boolean; gud: boolean;}) => void;
    handleBackFromTwo: () => void;
    handleNextFromTwo: (args: string) => void;
}
export const CalcQuestTwo = ({
    number,
    setNumber,
    changed,
    setChange,
    handleBackFromTwo,
    handleNextFromTwo
                             }: Props) => {
    const [width, setWidth] = useState(0);

    useEffect(() => setWidth(document.documentElement.clientWidth), [changed, setChange]);

    return (
        <div className={styles.calc}>
            <div className={styles.calcFlex}>
                <div className={styles.calcBlock}>
                    <div className={styles.calcImgContain}>
                        {changed.gud ?
                            <Image
                                width={width > 950 ? (width > 1024 ? 600 : 400) : 340 }
                                height={width > 400 ? (width > 1024 ? 400 : 300) : 250}
                                style={{borderRadius: "1rem"}}
                                alt="img"
                                src={CALCGUD}
                            /> : <Image
                                width={width > 950 ? (width > 1200 ? 600 : 400) : 340 }
                                height={width > 400 ? (width > 1200 ? 400 : 300) : 250}
                                style={{borderRadius: "1rem"}}
                                alt="img"
                                src={CALCBAD}
                            />}
                    </div>
                </div>
                <div className={styles.calcBlock}>
                    <div>
                        <h3>2. Сколько вам потребуется камер?</h3>
                        <div>
                            <button
                                className={styles.calcButton}
                                onClick={number > 0 ? () => setNumber(number - 1) : () => setNumber(0)}
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
                                onClick={() => setNumber(number + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className={styles.calcColumn}>
                        <h3>3. Выберите разрешение камер</h3>
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
                        <div className={styles.priceDesc}>
                            <h3>В стоимость входит:</h3>
                            <div className={styles.calcList}>
                                <p><div className={styles.checkIcon}>{CHECK}</div>Проектирование проекта</p>
                                <p><div className={styles.checkIcon}>{CHECK}</div>Профессиональное оборудование и расходники</p>
                                <p><div className={styles.checkIcon}>{CHECK}</div>Установка и настройка системы видеонаблюдения</p>
                                <p><div className={styles.checkIcon}>{CHECK}</div>Доступ к любой камере в онлайн режиме из любой точки мира</p>
                                <p><div className={styles.checkIcon}>{CHECK}</div>Постоянная запись или запись при движении</p>
                                <p><div className={styles.checkIcon}>{CHECK}</div>Хорошее качество записи в тёмное время суток</p>
                                <p><div className={styles.checkIcon}>{CHECK}</div>Консультация и обучение по эксплуатации системы</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomButton}>
                <button onClick={handleBackFromTwo}>Назад</button>
                <button onClick={() => handleNextFromTwo("start")}>Далее</button>
            </div>
        </div>
    )
}