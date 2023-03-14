

import styles from "./Modal.module.css";

type Props = {
    handleCloseModal: () => void;
}
export const Modal = ({handleCloseModal}: Props) => (
    <div
        className={styles._}
        onClick={ e => (e.currentTarget === e.target) && handleCloseModal() }
    >
        <div className={styles.modal}>
            <div className={styles.form}>
                <h3>ЗАПОЛНИТЕ ДАННЫЕ, И МЫ СВЯЖЕМСЯ С ВАМИ</h3>
                <div className={styles.input}><label>Ваше имя:</label><input placeholder="Имя"/></div>
                <div className={styles.input}><label>Ваш номер телефона:</label><input placeholder="Телефон"/></div>
                <button>Отправить</button>
            </div>
        </div>
    </div>
)