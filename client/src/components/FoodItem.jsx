import React from 'react';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export const FoodItem = ({id, name, amount, deleteFoodItem, changeAmount}) => {
    return(
        <div className="flex-row-between-center fill">
            <input type="text" disabled className="fill-fifty" defaultValue={name}/>
            <input type="text" placeholder="Mängd i gram.." className="fill-twenty" onBlur={changeAmount}/>
            <button className="delete-button" onClick={deleteFoodItem}><DeleteOutlineIcon className="icon"/></button>
        </div>
    )
}