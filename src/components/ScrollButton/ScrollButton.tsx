import React, {useEffect, useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

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
        <button className={styles._}>
            <FaArrowCircleUp
                onClick={() => setScroll(scroll + 1)}
                style={{display: visible ? 'inline' : 'none', fill: "rgb(255,200,74,1)"}}
            />
        </button>
    );
}