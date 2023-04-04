import Head from 'next/head';
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Sets} from "@/components/Sets/Sets";
import {TopServices} from "@/components/TopServices/TopServices";
import {WorkScheme} from "@/components/WorkScheme/WorkScheme";
import {AboutInstall} from "@/components/AboutInstall/AboutInstall";
import {Advantages} from "@/components/Advantages/Advantages";
import {Answers} from "@/components/Answers/Answers";
import {Contacts} from "@/components/Contacts/Contacts";
import {Modal} from "@/components/Modal/Modal";
import {useState} from "react";
import {Description} from "@/components/Description/Description";
import {Calc} from "@/components/Calc/Calc";

import styles from '@/styles/Home.module.css';
import {YMaps} from "@pbe/react-yandex-maps";

export default function Home() {

  const [modal, openModal] = useState(false);

  return (
    <YMaps>
      <Head>
        <title>СБОС. Видеонаблюдение</title>
        <meta name="description" content="Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
      <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="5710205815328da3" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Header handleClick={() => openModal(true)}/>
      <Menu />
      <main className={styles.main}>

          <Description handleClick={() => openModal(true)} href={"#calc"}/>

          <Calc />

          <Sets handleClick={() => openModal(true)}/>

          <TopServices />

          <WorkScheme />

          <AboutInstall handleClick={() => openModal(true)}/>

          <Advantages />

          <Answers />

          <Contacts handleClick={() => openModal(true)} />

          {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}

      </main>
    </YMaps>
  )
}
