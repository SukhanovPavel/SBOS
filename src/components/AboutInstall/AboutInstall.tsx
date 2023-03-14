

import styles from "./AboutInstall.module.css";

export const AboutInstall = () => (
    <div className={styles._}>
        <h2>УСТАНОВКА СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ</h2>
        <div className={styles.blocks}>
            <div className={styles.block}>
                <img className={styles.img} src="https://videonablydenie.ru/assets/img/videonabludenie2-min.jpg"/>
            </div>
            <div className={styles.block}>
                <p>
                    Мы специализируемся на установке видеонаблюдения в Москве и Московской области. Предоставляем
                    гарантию на оборудование и установку. Заключаем договор, в котором прописаны все этапы и
                    условия, а также сроки сдачи объекта. В нашем штате только квалифицированные специалисты
                    разного профиля: монтажники, электрики технологи. Мастера умеют работать со сложными системами
                    видеонаблюдения. Обращайтесь, мы сделаем работу качественно и недорого.
                </p>
                <button>Бесплатная консультация</button>
            </div>
        </div>
    </div>
)