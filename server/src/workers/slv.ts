import convert from "xml-js";
import axios from "axios";
import {createConnection} from "typeorm";
import {Naringsamne} from "../entities/Naringsamne";
import naringsamnen from "./naringsamnen";
import {Livsmedel} from "../entities/Livsmedel";
import {Naringsvarde} from "../entities/Naringsvarde";

(async()=> {
    await createConnection()
    await createNutritionData()
    await importData()
})();

const createNutritionData = async() => {
    naringsamnen.forEach(async(naringamne) => {
        await Naringsamne.save(Naringsamne.create(naringamne));
        console.log(`Sparar naringsamne ${naringamne.namn}`)
    })
}

const importData = async() => {
    const url = "http://www7.slv.se/apilivsmedel/LivsmedelService.svc/Livsmedel/Naringsvarde/20210317";

    const response = await axios.get(url);
    const xml = response.data;
    let result : any;
    result = convert.xml2js(xml, {compact: true});

    result.LivsmedelDataset.LivsmedelsLista.Livsmedel.forEach(async (lm) => {
        const livsmedel = {
            namn: lm.Namn._text,
            nummer: lm.Nummer._text,
            huvudgrupp: lm.Huvudgrupp._text
        };

        await Livsmedel.save(Livsmedel.create(livsmedel));
        console.log(`Sparar livsmedel ${livsmedel.namn}`)

        lm.Naringsvarden.Naringsvarde.forEach(async (varde) => {
            let namn;
            switch(varde.Namn._text){
                case "Energi (kcal)":
                    namn = "Energi";
                    break;
                case "Summa fleromättade fettsyror":
                    namn = "Fleromättat fett";
                    break;
                case "Summa enkelomättade fettsyror":
                    namn = "Enkelomättat fett";
                    break;
                case "Summa mättade fettsyror":
                    namn = "Mättat fett";
                    break;
                default:
                    namn = varde.Namn._text;
            }
            const naringsamne = await Naringsamne.findOne(namn);
            if(naringsamne !== undefined){
                const naringsvarde = {
                    varde: parseFloat(varde.Varde._text.replace(",", ".")),
                    gramLivsmedel: lm.ViktGram._text,
                    livsmedel: await Livsmedel.findOne(livsmedel.namn),
                    naringsamne: naringsamne
                }

                await Naringsvarde.save(Naringsvarde.create(naringsvarde));
                console.log(`Sparar naringsvarde ${naringsvarde.naringsamne.namn} med värde ${naringsvarde.varde}`)
            } else {
                console.log("Näringsvärde ej sparat för aktuellt näringsämne");
            }
        });

    })


}
