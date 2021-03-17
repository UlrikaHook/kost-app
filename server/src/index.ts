
const express = require("express");
const cors = require("cors");
import {Response, Request} from "express";
import { createConnection } from "typeorm";


const app = express();
const port = 3131;
const start = async () => {
    app.use(
        cors({
            origin: "*",
        })
    );

    app.get("/", (req: Request, res: Response) => {
        res.json({"Works": "true"});
    })

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
