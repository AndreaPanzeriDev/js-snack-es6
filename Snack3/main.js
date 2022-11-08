/*
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//global variable
let limit = 1000;
let lighter_one;


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



//start i cicle to check every single object in the array
for(let i = 0; i < bike.length; i++){
    //take name and kg
    let {name, kg} = bike[i];
    //check with an global variable if the selected bike is lighter
    if(kg < limit){
        //if is lighter safe into global variable
        limit=kg;
        lighter_one = name;
    }
}

//print the data from the global variable
console.log(`la bici più leggera è ${lighter_one} e pesa ${limit}kg`);