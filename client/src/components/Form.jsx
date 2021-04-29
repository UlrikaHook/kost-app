import React, {useEffect, useState} from 'react';
import { Foods } from "./Foods";
import { PersonalInfo } from "./PersonalInfo"
import {observer} from "mobx-react";
import {useStores} from "../hooks/useStores";


export const Form = observer(() => {

    const [ buttonDisabled, isButtonDisabled ] = useState(true);
    const { foodStore } = useStores();
    const { viewStore } = useStores();

    const sendData = async () => {
        await foodStore.sendData();
        viewStore.setShowForm(false);
    }

    useEffect(() => {
        if(foodStore.foods.length === 0 || foodStore.age === "" || foodStore.group === ""){
            isButtonDisabled(true);

        } else if(foodStore.foods.length !== 0) {
            const amountEmpty = foodStore.foods.some(food => {return food.amount === undefined});
            isButtonDisabled(amountEmpty);
        } else {
            isButtonDisabled(false);
        }
    }, [foodStore.foods, foodStore.age, foodStore.group])

    const button = () => {
        return (buttonDisabled
            ? <button disabled>Näringsberäkna min måltid</button>
            : <button onClick={sendData}>Näringsberäkna min måltid</button>);
    }


    return(
            <div className="flex-col-start-start form">
                <Foods/>
                <PersonalInfo/>
                {button()}
            </div>
      )

});