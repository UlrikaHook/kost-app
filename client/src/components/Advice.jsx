import React from 'react';
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {AdviceItem} from "./AdviceItem";


export const Advice = observer(() => {

    const { foodStore } = useStores();

    const adviceComponents = () => {
        if(foodStore.result.advice.length === 0){
            return "Näringsintaget är redan i balans!";
        }
        else{
            return foodStore.result.advice.map(nutrient => {
                return (
                    <AdviceItem name={nutrient.name} text={nutrient.text} link={nutrient.link}/>

                )
            })
        }

    }

    return(
        <div className="fill">
            {adviceComponents()}
        </div>
    )
});