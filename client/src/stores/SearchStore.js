import {makeAutoObservable} from "mobx";
import client from "../client/ApiClient"

export class SearchStore {

    result =[];
    constructor() {
        makeAutoObservable(this);
        this.client = client;
    }

    async getSearchResult(input) {
        console.log(input)
        this.result = await client.get(`/foods/${input}?limit=20`);
        console.log(JSON.stringify(this.result))
    }

    async clearResult(){
        this.result = [];
    }

}