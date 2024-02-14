import styles from "./Calc.module.css";
import {useEffect, useState} from "react";
import {Form} from "@/components/Form/Form";
import Image from "next/image";
import {CalcQuestOne} from "@/components/Calc/CalcQuestOne/CalcQuestOne";
import {CalcQuestTwo} from "@/components/Calc/CalcQuestTwo/CalcQuestTwo";
import {CalcQuestThree} from "@/components/Calc/CalcQuestThree/CalcQuestThree";
import {CalcQuestFour} from "@/components/Calc/CalcQuestFour/CalcQuestFour";
import {CalcQuestFive} from "@/components/Calc/CalcQuestFive/CalcQuestFive";


export const Calc = () => {

    const [calcPage, setCalcPage] = useState({
        page1: true,
        page2: false,
        page3: false,
        page4: false,
        page5: false
    })

    const [quests, setQuests] = useState({
        questOne: "",
        questTwo: {number: 1, quality: {bad: true, gud: false}},
        numberDays: [
            {id: "7", checked: false},
            {id: "14", checked: false},
            {id: "30", checked: false},
            {id: "Нужна консультация", checked: false}
        ],
        cameraTarget: [
            {id: "Запись звука", checked: false},
            {id: "Лица", checked: false},
            {id: "Номера машины", checked: false},
            {id: "Общий план", checked: false},
            {id: "Распознавание мелких деталей", checked: false},
        ],
        clientMoney: [
            {id: "Как можно дешевле", checked: false},
            {id: "За оптимальную цену", checked: false},
            {id: "Качество важнее", checked: false},
            {id: "Нужна консультация", checked: false}
        ]
    });

    const [width, setWidth] = useState(0);

    useEffect(() => setWidth(document.documentElement.clientWidth));

    return (
        <div id="calc" className={styles.calc}>
            <h2>КАЛЬКУЛЯТОР СТОИМОСТИ МОНТАЖА ВИДЕОНАБЛЮДЕНИЯ</h2>

            {calcPage.page1 && <CalcQuestOne setQuestOne={(value: string) => {
                setQuests({
                    ...quests,
                    questOne: value,
                });
                setCalcPage({...calcPage, page1: false, page2: true})
            }}/>}

            {calcPage.page2 &&
                <CalcQuestTwo
                    number={quests.questTwo.number}
                    setNumber={(value) =>
                        setQuests({...quests, questTwo: { ...quests.questTwo, number: value}})}
                    changed={quests.questTwo.quality}
                    setChange={(value) =>
                        setQuests({...quests, questTwo: {...quests.questTwo, quality: value}})}
                    handleBackFromTwo={() => setCalcPage({...calcPage, page1: true, page2: false})}
                    handleNextFromTwo={() => setCalcPage({...calcPage, page3: true, page2: false})}
                />}

            {calcPage.page3 &&
                <CalcQuestThree
                    cameraTime={quests.numberDays}
                    setCameraTime={(args) => setQuests({
                        ...quests, numberDays: args
                    })}
                    importantTarget={quests.cameraTarget}
                    setTarget={(args) => setQuests({
                        ...quests, cameraTarget: args
                    })}
                    handleBackFromThree={() => setCalcPage({...calcPage, page3: false, page2: true})}
                    handleNextFromThree={() => setCalcPage({...calcPage, page3: false, page4: true})}
                />}

            {calcPage.page4 &&
                <CalcQuestFour
                    priceForClient={quests.clientMoney}
                    setPrice={(args) => setQuests({...quests, clientMoney: args})}
                    handleBackFromFour={() => setCalcPage({...calcPage, page4: false, page3: true}) }
                    handleNextFromFour={() => setCalcPage({...calcPage, page4: false, page5: true})}
                />}

            {calcPage.page5 &&
                <CalcQuestFive
                    where={quests.questOne}
                    num={quests.questTwo.number.toString()}
                    quality={quests.questTwo.quality.bad? "Среднее" :
                        quests.questTwo.quality.gud? "Высокое" : undefined}
                    time={quests.numberDays.reduce((acc, item) =>
                        item.checked ? acc + item.id : acc, "")}
                    ceil={quests.cameraTarget.reduce((acc, item) =>
                        item.checked ? acc + item.id + ", " : acc,"")}
                    money={quests.clientMoney
                        .reduce((acc, item) =>
                        item.checked ? acc + item.id : acc, "")}
                    handleBackFromFive={() => setCalcPage({...calcPage, page5: false, page4: true})}
                    reload={() => setCalcPage({...calcPage, page5: false, page1: true}) }
                />
            }

        </div>
    )
}