/*
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/


const bike = [
    {
        name: "mountain_bike",
        kg: 6.8,
    },
    {
        name: "ciclocross",
        kg: 8,
    },
    {
        name: "pieghevole",
        kg: 9.8,
    }
];

let limit = 1000;
let lighter_one;

for(let i = 0; i < bike.length; i++){
    let {name, kg} = bike[i];
    if(kg < limit){
        limit=kg;
        lighter_one = name;
    }
}

console.log(`la bici più leggera è ${lighter_one} e pesa ${limit}kg`);