import {makeAutoObservable} from "mobx";

export class PersonInfoStore {

    age = undefined;
    group = "";

    constructor() {
        makeAutoObservable(this);
    }

    changeAge(age){
        this.age = age;
    }

    changeGroup(group){
       this.group = group;
    }
}