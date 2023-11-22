import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import Layout from "@/components/Layout/Layout";

export const PRODUCT_DATA = {
    title: "IP Видеодомофон FX-IVD70WP-KIT",
    image: "https://fox-cctv.ru/upload/resize_cache/iblock/00a/440_370_0/PIC1-_2_.png",
    price: "21000 р.",
    description: [
        "Комплект Комплект IP видеодомофона включает в себя: цветной видеодомофон FX-IVD70WP и вызывную панель FX-ICP200WP",

        "Цветной видеодомофон FX-IVD70WP это современный IP видеодомофон, с яркими дисплеями LCD и сенсорными кнопками.",

        "Корпус монитора выполнен из высококачественного пластика, который поддерживает работу с разрешениями" +
        " 1080P / 960P / 720P / CVBS.",
        "Идеальное решение для тех, кому нужен многофункциональный и респектабельный видеодомофон."],
    title1: "Данная модель обладает большим функциональными возможностями, доступны:",
    list1: [
        "'Интерком' - который позволяет построить систему из мониторов, с возможностью переадресации входящего " +
        "вызова на любой из них.",
        "По необходимости вы можете самостоятельно осуществлять вызов с монитора на монитор находящийся в одной системе.",
        "Монитор поддерживает 'SD карту' карту до 32Гб - необходима для сохранения происходящих событий - сохраняет " +
        "только снимки вызова! Для записи и воспроизведении видео звонка или детекции движения необходимо " +
        "использовать внешнее устройство записи - FOX HVR или iNVR с HDD.",
        "Предусмотрен дополнительный выход для управления воротами или, например, шлагбаумом.",
        "В домофоне есть возможность подключения 16-ти IP видеокамер.",
        "Управление монитором осуществляется при помощи сенсорных кнопок.",
        "Устройства можно подключить через Poe коммутатор или через WIFI соединение (см. схему на фото).",
        "!Обратите внимание! Комплект Не содержит блоков питания на 12В!",
        "Блоки питания на 2А или 3А, по необходимости, приобретаются отдельно."],
    title2: "Видеодомофон",
    list2: [
    "Цветной дисплей диагональю 7 дюймов (17 см)",
    "Разрешение дисплея 1024*600",
    "Одновременно поддерживает стандарт видео 2Мп (1080P) / 1Мп (720P) / (960P) и 960H (PAL / NTSC)",
    "Сенсорные кнопки \"Hands Free\"",
    "Пользовательский интерфейс FOX UI V2.0",
    "Собственное графическое меню на русском языке",
    "Стильный Акриловый корпус",
    "Удаленный доступ с мобильного телефона",
    "Управление двумя замками: калиткой и воротами",
    "Подключение вызывной панели к FOX iNVR",
    "Поддержка питания устройств по POE и 12В DC",
    "Поддержка беспроводной сети WIFI 802.11 b/g/n",
    "Поддержка SD карт объемом до 32Гб",
    "Поддержка подключения 16-и Onvif IP камер",
    "Поддержка протокола SIP / SIP 2.0",
    "Часы",
    "Возможность построения системы с использованием нескольких мониторов - \"Адресный интерком\"",
    "Управление электромеханическим/электромагнитным замком"],
    title3: "IP Вызывная панель",
    list3: ["Угол обзора: По горизонтали: 131° / По вертикали: 78°",
    "ИК прожектор до 10м с компенсацией засветки лица в ближней зоне",
    "Управление замком NO и NC",
    "Встроенный контроллер и считыватель Mifare карт",
    "Козырек для настенного монтажа в комплекте",
    "Кнопка вызова",
    "Рабочая температура: -40°С…+60°С"]
};

export default function Domofon2() {

    const [modal, openModal] = useState(false);

    return (
        <Layout meta={PRODUCT_DATA.title}>
            <ProductCard
                title={PRODUCT_DATA.title}
                image={PRODUCT_DATA.image}
                price={PRODUCT_DATA.price}
                description={PRODUCT_DATA.description}
                title1={PRODUCT_DATA.title1}
                list1={PRODUCT_DATA.list1}
                title2={PRODUCT_DATA.title2}
                list2={PRODUCT_DATA.list2}
                title3={PRODUCT_DATA.title3}
                list3={PRODUCT_DATA.list3}
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </Layout>
    )};