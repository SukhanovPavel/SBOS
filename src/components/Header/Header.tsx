

import styles from "./Header.module.css";

type Props = {
    handleClick: () => void;
}
export const Header = ({handleClick}: Props) => (
    <div className={styles._}>
        <div className={styles.headerBlockLogo}>
            <div className={styles.logoButton}>
                <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3
                0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23
                5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
                </svg>
                <div>
                    <h2>СБОС.РУ</h2>
                </div>
            </div>
        </div>
        <div className={styles.headerBlockDesc}>
            <p>город Шатура</p>
            <div>
                <p>Системы безопасности</p>
                <p>Видеонаблюдение</p>
            </div>
        </div>
        <div className={styles.headerBlockButton}>
            <button onClick={handleClick} className={styles.button}>Заказать звонок</button>
        </div>
        <div className={styles.headerBlockPhone}>
            <a href="tel:+78000000000"><h1>8 (800) 000-00-00</h1></a>
            <p className={styles.none}>Пн-пт с 9:00 до 19:00</p>
        </div>
    </div>
)