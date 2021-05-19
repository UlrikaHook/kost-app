import {nutrientsText} from "./nutrientTexts";
import {Advice, NutrientResult, Result} from "./interfaces";

export const createSortedResult = (nutrientsResult: NutrientResult[]): Result => {
    let totalEnergy = 0;

    nutrientsResult.forEach(nutrient => {
        nutrient.percent = nutrient.percent.toFixed(1);
        totalEnergy = nutrient.name === "Energi" ? nutrient.intake : totalEnergy;
        nutrient.intake = nutrient.intake.toFixed(1);
    })

    const macro = ["Kolhydrater", "Protein", "Fett"];
    const fat = ["Fleromättat fett", "Enkelomättat fett", "Mättat fett"];
    const other = ["Energi", "Salt"];

    let macroNutrients: NutrientResult[] = [];
    let microNutrients: NutrientResult[] = [];
    let otherNutrients: NutrientResult[] = [];
    let fatQuality:  NutrientResult[] = [];

    nutrientsResult.forEach(nutrient => {
        if(macro.includes(nutrient.name)){
            macroNutrients.push(nutrient);
        } else if(other.includes(nutrient.name)){
            otherNutrients.push(nutrient);
        } else if(fat.includes(nutrient.name)) {
            fatQuality.push(nutrient);
        } else {
            microNutrients.push(nutrient);
        }
    })

    let advice: Advice[] = [];
    otherNutrients.forEach(nutrient => {
        if(nutrient.name === "Salt" && parseFloat(nutrient.percent) > 100) {
            advice.push({name: nutrient.name, link: nutrientsText.Salt.link, text: nutrientsText.Salt.text });
        }
    })

    macroNutrients.forEach(nutrient =>{
        if(nutrient.name === "Protein" && nutrient.percent < 90){
            advice.push({name: nutrient.name, link: nutrientsText.Protein.link, text: nutrientsText.Protein.text });
        }
    })

    fatQuality.forEach(nutrient => {
        switch (nutrient.name){
            case "Mättat fett":
                if(parseFloat(nutrient.percent) > 110){
                    advice.push({name: nutrient.name, link: nutrientsText.Mättatfett.link, text: nutrientsText.Mättatfett.text });
                }
                break;
            case "Enkelomättat fett":
            case "Fleromättat fett":
                const shortName = nutrient.name.replace(" ", "");
                console.log(shortName)
                if(parseFloat(nutrient.percent) < 90) {
                    advice.push({
                        name: nutrient.name,
                        link: nutrientsText[shortName].link,
                        text: nutrientsText[shortName].text
                    });
                }
                break;
            default:
                break;
        }
    })

    microNutrients.forEach(nutrient => {
        if(parseFloat(nutrient.percent) < 80) {
            const shortName = nutrient.name.replace(" ", "");
            advice.push({name: nutrient.name, link: nutrientsText[shortName].link, text: nutrientsText[shortName].text });
        }
    })

    const response : Result = {
        macroNutrients,
        fatQuality,
        microNutrients,
        otherNutrients,
        advice};

    return response;
}