///////////////////FUNKCJE CZASU///////////////
//Uruchom interwał, który co 10s będzie wyświetlał napis "Wygenerowano z setInterval" w konsoli
// A także timer, który po 4s wypisze w konsoli: "JavaScript Rules".
/*
const interval = setInterval(function () {
    console.log("Wygenerowano z setInterval")
}, 10000);
const timer = setTimeout(function (){
    console.log(("JacaScript Rules"))
},4000)

 */
//Napisz funkcję countHello(), która jako parametr przyjmie liczbę całkowitą od 1 do 10. W funkcji uruchom funkcję setInterval.
// Jego zadaniem będzie wypisywanie na konsoli tekstu "Hello" oraz licznika, zliczającego,
// który raz już został uruchomiony setInterval.
// Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, powinien zostać usunięty setInterval.
/*
const countHello = (count) => {
    let i=1;
    const interval = setInterval(function(){
        console.log("Hello", i);
        if(count == i){
            clearInterval(interval);
        }
        i++;

    },1000);
}
*/
///////////////////Więcej o funkcjach///////////////
//przetestuj działanie obu funkcji. Dlaczego funkcja o nazwie firstFunc nie ma dostępu do zmiennej o nazwie otherInt?
/*
function firstFunc() {
    const someInt = 1;
    function secondFunc() {
        console.log(someInt);
        const otherInt = 3;
    }
    secondFunc();
    console.log(otherInt);
}
firstFunc();
//Odp. zmienna o zasięgu blokowym i dostępna tylko wewnątrz fukncji secondFunc

 */
//przetestuj działanie funkcji callOtherFunction.
// Następnie spróbuj wywołać ją jeszcze kilka razy przekazując jej inne działanie do zrobienia.
/*
function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    const randomNumber1 = Math.random() * 20;
    const randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b);
    console.log("Wynik", a + b);
});
 */
//W pliku js/app.js stwórz funkcję, która będzie wypisywała w konsoli tekst "Cześć". Przetestuj miejsce wywoływania tej funkcji.
// Najpierw wywołaj ją po definicji funkcji, a później przed. W komentarzu zapisz swoje spostrzeżenia. Następnie stwórz drugą funkcję, która będzie wypisywała w konsoli inny tekst np. "Witaj". Stwórz ją jako wyrażenie funkcyjne (czyli przypisz definicję do zmiennej).
// Następnie spróbuj przetestować w podobny sposób jak pierwszą funkcję, miejsce jej wywołania. W komentarzu zapisz swoje spostrzeżenia.
/*
//Działa hoisting mozna wywołac przed i po deklaracji
display();
function display(){
    console.log("cześć");
}
witaj();
// Przy deklaracji jako wyrazenie funkcyjne nie dziala hoisting
const witaj = function() {
    console.log("witaj");
}
*/
///////////////////TABLICE///////////////
//Napisz funkcję distFromAverage, która ma przyjmować tylko jeden argument - tablicę.
// Funkcja ta ma zwracać też tablicę.
// Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki a średnią wartością tablicy.
/*
function distFromAverage(arr){
    const sum  = arr.reduce(function (total,item){
        return total +item;
    })

    const avg = sum/arr.length;
    console.log(avg);
    const arr1 = arr.map(function (element,index,array){
        return Math.abs(element - avg);
    })
    return arr1;
}
const arr1 = distFromAverage([1,2,3,4,5,6,7]);
console.log(arr1);
const arr2 = distFromAverage([1,1,1,1]);
console.log(arr2);
const arr3 = distFromAverage([2,8,3,7]);
console.log(arr3);
 */
//Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
//
// Wypisz pierwszy owoc w konsoli.
// Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
// W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).
/*
const owoce = ["jablko","banan","pomarancza","winogrono"];
console.log(owoce[0]);
console.log(owoce[owoce.length-1]);
for (let i = 0 ; i<owoce.length;i++){
    console.log(owoce[i])
}
*/
//Jest tam przykładowa funkcja, która tworzy tablicę z liczbami.
// Niestety nie działa ona dobrze. Znajdź błąd i napraw go, tak żeby funkcja działała.
/*
function createArray(number) {
    const newArray =[];

    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}
console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));
 */
//Napisz funkcję printTable(array), która przyjmuje tylko jeden parametr - tablicę.
//Następnie przy pomocy odpowiedniej metody tablicowej przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.
/*
function printArray(arr){
    arr.forEach(function(element,index,array){
        console.log(element)
    })
}
 */
