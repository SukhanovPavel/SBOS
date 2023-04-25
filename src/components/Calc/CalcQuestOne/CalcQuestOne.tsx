import styles from "./CalcQuestOne.module.css";

type Props = {
    setQuestOne: (arg: string) => void;
}
export const CalcQuestOne = ({setQuestOne}: Props) => (
    <div className={styles.questOne}>
        <h3>1. Куда нужно видеонаблюдение?</h3>
        <div className={styles.wrap}>
            <div className={styles.calcDesc}>
                При расчёте цены важен тип
                объекта, количество камер,
                время хранения записей,
                качество картинки, бюджет,
                подключение к Интернет

            </div>
            <div className={styles.images}>
                <div onClick={() => setQuestOne("Офис")}>
                    <img
                        className={styles.img}
                        src="https://videonablydenie.ru/assets/gallery/2/9.jpg"
                        alt="office"
                    />
                    <p>Офис</p>
                </div>
                <div onClick={() => setQuestOne("Дом")}>
                    <img
                        className={styles.img}
                        src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F8%2F61.jpg"
                        alt="office"
                    />
                    <p>Дом</p>
                </div>
                <div onClick={() => setQuestOne("Квартира")}>
                    <img
                        className={styles.img}
                        src="https://videonablydenie.ru/assets/img/sol/kvartira.jpg"
                        alt="office"
                    />
                    <p>Квартира</p>
                </div>
                <div onClick={() => setQuestOne("Магазин")}>
                    <img
                        className={styles.img}
                        src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F5%2F25.jpg"
                        alt="office"
                    />
                    <p>Магазин</p>
                </div>
                <div onClick={() => setQuestOne("Склад")}>
                    <img
                        className={styles.img}
                        src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F9%2F34.jpg"
                        alt="office"
                    />
                    <p>Склад</p>
                </div>
                <div onClick={() => setQuestOne("Кафе")}>
                    <img
                        className={styles.img}
                        src="https://videonablydenie.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=647&h=382&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F6%2F53.jpg"
                        alt="office"
                    />
                    <p>Кафе</p>
                </div>
            </div>
        </div>
    </div>
)