import {FoodStore} from "../stores/FoodStore";
import React from 'react';
import {PersonInfoStore} from "../stores/PersonInfoStore";


const foodStore = new FoodStore();
const personInfoStore = new PersonInfoStore();

export const stores = React.createContext({
    foodStore,
    personInfoStore
});