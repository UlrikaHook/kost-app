import React from 'react';
import {observer} from "mobx-react";

export const Nutrients = observer(({nutrients, title, header}) => {

    const nutrientComponents = () => {
        return nutrients.map(nutrient =>{
            return(
                <div className="flex-row-between-start fill">
                    <div className="column">{nutrient.name}</div>
                    <div className="column">{nutrient.intake} {nutrient.unit}</div>
                    <div className="column">{nutrient.percent} %</div>
                </div>
            )
        })
    }

    return(
        <>
            <div className="section-header">{title}</div>
            <div className="flex-row-between-start fill column-header">
                <div className="column">{header[0]}</div>
                <div className="column">{header[1]}</div>
                <div className="column">{header[2]}</div>
            </div>
            {nutrientComponents()}
        </>


    )

});