//Napisz funkcję multiply(array). Funkcja ma przyjmować tylko jeden argument - tablicę.
// Następnie funkcja multiply ma pomnożyć wszystkie liczby znajdujące się w tablicy przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.
/*
function multiply(arr){
    const arr1 = arr.reduce((acc,el)=>{
        return acc*el;
    })
    return arr1
}
console.log(multiply([2,3,4]))
*/
//Napisz funkcję getEvenAverage, która ma przyjmować tylko jeden argument - tablicę.
// Funkcja ta ma zwracać średnią wartość parzystych liczb z tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby.
// Jeśli w tablicy nie ma parzystych liczb niech zwraca null.
/*
function getEvenAverage(arr){
    const arr1 = arr.filter((el)=>{
        return el % 2 === 0;
    });
    const sum = arr1.reduce((acc,el)=>{
        return acc+el;
    });
    return sum/arr1.length;
}
console.log(getEvenAverage([1,2,3,4,5,6,7,8,9]));
 */
//Napisz funkcję sortArray, która ma przyjmować tylko jeden argument
// - tablicę zawierającą liczby całkowite.
// Funkcja ta ma zwracać posortowaną rosnąco tablicę. Możesz skorzystać z metod tablicowych.
/*
function sortArray(arr){
    return arr.sort();
}
console.log(sortArray([3,2,5,1,4]));
 */
//Napisz funkcję addArrays, która ma przyjmować dwa argumenty -
// dwie tablice zawierające liczby całkowite. Funkcja ta ma zwracać również tablicę,
// która będzie wynikiem dodawania każdego elementu o tym samym indeksie.
// Jeżeli, tablice nie są równe, elementy nadmiarowe są przepisywane do nowej tablicy.
/*
function addArrays(arr1, arr2) {
    const res = [];
    for (let i = 0; i < Math.max(arr1.length,arr2.length); i++) {
        res[i] = (arr1[i] || 0) + (arr2[i] || 0);
    }
    return res;
}
console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
console.log(addArrays([8,3,22], [1,3,2]) );
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));
*/
/*
function sumArrays(...arrays) {
    const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
    const result = Array.from({ length: n });
    return result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
}
*/
///////////////////TABLICE WIELOWYMIAROWE///////////////
//W pliku js/app.js znajduje się tablica o nazwie multiValueArray.
//
// Wypisz element znajdujący się w położeniu 3, 2.
// Wypisz długość tablicy znajdującej się w drugim rzędzie.
// Wypisz element znajdujący się w położeniu 4, 2.
/*
const multiValueArray = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
console.log(multiValueArray[2][1]);
console.log(multiValueArray[1].length);
console.log(multiValueArray[3][1]);
*/
//Napisz funkcje print2DArray, która będzie przyjmować jako argument tablicę dwuwymiarową.
// Następnie funkcja ma wypisać w konsoli zawartość tej tablicy.
/*
function print2DArray(arr2D) {
    arr2D.forEach(el =>el.forEach(el => console.log(el)))
}
print2DArray([[2, 3], ["Ala", "Ola"], [true, false], [5, 6, 7, 8], [12, 15, 67]]);
 */
///////////////////OBIEKTY ///////////////
//Stwórz obiekt person. Dopisz do niego następujące właściwości i metodę:
//
// name,
// age,
// sayHello() - wypisującą string "hello"
// Wypisz właściwości w konsoli, wywołaj metodę.
/*
const person = {
    name: "string",
    age: "number",
    sayHello() {
        console.log("Hellllo")
    }
}
console.log(person)
person.sayHello()
 */
//Stwórz obiekt, który będzie przetrzymywał Twój ulubiony przepis.
// Obiekt powinien mieć własność title (string), servings (number) oraz ingredients (tablica stringów).
// Dodaj pole ingredients poza ciałem obiektu.
// Wypisz w konsoli te wszystkie informacje.
/*
const receipt ={
    title: 'string',
    servings: 'number',
    ingredients: 'string[]'
}
receipt.ingredients = ['asd','asdfdsadf'];
console.log(receipt);
 */
/*
const spoon = {
    isExist: true
}

const fork = spoon;
fork.isExist  = false;
console.log(spoon.isExist);

 */
