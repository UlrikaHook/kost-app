import {makeAutoObservable} from "mobx";

export class ViewStore {

    showForm = true;

    constructor(){
        makeAutoObservable(this);
    }

    setShowForm(bool){
        this.showForm = bool;
    }
}