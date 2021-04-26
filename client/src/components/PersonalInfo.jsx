import React from "react";
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";

export const PersonalInfo = observer(() => {

    const { foodStore } = useStores();

    const changeGroup = (event) => {
        foodStore.setGroup(event.target.value);
    }

    const changeAge = (event) => {
        foodStore.setAge(event.target.value);
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
                        <label>Man<input type="radio" name="group" value="M"/></label>
                        <label>Kvinna<input type="radio" name="group" value="K"/></label>
                        <label>Gravid<input type="radio" name="group" value="gravida"/></label>
                        <label>Ammande<input type="radio" name="group" value="ammande"/></label>
                    </div>
                </div>
                <div className="flex-row-start-start fill">
                    <div className="fill-twenty">
                        Ålder
                    </div>
                    <div className="fill-eighty" onChange={changeAge}>
                        <label>18-30 år<input type="radio" name="age" value="18_30"/></label>
                        <label>31-60 år<input type="radio" name="age" value="31_60"/></label>
                        <label>61-74 år<input type="radio" name="age" value="61_74"/></label>
                        <label>över 75 år<input type="radio" name="age" value="75"/></label>
                    </div>
                </div>
            </div>
        </fieldset>
        );

});
