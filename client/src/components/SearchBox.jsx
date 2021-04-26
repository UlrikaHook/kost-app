import React, {useEffect, useState} from 'react';
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";
import { v4 as uuidv4 } from 'uuid';
import CloseIcon from '@material-ui/icons/Close';

export const SearchBox = observer(({hideSearchBox}) => {

    const {searchStore} = useStores();
    const {foodStore} = useStores();
    const [input, setInput] = useState("");

    useEffect(() => {
        async function loadSearchResult() {
            await searchStore.getSearchResult(input);
        }
        if(input.length > 1) {
            loadSearchResult().catch(e => console.log(e));
        }
    }, [searchStore, input]);

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
                <div key={item.namn} className="result-item" onClick={() => addFoodItem(item.namn)}>{item.namn}</div>
            )
        })
    }

    return(
        <>
            <div className="flex-col-start-center search-box">
                <div className="flex-row-center-center fill">
                    <input className="search-input fill-fifty" placeholder="Sök livsmedel..." onChange={changeInput} autoFocus/>
                    <CloseIcon className="icon cancel-button" onClick={hideSearchBox}/>
                </div>
                <div className="result-box flex-col-start-start fill-fifty">
                    {foodResults()}
                </div>
            </div>

        </>
    )
});