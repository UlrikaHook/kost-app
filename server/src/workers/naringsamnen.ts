const naringsamnen = [
    {
        namn: "Vitamin A",
        enhet: "RE",
        K18_30: 700,
        K31_60: 700,
        K61_74: 700,
        K75: 700,
        gravida: 800,
        ammande: 1100,
        M18_30: 900,
        M31_60: 900,
        M61_74: 900,
        M75: 900
    },
    {
        namn: "Vitamin D",
        enhet: "µg",
        K18_30: 10,
        K31_60: 10,
        K61_74: 10,
        K75: 20,
        gravida: 10,
        ammande: 10,
        M18_30: 10,
        M31_60: 10,
        M61_74: 10,
        M75: 20
    },
    {
        namn: "Vitamin E",
        enhet: "α-TE",
        K18_30: 8,
        K31_60: 8,
        K61_74: 8,
        K75: 8,
        gravida: 10,
        ammande: 11,
        M18_30: 10,
        M31_60: 10,
        M61_74: 10,
        M75: 10
    },
    {
        namn: "Tiamin",
        enhet: "mg",
        K18_30: 1.1,
        K31_60: 1.1,
        K61_74: 1.0,
        K75: 1.0,
        gravida: 1.5,
        ammande: 1.6,
        M18_30: 1.4,
        M31_60: 1.3,
        M61_74: 1.2,
        M75: 1.2
    },
    {
        namn: "Riboflavin",
        enhet: "mg",
        K18_30: 1.3,
        K31_60: 1.2,
        K61_74: 1.2,
        K75: 1.2,
        gravida: 1.6,
        ammande: 1.7,
        M18_30: 1.6,
        M31_60: 1.5,
        M61_74: 1.4,
        M75: 1.3
    },
    {
        namn: "Niacin",
        enhet: "NE",
        K18_30: 15,
        K31_60: 14,
        K61_74: 13,
        K75: 13,
        gravida: 17,
        ammande: 20,
        M18_30: 19,
        M31_60: 18,
        M61_74: 16,
        M75: 15
    },
    {
        namn: "Vitamin B6",
        enhet: "mg",
        K18_30: 1.2,
        K31_60: 1.2,
        K61_74: 1.3,
        K75: 1.3,
        gravida: 1.4,
        ammande: 1.5,
        M18_30: 1.5,
        M31_60: 1.5,
        M61_74: 1.5,
        M75: 1.5
    },
    {
        namn: "Folat",
        enhet: "µg",
        K18_30: 400,
        K31_60: 300,
        K61_74: 300,
        K75: 300,
        gravida: 500,
        ammande: 500,
        M18_30: 300,
        M31_60: 300,
        M61_74: 300,
        M75: 300
    },
    {
        namn: "Vitamin B12",
        enhet: "µg",
        K18_30: 2.0,
        K31_60: 2.0,
        K61_74: 2.0,
        K75: 2.0,
        gravida: 2.0,
        ammande: 2.6,
        M18_30: 2.0,
        M31_60: 2.0,
        M61_74: 2.0,
        M75: 2.0
    },
    {
        namn: "Vitamin C",
        enhet: "mg",
        K18_30: 75,
        K31_60: 75,
        K61_74: 75,
        K75: 75,
        gravida: 85,
        ammande: 100,
        M18_30: 75,
        M31_60: 75,
        M61_74: 75,
        M75: 75
    },
    {
        namn: "Kalcium",
        enhet: "mg",
        K18_30: 800,
        K31_60: 800,
        K61_74: 800,
        K75: 800,
        gravida: 900,
        ammande: 900,
        M18_30: 800,
        M31_60: 800,
        M61_74: 800,
        M75: 800
    },
    {
        namn: "Järn",
        enhet: "mg",
        K18_30: 15,
        K31_60: 15,
        K61_74: 9,
        K75: 9,
        gravida: 15,
        ammande: 15,
        M18_30: 9,
        M31_60: 9,
        M61_74: 9,
        M75: 9
    },
    {
        namn: "Zink",
        enhet: "mg",
        K18_30: 7,
        K31_60: 7,
        K61_74: 7,
        K75: 7,
        gravida: 9,
        ammande: 11,
        M18_30: 9,
        M31_60: 9,
        M61_74: 9,
        M75: 9
    },
    {
        namn: "Selen",
        enhet: "µg",
        K18_30: 50,
        K31_60: 50,
        K61_74: 50,
        K75: 50,
        gravida: 60,
        ammande: 60,
        M18_30: 60,
        M31_60: 60,
        M61_74: 60,
        M75: 60
    },
    {
        namn: "Energi",
        enhet: "kcal",
        K18_30: 2300,
        K31_60: 2100,
        K61_74: 1900,
        K75: null,
        gravida: 2600,
        ammande: 2600,
        M18_30: 2800,
        M31_60: 2600,
        M61_74: 2300,
        M75: null
    },
    {
        namn: "Protein",
        enhet: "g",
        K18_30: 86,
        K31_60: 78,
        K61_74: 71,
        K75: null,
        gravida: 98,
        ammande: 98,
        M18_30: 105,
        M31_60: 98,
        M61_74: 86,
        M75: null
    },
    {
        namn: "Kolhydrater",
        enhet: "g",
        K18_30: 290,
        K31_60: 260,
        K61_74: 240,
        K75: null,
        gravida: 330,
        ammande: 330,
        M18_30: 350,
        M31_60: 330,
        M61_74: 290,
        M75: null
    },
    {
        namn: "Fett",
        enhet: "g",
        K18_30: 90,
        K31_60: 82,
        K61_74: 74,
        K75: null,
        gravida: 101,
        ammande: 101,
        M18_30: 109,
        M31_60: 101,
        M61_74: 90,
        M75: null
    },
    {
        namn: "Mättat fett",
        enhet: "g",
        K18_30: 25,
        K31_60: 23,
        K61_74: 21,
        K75: null,
        gravida: 29,
        ammande: 29,
        M18_30: 31,
        M31_60: 29,
        M61_74: 25,
        M75: null
    },
    {
        namn: "Enkelomättat fett",
        enhet: "g",
        K18_30: 38,
        K31_60: 35,
        K61_74: 32,
        K75: null,
        gravida: 43,
        ammande: 43,
        M18_30: 47,
        M31_60: 43,
        M61_74: 38,
        M75: null
    },
    {
        namn: "Fleromättat fett",
        enhet: "g",
        K18_30: 25,
        K31_60: 23,
        K61_74: 21,
        K75: null,
        gravida: 29,
        ammande: 29,
        M18_30: 31,
        M31_60: 29,
        M61_74: 25,
        M75: null
    },
    {
        namn: "Fibrer",
        enhet: "g",
        K18_30: 30,
        K31_60: 30,
        K61_74: 30,
        K75: 30,
        gravida: 30,
        ammande: 30,
        M18_30: 30,
        M31_60: 30,
        M61_74: 30,
        M75: 30
    },
    {
        namn: "Salt",
        enhet: "g",
        K18_30: 6,
        K31_60: 6,
        K61_74: 6,
        K75: 6,
        gravida: 6,
        ammande: 6,
        M18_30: 6,
        M31_60: 6,
        M61_74: 6,
        M75: 6
    }
]

export default naringsamnen;