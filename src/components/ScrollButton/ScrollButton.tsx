import React, {useEffect, useState} from 'react';
import {FaAngleUp} from 'react-icons/fa';

import styles from "./ScrollButton.module.css";
export const ScrollButton = () => {

    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(1);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300){
                setVisible(true)
            }
            else if (scrolled <= 300){
                setVisible(false)
            }
        };

        // const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
                /* you can also use 'auto' behaviour
                   in place of 'smooth' */
            });
        // };
        window.addEventListener('scroll', toggleVisible);
    }, [scroll]);

    return (
        <button className={styles._}
                style={{display: visible ? 'inline' : 'none'}}>
            <FaAngleUp
                onClick={() => setScroll(scroll + 1)}
            />
        </button>
    );
}