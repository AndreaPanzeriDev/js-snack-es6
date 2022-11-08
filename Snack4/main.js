/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


//global var
const maxpoints = 10;
const maxfouls = 5;
let info = [];

const football_team = [
    {
        name: "milan",
        points: 0,
        fouls: 0,
    },
    {
        name: "inter",
        points: 0,
        fouls: 0,
    },
    {
        name: "juventus",
        points: 0,
        fouls: 0,
    },
    {
        name: "fiorentina",
        points: 0,
        fouls: 0,
    },
    {
        name: "napoli",
        points: 0,
        fouls: 0,
    },
    {
        name: "atalanta",
        points: 0,
        fouls: 0,
    },
];



randomNumber();
newArray();


function randomNumber() {
    for (let i = 0; i < football_team.length; i++) {
        let rnpoint = Math.round(Math.random() * maxpoints);
        let rnfouls = Math.round(Math.random() * maxfouls);
        football_team[i].points = rnpoint;
        football_team[i].fouls = rnfouls;
    }
    console.log(football_team);
}



function newArray(){
    for (let i = 0; i < football_team.length; i++){
        let {name, fouls} = football_team[i];
        let obj = {...football_team, name, fouls};
        info.push(obj);
    }
    console.log(info);
}