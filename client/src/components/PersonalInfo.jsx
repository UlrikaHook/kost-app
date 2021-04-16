import React from "react";
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";

export const PersonalInfo = observer(() => {

    const { personInfoStore } = useStores();

    const changeGroup = (event) => {
        personInfoStore.changeGroup(event.target.value);
    }

    const changeAge = (event) => {
        personInfoStore.changeAge(event.target.value);
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

});
