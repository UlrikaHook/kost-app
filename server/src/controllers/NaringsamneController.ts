import {Request, Response} from "express";
import {Livsmedel} from "../entities/Livsmedel";
import {Naringsamne} from "../entities/Naringsamne";
import {createSortedResult} from "../helpers/SortedResult";
import {Foods, NutrientResult} from "../helpers/interfaces";


export const naringsamneController = {
    async summary(req: Request, res: Response) {
        const age :string = req.body.age;
        const group :string = req.body.group;
        const foods :Foods[] = req.body.foods;
        let person :string;

        if(req.body.group === "gravida" || req.body.group === "ammande"){
            person = group;
        } else {
            person = group + age;
        }

        const naringsamnen = await Naringsamne.find({select: ["namn", "enhet"]});
        let nutrientsResult : NutrientResult[] = naringsamnen.map(naringsamne => {
            return({
                name: naringsamne.namn,
                intake: 0,
                unit: naringsamne.enhet,
                percent: 0
            })
        })

        //Loopar igenom livsmedel ifyllda från clienten
        for(const foodItem of foods){

            //Hämtar all data för aktuellt livsmedel
            const foodResponse = await Livsmedel.findOne(foodItem.name);

            //Loopar igenom aktuellt livsmedels näringsvärden
            foodResponse.naringsvarden.forEach(naringsvarde => {

                //Hittar rätt näringsämne i resultat-arrayen, och adderar näringsvärden till resultatet
                nutrientsResult.forEach(result => {
                    if(result.name === naringsvarde.naringsamne.namn){
                        result.intake += (naringsvarde.varde/100)*foodItem.amount;
                        result.percent += (((naringsvarde.varde/100)*foodItem.amount)/naringsvarde.naringsamne[person])*100;
                    }
                })
            })
        }

        res.json(createSortedResult(nutrientsResult));

    }
}