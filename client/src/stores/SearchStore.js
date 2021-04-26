import {makeAutoObservable} from "mobx";
import client from "../client/ApiClient"

export class SearchStore {

    result =[];

    constructor() {
        makeAutoObservable(this);
        this.client = client;
    }

    setResult(result) {
        this.result = result;
    }

    async getSearchResult(input) {
        const response = await client.get(`/foods/${input}?limit=20`);
        this.setResult(response);
    }

    clearResult(){
        this.setResult([]);
    }



}