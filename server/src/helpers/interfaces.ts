export interface Foods {
    name: string
    amount: number
    id: string
}

export interface NutrientResult {
    name: string
    intake: any
    unit: string
    percent: any
}

export interface Advice {
    name: string
    link: string
    text: string
}

export interface Result {
    macroNutrients: NutrientResult[]
    fatQuality: NutrientResult[]
    microNutrients: NutrientResult[]
    otherNutrients: NutrientResult[]
    advice: Advice[]
}