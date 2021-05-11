import React from 'react';
import { Form } from '../components/Form';
import {useStores} from "../hooks/useStores";
import {observer} from "mobx-react";
import {Feedback} from "./Feedback";

export const Register = observer(() => {

    const { viewStore } = useStores();

    const titleText = () => {
        return viewStore.showForm ? "Registrera måltid" : "Återkoppling"
    }

    const containerComponent = () => {
        return viewStore.showForm ? <Form/> : <Feedback/>
    }

    return (
        <div className=" view flex-row-start-start height-sixty">
            <div className="title fill-twenty flex-row-center-center">{titleText()}</div>
            {containerComponent()}
        </div>

    );
});