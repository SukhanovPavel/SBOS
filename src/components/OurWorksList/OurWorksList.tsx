
import styles from "./OurWorksList.module.css";
import {useState} from "react";

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

    return (
        <div className={styles._}>
            {title ? <h1>{title}</h1> : null}
            <div className={styles.grid}>
                {ourWorksImages.map(image =>
                    <div key={image.title} className={styles.box}>
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
                    <img
                        className={styles.fullScreenImage}
                        src={isImageOpen.src}
                        alt="fullScreen image"
                    />
                </div>
                : null
            }
        </div>
    )
}