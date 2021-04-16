
class ApiClient {

    constructor(){
        this.baseUrl = "http://localhost:3131";
    }

    //metod för att skicka insamlad data och returnera resultat av uträkning (POST)

    //metod för att skicka sökord och returnera limiterat resultat (POST)

    async post(url, data){
        const response = await fetch( this.baseUrl + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            cors: "cors",
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async get(url){
        const response = await fetch(this.baseUrl + url, {
            method: "GET",
            cors: "cors"
        });
        return await response.json();
    }
}

export default new ApiClient();