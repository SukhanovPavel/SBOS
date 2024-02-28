import React, { useEffect } from 'react';

import styles from "./tgWidget.module.css";

const TgWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?22';
        script.setAttribute('data-telegram-post', 'sbosshatura/8');
        script.setAttribute('data-width', '100%');
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return(
        <div className={styles.telegramWidget}>
        </div>
    );

};

export default TgWidget;
