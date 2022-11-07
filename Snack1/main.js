/*
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let newArray = [];

let min = parseInt(prompt("Inserisci il numero minore:"));

let max = parseInt(prompt("inserisci il numero maggiore"));

if (min < 0 || max > (myArray.length - 1)) {
    alert("Inserire i numeri minore e maggiore nella sequenza corretta")
    location.reload();
} else {
    ciclo1()

    ciclo2();
}



function ciclo1() {
    myArray.forEach((element, index) => {
        if (index >= min && index <= max) {
            newArray.push(element)
        }
    });
    console.log(newArray);
}


function ciclo2() {
    let names = myArray.filter((element, index) => {
        if (index >= min && index <= max) {
            return true;
        }
        return false;
    });
    console.log(names);
}