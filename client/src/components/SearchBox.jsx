import React, {useEffect, useState} from 'react';
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";
import { v4 as uuidv4 } from 'uuid';

export const SearchBox = observer(({hideSearchBox}) => {

    // Hantera sök, lägg input i ett state. Använd search-store som kontinuerligt uppdaterar sökresultat.

    //Lägg till kryss-knapp om man vill stänga sök utan att lägga till något.

    const {searchStore} = useStores();
    const {foodStore} = useStores();
    const [input, setInput] = useState("");

    const loadSearchResult = async() => {
        await searchStore.getSearchResult(input);
    }

    useEffect(() => {
        //load result from db
        loadSearchResult().catch(e => console.log(e));

    }, [input]);



    const changeInput = (event) => {
        setInput(event.target.value);
    };

    const addFoodItem = (name) => {
        const item = {
            name: name,
            amount: undefined,
            id: uuidv4()
        }
        foodStore.addFoodItem(item);
        searchStore.clearResult();
        hideSearchBox();
    }

    const foodResults = () => {
        return (searchStore.result === undefined || searchStore.result.length === 0) ? null : searchStore.result.map(item => {
            return(
                <div className="result-item" onClick={() => addFoodItem(item.namn)}>{item.namn}</div> //Lägg till key prop
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