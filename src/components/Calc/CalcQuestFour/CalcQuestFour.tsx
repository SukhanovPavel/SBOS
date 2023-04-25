import {useState} from "react";

import styles from "./CalcQuestFour.module.css";

type Props = {
    handleBackFromFour: () => void;
    handleNextFromFour: () => void;
    priceForClient: {id: string; checked: boolean}[];
    setPrice: (args: {id: string; checked: boolean}[]) => void;
}
export const CalcQuestFour = (
    {
        handleBackFromFour,
        handleNextFromFour,
        priceForClient,
        setPrice
    }: Props) => {

    const [modal, openModal] = useState(false);

    return (
        <div className={styles.calc}>
            <div className={styles.calcFlex}>
                <div className={styles.calcBlock}>
                    <h3>6. В рамках какого бюджета хотите установить систему?</h3>
                    {priceForClient.map(item =>
                        <div key={item.id} className={styles.flex}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => setPrice(priceForClient.map(time =>
                                    time.id === item.id ?
                                        {...time, checked: !time.checked} : {...time, checked: false}))}
                            />
                            {item.id}
                        </div>)}
                </div>
            </div>
            <div className={styles.bottomButton}>
                <button onClick={handleBackFromFour}>Назад</button>
                <button onClick={priceForClient.reduce((acc: boolean, item) =>
                    acc || item.checked, false) && true ? handleNextFromFour :
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