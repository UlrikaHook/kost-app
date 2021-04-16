import {makeAutoObservable} from "mobx";
import client from "../client/ApiClient"

export class FoodStore {

    foods = [];
    age = undefined;
    group = "";
    result = {};

    constructor() {
        makeAutoObservable(this);
        this.client = client;
    }

    addFoodItem(item){
        this.foods = [...this.foods, item];
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

    changeAge(age){
        this.age = age;
    }

    changeGroup(group){
        this.group = group;
    }

    async sendData(){
        this.result = await client.post("/feedback", {foods: this.foods, age: this.age, group: this.group})
    }
}