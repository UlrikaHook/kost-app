import React, {useEffect, useState} from 'react';

export const SearchBox = ({addFoodsFiels}) => {

    // Hantera sök, lägg input i ett state. Använd search-store som kontinuerligt uppdaterar sökresultat.

    const [input, setInput] = useState("");
    const [result, setResult] = useState([{name: ""}]);

    useEffect(() => {
        //load result from db
        setResult([{name: "Ost 33%"}, {name: "Ost 17%"}])
    }, [input]);

    const changeInput = (event) => {
        setInput(event.target.value);
    };

    const foodResults = () => {
        return result.map(item => {
            return(
                <div className="result-item" onClick={() => addFoodsFiels(item.name)}>{item.name}</div> //Lägg till key prop
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
}