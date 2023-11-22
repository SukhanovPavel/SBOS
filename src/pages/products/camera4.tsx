import {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import Layout from "@/components/Layout/Layout";

export const PRODUCT_DATA = {
    title: "КАМЕРА-IP TIANDY TC-C34XN I3/E/Y/2.8MM/V5.0",
    image: "https://tiandy-russia.ru/image/cache/catalog/img_1924%281%29-437x423.png",
    price: "4900 р.",
    description: ["Уличная цилиндрическая IP-камер Tiandy с объективом 4 МП с углом обзора 92.8° и Smart " +
    "ИК-подсветкой до 30 метров. Светочувствительность камеры 0.02 Люкс, что позволяет получать полноцветное" +
    " изображение даже в условиях плохой освещенности. Корпус металл + макролон, камеры устойчива к негативным" +
    " воздействиям окружающей среды. Благодаря макролону, из которого состоит корпус камеры, может использоваться " +
    "в зонах с повышенной влажностью. Работает в температурном режиме от -40℃ до 65℃, поддерживает PoE, встроенный " +
    "микрофон. Подходит для построения системы безопасности на объектах малого и среднего бизнеса."],
    title1: "",
    list1: ["Разрешение 4МП",
        "Матрица 1/3\"CMOS",
        "Color:0.02Lux",
        "Угол обзора 92,8°",
        "Кодек сжатия S+265/H.265/H.264",
        "2560x1440@20fps",
        "Класс защиты IP20",
        "Smart ИК, дистанция:30m",
        "Поддержка POE",
        "Встроенный микрофон"],
    title2: "Характеристики",
    list2: ["BLC да",
        "HLC да",
        "PoE да",
        "Smart Defog нет",
        "Smart видеоаналитика нет",
        "WDR DWDR",
        "Аудиовход нет",
        "Аудиовыход Нет",
        "Битрейт 32Kbps~6Mbps",
        "Вес 0.3kg",
        "Динамик Нет",
        "Дополнительный поток PAL:20fps(2560x1440,2304x1296,1920x1080,1280x720) NTSC:20fps(2560x1440,2304x1296,1920x1080,1280x720)",
        "ИК-подсветка 30м",
        "Карта памяти Нет",
        "Класс защиты по IP IP20",
        "Кнопка сброса настроек Нет",
        "Кодек S+265/H.265/H.264",
        "Максимальное разрешение 4МП(2560x1440)",
        "Материал корпуса Макролон",
        "Микрофон Встроенный микрофон",
        "Настройки изображения Яркость, насыщенность, контрастность, режим переворота",
        "Объектив 2.8мм",
        "Оптическое увеличение нет",
        "Основной поток 1920×1080@25fps",
        "Питание PoE",
        "Потребляемая мощность MAX:6W(POE)",
        "Протоколы TCP/IP, HTTP, UDP, ICMP, DHCP, DNS, NTP, IPv4, Telnet, RTSP",
        "Размер матрицы 1/2.9\"CMOS",
        "Размеры 175×85x85mm",
        "Серия SPARK",
        "Сетевое хранение Нет",
        "Сетевой интерфейс 29 RJ45 10M/100M self adaptive Ethernet port",
        "Совместимость ONVIF (PROFILE S/T), SDK,CGI",
        "Температурный режим в градусах -40~60℃",
        "Тип корпуса Купольная",
        "Тревожный вход Нет",
        "Тревожный выход Нет",
        "Угол обзора объектива 92.8°",
        "Уличная/для помещения Уличная",
        "Улучшение изображения BLC/3D DNR/HLC",
        "Цвет Белый",
        "Цифровое увеличение нет",
        "Чувствительность Color:0.02Lux"],
};

export default function Camera4() {

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
            />
            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </Layout>
    )};