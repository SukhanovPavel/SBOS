import {useState} from "react";

import styles from "./Form.module.css";

type Props = {
    handleCloseModal: () => void;
    notFocus?: boolean;
    where?: string;
    num?: string;
    quality?: string;
    time?: string;
    ceil?: string;
    money?: string;
    reload?: () => void;

};

export const Form = (
    {
        handleCloseModal,
        notFocus,
        where,
        num,
        quality,
        time,
        ceil,
        money,
        reload
    }: Props) => {

    const [popUp, lookPopUp] = useState(false);

    const [modal, openModal] = useState(false);

    const [formName, setFormName] = useState("");
    const [formNumber, setFormNumber,] = useState("");

    const tg = {
        token: "5645392649:AAEedFfXsmnTNpdXODE1u6GTsZRyCsw0HvM",
        chat_id: "-978501206"
    };

    function sendMessage(text: string | any) {
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage`

        const obj = {
            chat_id: tg.chat_id,
            text: text
        };

        const xht = new XMLHttpRequest();
        xht.open("POST", url, true);
        xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        xht.send(JSON.stringify(obj));
        setTimeout(() => {
            setFormName("");
            setFormNumber("");
            lookPopUp(true);
            setTimeout(() => lookPopUp(false), 3000);
        }, 0);
        handleCloseModal();
    };


    const message = `Заявка с сайта:
    
    ${formName ? `1. Имя клиента: ${formName},` : ''} 
    
    ${formNumber ? `2. Телефон клиента: ${formNumber},` : ''}
    
    ${where ? `3. Камеры в: ${where},` : ''}
    
    ${num ? `4. Желаемое количество камер: ${num},` : ''}
    
    ${quality ? `5. Желаемое качество камер: ${quality},` : ''}
    
    ${time ? `6. Время хранения записи: ${time} дней,` : ''}
    
    ${ceil ? `7. Цели: ${ceil}` : ''}
    
    ${money ? `8. Бюджет клиента: ${money}` : ''}`;

    return (
        <div className={styles.form}>
            <h3>ЗАПОЛНИТЕ ДАННЫЕ, И МЫ СВЯЖЕМСЯ С ВАМИ:</h3>

            <label className={styles.input}>
                <p>Ваше имя:</p>
                <input
                    autoFocus={notFocus ? false : true}
                    value={formName.replace(/[^\D]/g, "")}
                    onChange={({target:{value}}) => setFormName(value)}
                    placeholder="  Имя"
                    type="text"
                    title="Имя рсскими буквами"
                />
            </label>

            <div className={styles.input}>
                <label>Ваш номер телефона:</label>
                <input
                    className={styles.borderBlue}
                    value={formNumber.replace(/[^\d]/g, "")}
                    onChange={({target:{value}}) => setFormNumber(value) }
                    placeholder="  Телефон"
                    title="phone"
                    type="text"
                    onKeyUp={formNumber ?
                        (event) => event.key === "Enter" ? (() => {
                            sendMessage(message);
                            typeof(reload) === "function" ? reload() : null;
                        })() : null :
                        (event) => event.key === "Enter" ? () => {
                            openModal(true)
                            setTimeout(() => openModal(false), 1500)
                        } : null
                    }
                />
            </div>
            <button
                onClick={formNumber && formName && true ?
                    () => {
                        sendMessage(message);
                        typeof(reload) === "function" ? reload() : null;
                    } : () => {
                        openModal(true)
                        setTimeout(() => openModal(false), 1500)
                    }}
            >
                Отправить
            </button>
            {popUp ? <div className={styles.popUp}>
                Контактные данные отправлены. В ближайшее время вам позвонит менеджер
            </div> : null}
            {modal && <div className={styles.warningModal}>
                <h3>Заполните все обязательные поля</h3>
            </div>}
        </div>
    )
};