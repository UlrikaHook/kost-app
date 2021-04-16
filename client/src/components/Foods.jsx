
import AddIcon from "@material-ui/icons/Add";
import React, { useState, useEffect } from "react";
import {FoodItem} from "./FoodItem";
import {SearchBox} from "./SearchBox";
import {observer} from "mobx-react";
import {useStores} from "../hooks/useStores";

export const Foods = observer(() => {

    const { foodStore } = useStores();
    const [ showSearch, setShowSearch ] = useState(false);

    const hideSearchBox = () => {
        setShowSearch(false);
    }

    const showSearchBox = (e) => {
        setShowSearch(true);
    }

    const deleteFoodItem = (e) => {
        foodStore.removeFoodItem(e.target.id);
    }

    const changeAmount = (e) => {
        foodStore.changeFoodItem(e.target.id, e.target.value);
    }

    const foodComponents = () => {
        return foodStore.foods.map((food, index) => {
            return(
                <FoodItem
                    key={`${index}`}
                    id=""
                    name={food.name}
                    amount={food.amount}
                    deleteFoodItem={deleteFoodItem}
                    changeAmount={changeAmount}/>
            )
        })

    }

    const searchBox = () => {
        return(
            showSearch
                ? <SearchBox hideSearchBox={hideSearchBox}/>
                : null
        )
    }

    return(
            <fieldset>
                <legend>Vad bestod din måltid av?</legend>
                <div className= {showSearch ? "flex-col-start-start filter" : "flex-col-start-start"} >
                    {foodComponents()}
                    <button className="add-button" onClick={showSearchBox}><AddIcon className="icon"/></button>
                </div>
                {searchBox()}
            </fieldset>
        );
});
