import React from 'react';
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";

export const Feedback = observer(() => {

    const { foodStore } = useStores();
    const { viewStore } = useStores();

    const macroNutrients = () => {
        return foodStore.result.nutrients.map(nutrient => {
            if(nutrient.name === "Energi" || nutrient.name === "Kolhydrater" || nutrient.name === "Protein" || nutrient.name === "Fett"){
                return(
                    <div className="flex-row-between-start fill">
                        <div className="column">{nutrient.name}</div>
                        <div className="column">{nutrient.intake} {nutrient.unit}</div>
                        <div className="column">{nutrient.percent} %</div>
                    </div>
                )
            }
            return null;
        })
    }

    const microNutrients = () => {
        return foodStore.result.nutrients.map(nutrient => {
            if(nutrient.name !== "Energi" && nutrient.name !== "Protein" && nutrient.name !== "Kolhydrater" && nutrient.name !== "Fett"){
                return(
                    <div className="flex-row-between-start fill">
                        <div className="column">{nutrient.name}</div>
                        <div className="column">{nutrient.intake} {nutrient.unit}</div>
                        <div className="column">{nutrient.percent} %</div>
                    </div>
                )
            }
            return null;
        })
    }

    const header = () => {
        return(
            <div className="flex-row-between-start fill column-header">
                <div className="column">Näringsämne</div>
                <div className="column">Ditt intag</div>
                <div className="column">Andel av Rekommenderat Dagligt Intag</div>
            </div>
        )
    }

    const energyHeader = () => {
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
    }

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

    return (
        <div className="flex-col-start-center form">
            {registeredMeal()}
            <div className="section-header">Energigivande näringsämnen</div>
            {header()}
            {macroNutrients()}
            <div className ="section-header">Energiprocent</div>
            {energyHeader()}
            {energyPercent()}
            <div className="section-header">Övriga näringsämnen</div>
            {header()}
            {microNutrients()}
            <button onClick={redirect}>Ny registrering</button>
        </div>)


});