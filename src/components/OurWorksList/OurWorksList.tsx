
import styles from "./OurWorksList.module.css";
import {useState} from "react";
import {log} from "util";

const ARROW = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7
    256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>

type Props = {
    ourWorksImages: {
        title: string;
        img: string;
        description?: string;
        price?: string;
        link: string;
    }[];
    title?: string;
};
export const OurWorksList = ({ourWorksImages, title}: Props) => {

    const [isImageOpen, openImage] = useState({isOpen: false, src: ""});

    const slideToLeft = () => {
        ourWorksImages.forEach((image, index) => image.img === isImageOpen.src ?
            openImage({
                isOpen: true,
                src: index === 0 ? ourWorksImages[ourWorksImages.length-1].img : ourWorksImages[index - 1].img
            }) : null
        )
    };

    const slideToRight = () => {
        ourWorksImages.forEach((image, index) => image.img === isImageOpen.src ?
            openImage({
                isOpen: true,
                src: index === ourWorksImages.length-1 ? ourWorksImages[0].img : ourWorksImages[index + 1].img
            }) : null
        )
    };



    return (
        <div
            className={styles._}
            tabIndex={0}
            onKeyDown={event => event.key === "ArrowRight" ?
                slideToRight() : event.key === "ArrowLeft" ?
                    slideToLeft() : event.key === "Escape" && openImage({isOpen: false, src: ""})}
        >
            {title ? <h1>{title}</h1> : null}
            <div className={styles.grid}>
                {ourWorksImages.map(image =>
                    <div key={image.img} className={styles.box}>
                        <h3>{image.title}</h3>
                        <div className={styles.desc} onClick={() => openImage({isOpen: true, src: image.img})}>
                            <img className={styles.img} src={image.img}/>
                            {image.description ?
                                <div>
                                    {image.description}
                                </div> : null
                            }
                        </div>
                    </div>)
                }
            </div>
            {isImageOpen.isOpen ?
                <div
                    className={styles.fullScreenContainer}
                    onClick={(e) => e.target === e.currentTarget ?
                        openImage({isOpen: false, src: ""}) : null}
                >
                    <div
                        className={styles.arrow+" "+styles.leftArrow}
                        onClick={slideToLeft}
                    >
                        {ARROW}
                    </div>
                    <img
                        className={styles.fullScreenImage}
                        src={isImageOpen.src}
                        alt="fullScreen image"
                    />
                    <div
                        className={styles.arrow}
                        onClick={slideToRight}
                    >
                        {ARROW}
                    </div>
                </div>
                : null
            }
        </div>
    )
}