import React, {useEffect, useState} from "react";

export const PersonalInfo = () => {

    //states för att hantera ifyllda uppgifter
    //bör ligga i parent? Endast metoder här som anropar ändra state i parent

    const [ group, setGroup ] = useState("");
    const [ age, setAge ] = useState("");

    useEffect(() => {
        console.log(group);
    })

    const changeGroup = (event) => {
        if(event.target.name === "femaleOptions" && event.target.value === ""){
            setGroup("female")
        }
        setGroup(event.target.value);
    }

    const changeAge = (event) => {

        setAge(event.target.value);
    }

    return(
        <fieldset>
            <legend>Dina uppgifter</legend>
            <div className="flex-col-start-start">
                <div className="flex-row-start-start fill">
                    <div className="fill-twenty">
                        Målgrupp
                    </div>
                    <div className="fill-eighty" onChange={changeGroup}>
                        <label>Man<input type="radio" name="group" value="male"/></label>
                        <label>Kvinna<input type="radio" name="group" value="female"/></label>
                        <label>Gravid<input type="radio" name="group" value="pregnant"/></label>
                        <label>Ammande<input type="radio" name="group" value="breastfeeding"/></label>
                    </div>
                </div>
                <div className="flex-row-start-start fill">
                    <div className="fill-twenty">
                        Ålder
                    </div>
                    <div className="fill-eighty" onChange={changeAge}>
                        <label>18-30 år<input type="radio" name="age" value="eighteen"/></label>
                        <label>31-60 år<input type="radio" name="age" value="thirtyone"/></label>
                        <label>61-74 år<input type="radio" name="age" value="sixtyone"/></label>
                        <label>över 75 år<input type="radio" name="age" value="seventyfive"/></label>
                    </div>
                </div>
            </div>
        </fieldset>
        );

}
