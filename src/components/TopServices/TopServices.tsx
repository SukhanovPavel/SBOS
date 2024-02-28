import Link from "next/link";

import styles from "./TopServices.module.css";

type Props = {
    servicesMap: {
        title: string;
        image: string;
        description?: string;
        price?: string;
        link: string;
    }[];
    titleH1?: string;
    titleH2?: string;
    allServicesButton: boolean;
};

export const TopServices = ({servicesMap, titleH1, titleH2, allServicesButton}: Props) => (
    <div className={styles._}>
        {titleH1 ? <h1>{titleH1}</h1> : null}
        {titleH2 ? <h2>{titleH2}</h2> : null}
        <div className={styles.services}>
            {servicesMap.map(service =>
                <div key={service.title} className={styles.service}>
                    <h3>{service.title}</h3>
                    <div className={styles.desc}>
                        <img className={styles.img} src={service.image}/>
                        {service.description ?
                            <div>
                                {service.description}
                            </div> : null
                        }
                        {service.price ?
                            <div>
                                Цена: {service.price} руб.
                            </div> : null
                        }
                    </div>
                    <Link href={service.link}><button>Подробнее</button></Link>
                </div>)
            }
        </div>
        {allServicesButton ? <Link href="/services"><button className={styles.button}>Смотреть все услуги</button></Link> : null}
    </div>
)