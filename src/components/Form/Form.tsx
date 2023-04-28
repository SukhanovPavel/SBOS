import React, {useState} from "react";

export const Download = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160
    160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596
    238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4
    9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24
    24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/></svg>


import styles from "./Form.module.css";
import {DONE} from "@/components/Sets/Sets";

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
    }: Props): JSX.Element => {

    const [popUp, lookPopUp] = useState(false);

    const [modal, openModal] = useState(false);

    const [formName, setFormName] = useState("");
    const [formNumber, setFormNumber,] = useState("");

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
        setTimeout(() => {
            setFormName("");
            setFormNumber("");
            lookPopUp(true);
            setTimeout(() => lookPopUp(false), 3000);
        }, 0);
        // handleCloseModal();
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