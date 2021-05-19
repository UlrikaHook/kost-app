import React, {useState} from 'react';
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";
import {Nutrients} from "../components/Nutrients";
import {Advice} from "../components/Advice";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export const Feedback = observer(() => {

    const { foodStore } = useStores();
    const { viewStore } = useStores();

    const [showAdvice, setShowAdvice] = useState(false);
    const [showNutrients, setShowNutrients] = useState(false);

    /*const energyHeader = () => {
        return(
            <div className="flex-row-between-start fill column-header">
                <div className="column">Näringsämne</div>
                <div className="column">Energiprocent av måltiden</div>
                <div className="column">Rekommenderad daglig fördelning</div>
            </div>
        )
    }

    const energyPercent = () => {
        const array = [foodStore.result.energyPercent.carbohydrate, foodStore.result.energyPercent.protein, foodStore.result.energyPercent.fat];
        return array.map(nutrient => {
            return(
                <div className="flex-row-between-start fill">
                    <div className="column">{nutrient.name}</div>
                    <div className="column">{nutrient.percent} E%</div>
                    <div className="column">{nutrient.recommended}</div>
                </div>
            )
        })
    }*/

    const registeredMeal = () => {
        return foodStore.foods.map(food => {
            return(
                <div>{food.name}, {food.amount} g</div>
            )
        })
    }


    const redirect = () => {
        foodStore.setFoods([]);
        foodStore.setResult({})
        viewStore.setShowForm(true);
    }

    const advice = () => {
        return showAdvice
            ? <Advice/>
            : null
    }
    /*<div className ="section-header">Energiprocent</div>
    {energyHeader()}
    {energyPercent()}*/

    const nutrients = () => {
        return showNutrients
        ? <div className="fill flex-col-start-center">
                <Nutrients
                    nutrients={foodStore.result.otherNutrients}
                    title="Energi och Salt"
                    header={["", "Ditt Intag", "Andel av uppskattat behov"]}/>
                <Nutrients
                    nutrients={foodStore.result.macroNutrients}
                    title="Energigivande näringsämnen"
                    header={["Näringsämne", "Ditt Intag", "Andel av rekommenderat dagligt intag"]}/>
                <Nutrients
                    nutrients={foodStore.result.fatQuality}
                    title="Fettkvalitet"
                    header={["Fettsyra", "Ditt Intag", "Andel av rekommenderat dagligt intag"]}/>
                <Nutrients
                    nutrients={foodStore.result.microNutrients}
                    title="Övriga näringsämnen"
                    header={["Näringsämne", "Ditt Intag", "Andel av rekommenderat dagligt intag"]}/>
            </div>
        : null;
    }

    return (
        <div className="flex-col-start-center form">
                {registeredMeal()}

            <div className=" fill flex-row-between-center advice">
                <div className="section-header">Näringsinnehåll</div>
                {showNutrients ? <ExpandLessIcon onClick={()=>setShowNutrients(!showNutrients)}/> : <ExpandMoreIcon onClick={()=>setShowNutrients(!showNutrients)}/> }
            </div>
            {nutrients()}
            <div className=" fill flex-row-between-center advice">
                <div className="section-header">Vad kan förbättras?</div>
                {showAdvice ? <ExpandLessIcon onClick={()=>setShowAdvice(!showAdvice)}/> : <ExpandMoreIcon onClick={()=>setShowAdvice(!showAdvice)}/> }
            </div>
            {advice()}
            <button className="margin" onClick={redirect}>Ny registrering</button>
        </div>)


});