import React, {useState} from "react";

import styles from "./Form.module.css";
import {DONE} from "@/components/Sets/Sets";

export const Download = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8
    5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7
    14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"/></svg>

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

    const [documentFile, setDocumentFile] = useState<File | null>(null);

    const [filesLength, setFilesLength] = useState(0);
// function handleDocumentChange(event: React.ChangeEvent<HTMLInputElement> | null) {
//     if (event?.target?.files) {
//         setDocumentFile(event.target.files[0] ? event.target.files[0] : );
//         setFilesLength(event.target.files.length);
//     }
// }


    function handleDocumentChange(event: React.ChangeEvent<HTMLInputElement>) {
        event?.target?.files ? setDocumentFile(event.target.files[0]) : null;
        setFilesLength(event.target.files !== null ? event.target.files.length : 0);
    }


    function sendDocument() {
        const url = `https://api.telegram.org/bot${tg.token}/sendDocument`

        const formData = new FormData();
        formData.append('chat_id', tg.chat_id);
        documentFile !== null ? formData.append('document', documentFile, documentFile.name) : null;

        const obj = {
            chat_id: tg.chat_id,
            document: formData
        };

        const xht = new XMLHttpRequest();
        xht.open("POST", url, true);
        const encodedName = documentFile !== null ? encodeURIComponent(documentFile.name) : null;
        xht.setRequestHeader("Content-Disposition", `attachment; filename*=UTF-8''${encodedName}`);
        xht.send(formData);
        setTimeout(() => {
            setFormName("");
            setFormNumber("");
            lookPopUp(true);
            setTimeout(() => lookPopUp(false), 3000);
        }, 0);
        // handleCloseModal();
    };

    const SubmitForm = () => {
        sendMessage(message);
        documentFile && sendDocument();
        handleCloseModal();
    }

    return (
        <div className={styles.form}>
            <h3>ЗАПОЛНИТЕ ДАННЫЕ, И МЫ СВЯЖЕМСЯ С ВАМИ:</h3>

            <label className={styles.input}>
                <p>Ваше имя:</p>
                <input
                    autoFocus={notFocus ? false : true}
                    value={formName.replace(/[^\D]/g, "")}
                    onChange={({target:{value}}) => setFormName(value)}
                    placeholder="Имя"
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
                    placeholder="Телефон"
                    title="phone"
                    type="text"
                    onKeyUp={formNumber ?
                        (event) => event.key === "Enter" ? (() => {
                            SubmitForm();
                            typeof(reload) === "function" ? reload() : null;
                        })() : null :
                        (event) => event.key === "Enter" ? () => {
                            openModal(true)
                            setTimeout(() => openModal(false), 1500)
                        } : null
                    }
                />
            </div>
            <div className={styles.inputFile}>

                <label className={styles.customFile}>
                    Если у вас есть проект - прикрепите его здесь: {filesLength ? DONE : Download}
                    <input
                        className={styles.inpNone}
                        type="file"
                        id="inpFile"
                        name="document"
                        onChange={handleDocumentChange}
                    />
                </label>
            </div>
            <button
                onClick={formNumber && formName && true ?
                    () => {
                        SubmitForm();
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