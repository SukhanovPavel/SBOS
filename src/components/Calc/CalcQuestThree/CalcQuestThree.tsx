import {useState} from "react";

import styles from "./CalcQuestThree.module.css";

type Props = {
    handleBackFromThree: () => void;
    handleNextFromThree: () => void | null;
    cameraTime: {id: string; checked: boolean}[];
    setCameraTime: (args: {id: string; checked: boolean}[]) => void;
    importantTarget: {id: string; checked: boolean}[];
    setTarget: (args: {id: string; checked: boolean}[]) => void;
}
export const CalcQuestThree = (
    {
        handleBackFromThree,
        handleNextFromThree,
        cameraTime,
        setCameraTime,
        importantTarget,
        setTarget
    }: Props) => {

    const [modal, openModal] = useState(false);

    return (
        <div className={styles.calc}>
            <div className={styles.calcFlex}>
                <div className={styles.calcBlock}>
                    <h3>4. Сколько дней требуется хранить запись с камер?</h3>
                    {cameraTime.map(item =>
                        <div key={item.id} className={styles.flex}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => setCameraTime(cameraTime.map(time =>
                                    time.id === item.id ?
                                        {...time, checked: !time.checked} : {...time, checked: false}))}
                            />
                            {item.id}
                        </div>)}
                </div>
                <div className={styles.calcBlock}>
                    <h3>5. Что для вас важнее при записи видео?</h3>
                    {importantTarget.map(item =>
                        <div key={item.id} className={styles.flex}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => setTarget(importantTarget.map(prop =>
                                    prop.id === item.id ? {...prop, checked: !prop.checked} : prop))}
                            />
                            {item.id}
                        </div>)}
                </div>
            </div>
            <div className={styles.bottomButton}>
                <button onClick={handleBackFromThree}>Назад</button>
                <button onClick={cameraTime.reduce((acc: boolean, item) =>
                    acc || item.checked, false) && importantTarget.reduce((acc: boolean, item) =>
                    acc || item.checked, false) && true ? handleNextFromThree :
                    () => {
                        openModal(true)
                        setTimeout(() => openModal(false), 1500)
                    }}>Далее</button>
            </div>

            {modal && <div className={styles.warningModal}>
                <h3>Заполните все обязательные поля</h3>
            </div>}

        </div>
    )
}