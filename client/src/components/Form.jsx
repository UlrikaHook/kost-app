import React from 'react';
import { Foods } from "./Foods";
import { PersonalInfo } from "./PersonalInfo"


export const Form = () => {

    //onaction för knapp att näringsberäkna

    return(
        <div className="flex-col-start-start fill-eighty form">
                <Foods/>
                <PersonalInfo/>
                <button>Näringsberäkna min måltid</button>
        </div>
    );

}