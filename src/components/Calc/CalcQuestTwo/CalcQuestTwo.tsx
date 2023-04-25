import {useEffect, useState} from "react";
import Image from "next/image";

import styles from "./CalcQuestTwo.module.css";

import CALCBAD from "../../../../public/images/calc/calc3-min.jpeg";
import CALCGUD from "../../../../public/images/calc/calc2-min.jpeg";

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

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => setWidth(document.documentElement.clientWidth), [changed, setChange]);

    return (
        <div className={styles.calc}>
            <div className={styles.calcFlex}>
                <div className={styles.calcBlock}>
                    <div className={styles.calcImgContain}>
                        {changed.gud ?
                            <Image
                                width={width > 400 ? (width > 1024 ? 700 : 400) : 340 }
                                height={width > 400 ? (width > 1024 ? 450 : 300) : 250}
                                style={{borderRadius: "1rem"}}
                                alt="img"
                                src={CALCGUD}
                            /> : <Image
                                width={width > 400 ? (width > 1200 ? 700 : 400) : 340 }
                                height={width > 400 ? (width > 1200 ? 450 : 300) : 250}
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
                            <ul className={styles.calcList}>
                                <li>Проектирование проекта</li>
                                <li>Профессиональное оборудование и расходники</li>
                                <li>Установка и настройка системы видеонаблюдения</li>
                                <li>Доступ к любой камере в онлайн режиме из любой точки мира</li>
                                <li>Постоянная запись или запись при движении</li>
                                <li>Хорошее качество записи в тёмное время суток</li>
                                <li>Консультация и обучение по эксплуатации системы</li>
                            </ul>
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