import React from 'react';
import { Form } from '../components/Form';

export const Register = () => {
    return (
        <div className=" view flex-row-start-start height-sixty">
            <div className="title fill-twenty flex-row-center-center">Registrera måltid</div>
            <Form/>
        </div>

    );
}