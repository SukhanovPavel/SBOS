import {useState} from "react";

import styles from "./Form.module.css";

type Props = {
    handleCloseModal: () => void;
    notFocus?: boolean;
};

export const Form = ({handleCloseModal, notFocus}: Props) => {

    const [formName, setFormName] = useState("");
    const [formNumber, setFormNumber,] = useState("");
    const [inputBorder, setInputBorder] = useState({
        name: true,
        phone: true
    })


    const tg = {
        token: "5645392649:AAEedFfXsmnTNpdXODE1u6GTsZRyCsw0HvM",
        chat_id: "-978501206"
    };
    function sendMessage(text: string) {
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage`

        const obj = {
            chat_id: tg.chat_id,
            text: text
        };

        const xht = new XMLHttpRequest();
        xht.open("POST", url, true);
        xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        xht.send(JSON.stringify(obj));
    };

    const message = `${formName} сделал(а) заявку на сайте СБОС и хочет крутые камеры! Звоните по номеру: ${formNumber}`

    return (
        <div className={styles.form}>
            <h3>ЗАПОЛНИТЕ ДАННЫЕ, И МЫ СВЯЖЕМСЯ С ВАМИ:</h3>
            <div className={styles.input}>
                <label>Ваше имя:</label>
                <input
                    className={inputBorder.name ? styles.borderBlue : styles.borderRed}
                    autoFocus={notFocus ? false : true}
                    value={formName}
                    onChange={({target:{value}}) => setFormName(value)}
                    minLength={10}
                    maxLength={11}
                    placeholder="  Имя"
                    title="phone"
                    type="tel" pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
                />
            </div>
            <div className={styles.input}>
                <label>Ваш номер телефона:</label>
                <input
                    className={styles.borderBlue}
                    value={formNumber}
                    onChange={({target:{value}}) => setFormNumber(value) }
                    placeholder="  Телефон"
                    onKeyUp={(event) => event.key === "Enter" ? handleCloseModal() : null}
                />
            </div>
            <button
                // onClick={() => sendMessage(message)}
            >
                Отправить
            </button>
        </div>
    )
};