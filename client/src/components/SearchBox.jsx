import React, {useEffect, useState} from 'react';
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";

export const SearchBox = observer(({hideSearchBox}) => {

    // Hantera sök, lägg input i ett state. Använd search-store som kontinuerligt uppdaterar sökresultat.

    //Lägg till kryss-knapp om man vill stänga sök utan att lägga till något.
    
    const {searchStore} = useStores();
    const {foodStore} = useStores();
    const [input, setInput] = useState("");
    const [result, setResult] = useState([{name: ""}]);

    useEffect(() => {
        //load result from db
        setResult([{name: "Ost 33%"}, {name: "Ost 17%"}])
    }, [input]);

    const changeInput = (event) => {
        setInput(event.target.value);
    };

    const addFoodItem = (item) => {
        foodStore.addFoodItem(item);
        hideSearchBox();
    }

    const foodResults = () => {
        return result.map(item => {
            return(
                <div className="result-item" onClick={() => addFoodItem(item)}>{item.name}</div> //Lägg till key prop
            )
        })
    }

    return(
        <>
            <div className="flex-col-start-center search-box">
                <input className="search-input fill-fifty" placeholder="Sök livsmedel..." onChange={changeInput} autoFocus/>

                <div className="result-box flex-col-start-start fill-fifty">
                    {foodResults()}
                </div>
            </div>

        </>
    )
});