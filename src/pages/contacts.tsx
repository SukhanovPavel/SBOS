import {YMaps} from "@pbe/react-yandex-maps";
import {Modal} from "@/components/Modal/Modal";
import {useState} from "react";
import {Contacts as Cont} from "@/components/Contacts/Contacts";
import Layout from "@/components/Layout/Layout";


const Contacts = () => {

    const [modal, openModal] = useState(false);

    return (
        <YMaps>
            <Layout meta="Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
            <Cont handleClick={() => openModal(true)} />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </YMaps>
    );
}

export default Contacts;