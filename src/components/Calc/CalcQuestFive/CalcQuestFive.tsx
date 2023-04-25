import {useState} from "react";
import {Form} from "@/components/Form/Form";

import styles from "./CalcQuestFive.module.css";

type Props = {
    handleBackFromFive: () => void;
    where?: string;
    num?: string;
    quality?: string;
    time?: string;
    ceil?: string;
    money?: string;
    reload: () => void;
}
export const CalcQuestFive = (
    {
        handleBackFromFive,
        where,
        num,
        quality,
        time,
        ceil,
        money,
        reload
    }: Props) => {

    return (
        <div className={styles.calc}>
                <Form
                    handleCloseModal={() => {}}
                    where={where}
                    num={num}
                    quality={quality}
                    time={time}
                    ceil={ceil}
                    money={money}
                    reload={reload}
                />
            <div className={styles.bottomButton}>
                <button onClick={handleBackFromFive}>Назад</button>
            </div>
        </div>
    )
}