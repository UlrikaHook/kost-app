import {FoodStore} from "../stores/FoodStore";
import React from 'react';
import {SearchStore} from "../stores/SearchStore";


const foodStore = new FoodStore();
const searchStore = new SearchStore();

export const stores = React.createContext({
    foodStore,
    searchStore
});