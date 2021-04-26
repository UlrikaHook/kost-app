import {makeAutoObservable} from "mobx";
import client from "../client/ApiClient"

export class FoodStore {

    foods = [];
    age = "";
    group = "";
    result = {};

    constructor() {
        makeAutoObservable(this);
        this.client = client;
    }

    setFoods(foods){
        this.foods = foods;
    }

    setAge(age){
        this.age = age;
    }

    setGroup(group){
        this.group = group;
    }

    setResult(result){
        this.result = result;
    }

    addFoodItem(item){
        this.setFoods([...this.foods, item]);
    }

    removeFoodItem(itemId){
        const newFoods = this.foods.filter(food => {
            return itemId !== food.id
        });
        this.setFoods(newFoods);
    }

    changeFoodItem(itemId, itemValue){
        const newFoods = this.foods.map(food => {
            console.log(`id i existerande array: ${food.id}, id från event: ${itemId}`)
            if(itemId === food.id){
                food.amount = parseInt(itemValue);
                console.log("hittar rätt id")
            }
            console.log(JSON.stringify(food))
            return food;
        })
        this.setFoods(newFoods);
    }

    async sendData(){
        const response = await client.post("/feedback", {foods: this.foods, age: this.age, group: this.group});
        this.setResult(response);
        console.log(JSON.stringify(this.result))
    }
}