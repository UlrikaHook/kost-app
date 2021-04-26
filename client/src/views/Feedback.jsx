import React from 'react';
import {useStores} from "../hooks/useStores";

export const Feedback = () => {

    const { foodStore } = useStores();
    //Redirected here from Button Näringsberäkna. Displays result from resultStore.

    const nutrientComponents = () => {
        return foodStore.result.nutrients.map(nutrient => {
            return(
                <div className="flex-row-between-start fill">
                    <div>{nutrient.name}</div>
                    <div>{nutrient.intake}{nutrient.unit}</div>
                    <div>{nutrient.percent}%</div>
                </div>

            )
        })
    }

    return(
        <div className="flex-col-start-center form">
            {nutrientComponents()}
        </div>
    )

}