///////////////////SLOWO KLUCZOWE THIS ///////////////
//Stwórz obiekt car, utwórz dla niego odpowiednie właściwości i metody.
//
// Właściwości:
// brand,
// color,
// numberOfKilometers (na początku 0).
// Metody:
// printCarinfo() - metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
// drive(km) - która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.
// car.printCarinfo(); => "Czarny Mercedes, 0km"
// car.drive(20);
// car.printCarinfo(); => "Czerny mercedes, 20km"
//
// Zadanie do samodzielnego wykonania
// Do obiektu car z dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).
//
// Dodaj też następujące metody:
//
// metodę dodającą wpis do tej tablicy,
// metodę zwracającą wszystkie przeglądy samochodu.
// Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.
/*
const car = {
    brand: "fiat",
    color: "red",
    numberOfKilometers: 0,
    printCarInfo(){
        console.log(this.brand +" , "+ this.numberOfKilometers)
    },
    drive(km){
        this.numberOfKilometers += km;
    }
}
car.printCarInfo();
car.drive(20);
car.printCarInfo();
*/
//Przeanalizuj kod, który znajduje się w pliku js/app.js.
// Jest tam stworzony obiekt calculator, który posiada jedną metodę save(newA,newB).
// Zadaniem tej metody jest zapisanie dla tego obiektu pod pola a i b dwóch liczb.
// Dopisz metody sum oraz multiply,
// tak aby zwracały sumę oraz iloczyn tych dwóch liczb ustawionych w metodzie save.
/*
const calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function (){
        return this.a + this.b;
    },
    multiply: function (){
        return this.a * this.b;
    }
}

calculator.save(2, 3);

console.log(calculator.sum());
console.log(calculator.multiply());
*/
/*
const stairs = {
    step: 0,
    up: function () {
        this.step += 1;
    },
    down: function (){
        this.step -=1;
    },
    printStep: function (){
        console.log(this.step);
    }
}
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep() // 2
 */
///////////////////CONSTRUTOR FUNCTION ///////////////
//W pliku js/app.js stwórz konstruktor Basket. Na jego bazie stwórz obiekt, który będzie miał następujące pola:
//
// products - tablica z wszystkimi produktami
// sum - kwota do zapłaty za wszystkie produkty
// Do prototypu konstruktora dodaj metody:
//
// addProduct(name, price), która jako parametry będzie przyjmowała nazwę produktu oraz jego cenę. Cenę podawaj jako typ number, a nazwę jako string. Umieść te dane jako obiekt w tablicy this.products.
// showBasket(), której zadaniem będzie wyświetlenie wszystkich produktów z koszyka wraz ceną, oraz kwotą do zapłaty.
/*
function Basket() {

        this.products = [],
        this.sum = 0,
        this.addProduct = function (item, price) {
            this.products.push([item, price])
            this.sum += price
        },
        this.showBasket = function () {
            this.products.forEach(item => console.log(item[0] + " " + item[1]))
        }
}

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();
const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
 */
//W pliku js/app.js możesz znaleźć przykładowy konstruktor dla robota. Konstruktor oczekuje, że podasz tylko imię robota.
//
// Metody dodane są do prototypu funkcji.
//
// Utwórz kilka robotów i poszukaj, czy w napisanym kodzie nie ma błędów.
//
// Sprawdź w konsoli jak wyglądają poszczególne roboty oraz sam konstruktor.
/*
const Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
};

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};
const robocop = new Robot("robocop");
robocop.sayHi("john");
robocop.changeName("luj");
robocop.fixIt();
console.log(robocop);

 */
//Stwórz konstruktor Calculator dla przyszłych obiektów. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji. Następnie przy pomocy prototypu dodaj następujące metody:
//
// add(num1, num2) - metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added num1 to num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// multiply(num1, num2) - metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied num1 with num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// subtract(num1, num2) - metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted num1 from num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// divide(num1, num2) - metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided num1 by num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// printOperations() - metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
// clearOperations() - metoda ma wyczyścić wszystkie operacje z pamięci.
// Pamiętaj o używaniu this.
/*
const Calculator = function (){
    this.operations = [];
}
Calculator.prototype.add = function (num1,num2){
    this.operations.push("Added "+num1+" to "+ num2);
    console.log(num1 +num2);
}
Calculator.prototype.multiply = function (num1,num2){
    this.operations.push("Multipiled "+num1+" with "+ num2);
    console.log(num1 *num2);
}
Calculator.prototype.substract = function (num1,num2) {
    this.operations.push("Substracted " + num1 + " from " + num2);
    console.log(num1 - num2);
}
Calculator.prototype.divide = function (num1,num2) {
    this.operations.push("Divided " + num1 + " by " + num2);
    console.log(num1 / num2);
}
Calculator.prototype.printOperations = function(){
    console.log(this.operations);
}
Calculator.prototype.clearOperations = function (){
    this.operations = [];
}

const calc = new Calculator();
calc.add(1,3);
calc.multiply(2,2);
calc.substract(8,4);
calc.divide(16,4)
calc.printOperations();
calc.clearOperations();
calc.printOperations();
*/
