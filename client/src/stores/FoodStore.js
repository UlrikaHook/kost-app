import {makeAutoObservable} from "mobx";

export class FoodStore {

    foods = [];

    constructor() {
        makeAutoObservable(this);
    }

    addFoodItem(item){
        this.foods.push(item);
    }

    removeFoodItem(itemId){
        this.foods = this.foods.filter(food => itemId !== food.id);
    }

    changeFoodItem(itemId, itemValue){
        this.foods = this.foods.map(food => {
            if(itemId === food.id){
                food.amount = itemValue;
            }
            return food;
        })
    }
}