////////////ZAD 1////////////
//Napisz funkcję getNumber, która ma przyjmować dwa argumenty: liczbę i tablicę.
// Funkcja ta ma zwracać wartość true lub false,
// w zależności od tego czy podana liczba znajduje się w tablicy czy nie.
/*
function getNumber(num,tab){

    return tab.includes(num);
}
console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));
*/
//Napisz funkcję addTheSameNumbers, która ma przyjmować dwa argumenty:
// liczbę i tablicę. Funkcja ta ma zwracać sumę wszystkich elementów tablicy,
// które są równe liczbie podanej jako pierwszy argument funkcji.
// Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć null.
/*
function addTheSameNumbers(num, tab) {
    if(tab.includes(num)){
    console.log(tab.reduce((acc, el) => el === num ? acc += el : acc, 0));
    }else{
        console.log(null);
    }
}
addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]);
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]);
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]);
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]);
 */
//W pliku js/app.js jest stworzona tablica obiektów planets.
// Znajduje się w niej 8 planet Układu Słonecznego wraz z informacjami ile posiadają księżyców.
// Napisz funkcję sortPlanet(planets), której zadaniem będzie zwrócenie nowej,
// posortowanej wg. ilości księżyców, tablicy. Czyli od Jowisza do Wenus.
// Posortowaną tablicę wypisz w konsoli.
/*
const planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];
function sortPlanets(planets){
    console.log(planets.sort((a,b)=> a.numberOfMoons - b.numberOfMoons));
}
sortPlanets(planets);
 */
//Napisz funkcję factors, która ma przyjmować tylko jeden argument: liczbę, która musi być większa od 0.
// Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej).
// Jeżeli liczba jest mniejsza lub równa 0, to funkcja ma zwracać pustą tablicę.
/*
function factors(num) {
    if (num <= 0) {
        console.log("Argument must be higher than 0");
    } else {
        const arr = [];
        for(let i =num; i>0;i--){
            if(num%i==0){
                arr.push(i);
            }
        }
        console.log(arr)
    }
}
factors(2);
factors(54);
factors(-4);
 */
//Napisz funkcję getMissingElement, która ma przyjmować tylko jeden argument: tablicę zawierającą rosnące liczby całkowite.
// Funkcja ta ma zwracać pierwszą brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden).
// Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać null.
/*
function getMissingElement(tab) {
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] - tab[i - 1] != 1) {
            return tab[i - 1] + 1;
        }
    }
    return null;
}

console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));
 */
//Napisz funkcję getLastNumbers, która ma przyjmować dwa argumenty: liczbę i tablicę.
// Funkcja ta ma zwracać tablicę składającą się z tylu ostatnich elementów ile wskazuje pierwszy argument - liczba.
// Jeżeli nie ma pierwszego argumentu lub nie jest on liczbą, funkcja ma zwracać pustą tablicę.
/*
function getLastNumbers(num,tab){
    if(typeof num != "number"){
        return [];
    }else{
        return  tab.slice(-num);
    }
}
console.log(getLastNumbers(2, [1,2,3,4,5,6,7]));
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15]));
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4]));
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));
 */
