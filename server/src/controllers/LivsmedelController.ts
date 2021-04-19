import {Request, Response} from 'express';
import {Livsmedel} from "../entities/Livsmedel";
import {getConnection, Like} from "typeorm";

export const livsmedelController = {
    async byInput (req: Request, res: Response){
        const limit = parseInt(<string>req.query.limit);
        let input = req.params.input;

        const sql = `SELECT namn from Livsmedel where namn LIKE '%${input}%' ORDER BY CASE WHEN namn LIKE '${input}%' THEN 1 WHEN namn LIKE '%${input}' THEN 3 ELSE 2 END LIMIT ${limit}`;

        const foods = await getConnection().query(sql);

        console.log(foods)
        res.json(foods);
    }
}

