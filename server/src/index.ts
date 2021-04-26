import {livsmedelController} from "./controllers/LivsmedelController";
import {naringsamneController} from "./controllers/NaringsamneController";
const express = require("express");
const cors = require("cors");
import {Express, Response, Request, NextFunction} from "express";
import { createConnection } from "typeorm";



const app = express();
const port = 3131;
const start = async () => {
    app.use(cors({origin: "*",}));
    app.use(express.json());

    app.get("/foods/:input", livsmedelController.byInput)
    app.post("/feedback", naringsamneController.summary)

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}


(async () => {
    try {
        await createConnection();
        start();
    } catch (e) {
        console.error(e);
    }
})();
