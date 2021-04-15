
import AddIcon from "@material-ui/icons/Add";
import React, { useState, useEffect } from "react";
import {FoodItem} from "./FoodItem";
import {SearchBox} from "./SearchBox";

export const Foods = () => {

    //skapa dynamiskt formulär, där man kan öka och minska antalet fält.

    const [ foods, setFoods ] = useState([]);
    const [ showSearch, setShowSearch ] = useState(false);

    useEffect(() => {
        console.log(foods);
    })

    const addFoodsField = (chosenName) => {
        setFoods(foods => [...foods, {name: chosenName, amount: "", id: ""}])
        setShowSearch(false);
    }

    const deleteFoodItem = (e) => {
        setFoods(foods => foods.filter(food => e.target.id !== food.id));
    }

    const showSearchBox = (e) => {
        setShowSearch(true);
    }

    const changeAmount = (e) => {
        const newFoods = foods.map(food => {
            if(e.target.id === food.id){
                food.amount = e.target.value;
            }
            return food;
        })
        setFoods(newFoods);
    }

    const foodComponents = () => {
        return foods.map((food, index) => {
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
                ? <SearchBox addFoodsFiels={addFoodsField}/>
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
}
