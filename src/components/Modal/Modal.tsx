import {Form} from "@/components/Form/Form";

import styles from "./Modal.module.css";

type Props = {
    handleCloseModal: () => void;
}
export const Modal = ({handleCloseModal}: Props) => (
    <div
        className={styles._}
        onClick={ e => (e.currentTarget === e.target) && handleCloseModal() }
    >
        <div className={styles.modal}>
            <Form handleCloseModal={handleCloseModal} />
        </div>
    </div>
);