import React, {useEffect, useState} from 'react';
import { Foods } from "./Foods";
import { PersonalInfo } from "./PersonalInfo"
import {observer} from "mobx-react";
import {useStores} from "../hooks/useStores";


export const Form = observer(() => {

    //onaction för knapp att näringsberäkna

    const [ buttonDisabled, isButtonDisabled ] = useState(true);
    const { foodStore } = useStores();

    const sendData = async () => {
        await foodStore.sendData();
        //Redirecta till ny vy. Denna vy ska innehålla länk tillbaka till Register.
        //Ska inte gå att klicka på om foods, ålder eller grupp är oifylld.
    }

    useEffect(() => {
        if(foodStore.foods.length === 0 || foodStore.age === undefined || foodStore.group === ""){
            isButtonDisabled(true);
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
        <div className="flex-col-start-start fill-eighty form">
                <Foods/>
                <PersonalInfo/>
            {button()}
        </div>
    );

});