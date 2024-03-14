import Script from "next/script";
import Link from "next/link";

import styles from "./TelegramChanel.module.css";


const TelegramChannel = () => {

    return (
        <div className={styles._}>
            <h3>Новости из нашего <Link href="https://t.me/sbosshatura">телеграм канала</Link> :</h3>

            <Script
                src="https://telegram.org/js/telegram-widget.js?22"
                data-telegram-post={`sbosshatura/13`}
                data-width="100%"
                strategy="lazyOnload"
            />
            <iframe
                id={`telegram-post-sbosshatura-13`}
                src={`https://t.me/sbosshatura/13?embed=1`}
                width="100%"
                height="" frameBorder="0" scrolling="yes"
                style={{
                    overflow: "hidden",
                    colorScheme: "light dark",
                    border: "none",
                    minWidth: "320px",
                    height: "500px"
                }}>
            </iframe>

            <Script
                src="https://telegram.org/js/telegram-widget.js?22"
                data-telegram-post={`sbosshatura/12`}
                data-width="100%"
                strategy="lazyOnload"
            />
            <iframe
                id={`telegram-post-sbosshatura-12`}
                src={`https://t.me/sbosshatura/12?embed=1`}
                width="100%"
                height="" frameBorder="0" scrolling="yes"
                style={{
                    overflow: "hidden",
                    colorScheme: "light dark",
                    border: "none",
                    minWidth: "320px",
                    height: "500px"
                }}>
            </iframe>
        </div>)
}


export default TelegramChannel;