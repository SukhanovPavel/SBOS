

import styles from "./Sets.module.css";
import exp from "constants";

export const DONE = <svg className={styles.svgDone} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1
    225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9
    371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4
    0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464
    141.1 370.9 48 256 48z"/>
</svg>;

export const X = <svg className={styles.svgX} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3
     0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5
      12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
</svg>;

type Props = {
    handleClick: () => void;
}

export const Sets = ({handleClick}: Props) => (
    <div className={styles._}>
        <h2>ВИДЕОНАБЛЮДЕНИЕ ГОТОВЫЕ КОМПЛЕКТЫ</h2>
        <div className={styles.sets}>
            <div className={styles.set}>
                <div className={styles.list}>
                    <h4>CCTV-видеонаблюдение на 4 камеры</h4>
                    <div className={styles.p}>
                        <div className={styles.svg}>{DONE}</div>
                        В стоимость включены оборудование и монтаж
                    </div>
                    <div className={styles.p}>{DONE}4 камеры</div>
                    <div className={styles.p}><div className={styles.svg}>{X}</div>Детализированное изображение</div>
                    <div className={styles.p}><div className={styles.svg}>{X}</div>Возможность трансляции на смартфон или планшет</div>
                    <div className={styles.p}><div className={styles.svg}>{X}</div>Видеоаналитика (распознование лиц, детектор движения, распознавание номеров и т.д.)</div>
                    <div className={styles.p}><div className={styles.svg}>{X}</div>Запись с частотой 25 кадров в секунду</div>
                    <div className={styles.p}><div className={styles.svg}>{X}</div>Full HD картинка</div>
                </div>
                <div>
                    <div className={styles.flex}>От<h2>29 990</h2>руб</div>
                    <button onClick={handleClick}>Оставить заявку</button>
                </div>
            </div>
            <div className={styles.shadow}>
                <div className={styles.list}>
                    <h4>AHD-видеонаблюдение на 4 камеры</h4>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>В стоимость включены оборудование и монтаж</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>4 камеры</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>Детализированное изображение</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>Возможность трансляции на смартфон или планшет</div>
                    <div className={styles.p}><div className={styles.svg}>{X}</div>Видеоаналитика (распознование лиц, детектор движения, распознавание номеров и т.д.)</div>
                    <div className={styles.p}><div className={styles.svg}>{X}</div>Запись с частотой 25 кадров в секунду</div>
                    <div className={styles.p}><div className={styles.svg}>{X}</div>Full HD картинка</div>
                </div>
                <div>
                    <div className={styles.flex}>От<h2>34 990</h2>руб</div>
                    <button onClick={handleClick}>Оставить заявку</button>
                </div>
            </div>
            <div className={styles.set}>
                <div className={styles.list}>
                    <h4>IP-видеонаблюдение на 4 камеры</h4>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>В стоимость включены оборудование и монтаж</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>4 камеры</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>Детализированное изображение</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>Возможность трансляции на смартфон или планшет</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>Видеоаналитика (распознование лиц, детектор движения, распознавание номеров и т.д.)</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>Запись с частотой 25 кадров в секунду</div>
                    <div className={styles.p}><div className={styles.svg}>{DONE}</div>Full HD картинка</div>
                </div>
                <div>
                    <div className={styles.flex}>От<h2>44 990</h2>руб</div>
                    <button onClick={handleClick}>Оставить заявку</button>
                </div>
            </div>
        </div>
    </div>
)