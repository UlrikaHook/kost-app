import {makeAutoObservable} from "mobx";
import client from "../client/ApiClient"

export class SearchStore {

    result = {
        results: []
    };

    constructor() {
        makeAutoObservable(this);
        this.client = client;
    }

    async getSearchResult(input) {
        this.result = await client.get(`/foods/${input}?limit=10`);
    }

}