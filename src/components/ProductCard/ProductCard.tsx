import React, {useState} from 'react';
import {Modal} from "@/components/Modal/Modal";

import styles from "./ProductCard.module.css";

export type Props = {
    title: string;
    image: string;
    price: string;
    description: string[];
    title1: string;
    list1: string[];
    title2: string;
    list2: string[];
    title3?: string | undefined;
    list3?: string[] | undefined;
}

export const ProductCard = ({
    title,
    image,
    price,
    description,
    title1,
    list1,
    title2,
    list2,
    title3,
    list3
}: Props) => {

    const [modal, openModal] = useState(false);

    return (
        <main className={styles.main}>
            <div className={styles._}>
                <h1>{title}</h1>
                <div className={styles.blocks}>
                    <div className={styles.imgBlock}>
                        <img
                            className={styles.img}
                            src={image}
                            alt={title}
                        />
                    </div>
                    <div className={styles.block}>
                        <div>
                            <div className={styles.buy}><h3>Цена: {price}</h3>
                                <button onClick={() => openModal(true)}>Заказать</button>
                            </div>
                            {description.map(item => (
                                <div key={item}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.complect}>
                <h3>{title1}</h3>
                {list1.map(item => <p key={Math.random()}>. {item}</p>)}
                <h3>{title2}</h3>
                {list2.map(item => <p key={Math.random()}>. {item}</p>)}
                <h3>{title3}</h3>
                {list3?.length ?
                    list3.map(item => <p key={Math.random()}><span>.</span> {item}</p>) : null}
            </div>

            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}

        </main>
    );
};