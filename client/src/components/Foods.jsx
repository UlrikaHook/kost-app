
import AddIcon from "@material-ui/icons/Add";
import React, { useState} from "react";
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

    const deleteFoodItem = (id) => {
        console.log(`id att ta bort: ${id}`)
        foodStore.removeFoodItem(id);
    }

    const changeAmount = (e) => {
        console.log(`id: ${e.target.id}, value: ${e.target.value}`)
        foodStore.changeFoodItem(e.target.id, e.target.value);
    }

    const foodComponents = () => {
        return foodStore.foods.map((food) => {
            return(
                <FoodItem
                    key={food.id}
                    id={food.id}
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
