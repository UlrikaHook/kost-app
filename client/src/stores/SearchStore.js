import {makeAutoObservable} from "mobx";
import client from "../client/ApiClient"

export class SearchStore {

    result =[];
    constructor() {
        makeAutoObservable(this);
        this.client = client;
    }

    async getSearchResult(input) {
        this.result = await client.get(`/foods/${input}?limit=20`);
    }

    clearResult(){
        this.result = [];
    }

}