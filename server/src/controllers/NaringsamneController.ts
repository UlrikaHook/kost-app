import {Request, Response} from "express";
import {Livsmedel} from "../entities/Livsmedel";
import {Naringsamne} from "../entities/Naringsamne";

export const naringsamneController = {
    async summary(req: Request, res: Response) {
        const age = req.body.age;
        const group = req.body.group;
        const foods = req.body.foods;
        let person : any;

        if(req.body.group === "gravida" || req.body.group === "ammande"){
            person = group;
        } else {
            person = group + age;
        }

        const naringsamnen = await Naringsamne.find({select: ["namn", "enhet"]});
        let nutrientsResult : {name: string, intake: any, unit: string, percent: any}[] = naringsamnen.map(naringsamne => {
            return({
                name: naringsamne.namn,
                intake: 0,
                unit: naringsamne.enhet,
                percent: 0
            })
        })

        /*let energy: {carbohydrate: any, protein: any, fat: any}= {
            carbohydrate: 0,
            protein: 0,
            fat: 0
        }*/
        let energy: {carbohydrate: { name: string, percent: any, recommended: string }, protein: { name: string, percent: any, recommended: string  }, fat: { name: string, percent: any, recommended: string  }}= {
            carbohydrate: {
                name: "Kolhydrater",
                percent: 0,
                recommended: "45-60 E%"
            },
            protein: {
                name: "Protein",
                percent: 0,
                recommended: "10-20 E%"
            },
            fat: {
                name: "Fett",
                percent: 0,
                recommended: "25-40 E%"
            }
        }

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

                if(naringsvarde.naringsamne.namn === "Energi"){
                    console.log(`Kcal per 100 g livsmedel: ${naringsvarde.varde}, per 1 g livsmedel: ${naringsvarde.varde/100}, Kcal i angiven  mängd livsmedel: ${naringsvarde.varde/100*foodItem.amount}`)
                }

                //Lägger till kcal per makronutrient om det aktuella närinsämnet är kh/pr/fett
                switch(naringsvarde.naringsamne.namn){
                    case "Kolhydrater":
                        energy.carbohydrate.percent += ((naringsvarde.varde/100)*foodItem.amount*4);
                        break;
                    case "Protein":
                        energy.protein.percent += ((naringsvarde.varde/100)*foodItem.amount*4);
                        break;
                    case "Fett":
                        energy.fat.percent += ((naringsvarde.varde/100)*foodItem.amount*9);
                        break;
                    default:
                        break;
                }
            })
        }

        //console.log(`3. Efter looparna: ${JSON.stringify(nutrientsResult)} -- ${JSON.stringify(energy)}`)
        let totalEnergy = 0;

        nutrientsResult.forEach(nutrient => {
            nutrient.percent = nutrient.percent.toFixed(1);
            totalEnergy = nutrient.name === "Energi" ? nutrient.intake : totalEnergy;
            nutrient.intake = nutrient.intake.toFixed(1);
        })

        energy.fat.percent = ((energy.fat.percent/totalEnergy)*100).toFixed(1);
        energy.carbohydrate.percent = ((energy.carbohydrate.percent/totalEnergy)*100).toFixed(1);
        energy.protein.percent = ((energy.protein.percent/totalEnergy)*100).toFixed(1);

        const response = {nutrients: nutrientsResult, energyPercent: energy};
        //console.log(`4. Responsen ${JSON.stringify(response)}`)

        res.json(response);

    }
}