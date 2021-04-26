import {FoodStore} from "../stores/FoodStore";
import React from 'react';
import {SearchStore} from "../stores/SearchStore";
import {ViewStore} from "../stores/ViewStore";


const foodStore = new FoodStore();
const searchStore = new SearchStore();
const viewStore = new ViewStore();

export const stores = React.createContext({
    foodStore,
    searchStore,
    viewStore
});