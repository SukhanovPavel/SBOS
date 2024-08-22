import React from 'react';

import styles from './NewsComponent.module.css'

import {newsData} from "../../../public/newsData";
const NewsComponent = () => {
    return (
        <div className={styles._}>
            {newsData.map(i => <>
                <h1>{i.title}</h1>
                <div>{i.date}</div>
                <div className={styles.news}>
                    <img alt='news' src={i.image} className={styles.img}/>
                    <pre className={styles.text}>{i.description}</pre>
                </div>
            </>)}
        </div>
    );
};

export default NewsComponent