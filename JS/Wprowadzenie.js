//Typy danych
//Stwórzcie dwie zmienne zawierające teksty: “Hello” i "JS".
//
// W nowej zmiennej połączcie te dwa teksty, ale mają one być oddzielone spacją.
//
// Stworzony napis wypiszcie w konsoli.
/*
let t1 = "Hello";
let t2 = "JS";
let t3 = t1 + " " + t2;
*/
//Stwórz 5 zmiennych. Wstaw do nich następujące dane:
//
// liczbę
// string
// liczbę + string np. (2 + "dwa")
// wartość logiczną
// wartość specjalną
// Dodaj do każdej zmiennej komentarz z informacją jaki typ danych przechowuje ta zmienna (do sprawdzenia typu wykorzystaj operator typeof) oraz wypisz w konsoli wartości tych zmiennych.
/*
let num = 5;
console.log(num);
console.log(typeof num);
let str = "tekst";
console.log(str);
console.log(typeof str);
let mix = 2 + "dwa";
console.log(mix);
console.log(typeof mix);
let bool = false;
console.log(bool);
console.log(typeof bool);
let spec = { age:2 };
console.log(spec);
console.log(typeof spec);
*/
//Zdefiniujcie tablicę w zmiennej names1 zawierającą kolejne imiona: Jan, Maria, Kasia, Wojtek, Zosia
//
// Na koniec wypiszcie w terminalu w kolejnych liniach:
//
// drugi element
// piąty element
// długość tablicy
// Część 2
// Zdefiniujcie pustą tablicę w zmiennej names2, a następnie pojedynczo dodajcie do niej następujące imiona:
//
// Jan, Maria, Kasia, Wojtek, Zosia, Grzesiek
//
// Na koniec wypiszcie w terminalu:
//
// pierwszy element
// trzeci element
// długość tablicy
/*
const names1 = ["Jan", "Maria", "Kasia", "Wojtek","Zosia"];
console.log(names1[1]);
console.log(names1[4]);
console.log(names1.length);
const names2 = [];
names2[0] = "Jan";
names2[1] = "Maria";
names2[2] = "Kasia";
names2[3] = "Wojtek";
names2[4] = "Zosia";
names2[5] = "Grzesiek";
console.log(names2[0]);
console.log(names2[2]);
console.log(names2.length);
 */
//Utwórzcie tablicę dwuwymiarową - 3 wiersze na 4 kolumny (w zmiennej arrayOfNumbers).
//
// W kolejnych kolumnach mają wystąpić kolejne liczby całkowite, czyli powinno to wyglądać następująco:
//
// 1,2,3,4
// 5,6,7,8
// 9,10,11,12
//
// Wyświetlcie:
//
// drugi element z pierwszego wiersza
// drugi wiersz (drugi element z pierwszego wymiaru)
// długość trzeciego elementu z pierwszego wymiaru
// Część 2
// Utwórzcie tablicę dwuwymiarową (w zmiennej mixedArray) odpowiednio składającą się z:
//
// tablicy z imionami: Maria, Jan, Piotr
// tablicy z wartościami liczbowymi: 1, 2, 3, 4, 5, 6
// Wyświetlcie:
//
// trzeci element z pierwszego wiersza
// piąty element z pierwszego wiersza
// długość drugiego elementu z pierwszego wymiaru
/*
let arr2d = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(arr2d[0][1]);
console.log(arr2d[1]);
console.log(arr2d[2].length);
let mixedArray = [["Maria","Jan","Piotr"],[1,2,3,4,5,6]];
console.log(mixedArray[0][2]);
console.log(mixedArray[0][5]);
console.log(mixedArray[1].length);
*/
//Samochód
// W zmiennej car utwórzcie obiekt opisujący samochód.
//
// Ma on mieć następujące atrybuty:
//
// type o wartości "sedan"
// color o wartości "green"
// engine o wartości 2.0
// Wypiszcie informacje o obiekcie poprzez konkatenację (z wykorzystaniem spacji) z wartości w jego atrybutach type, color, engine
//
// Kolor
// W zmiennej color utwórzcie obiekt opisujący kolor.
//
// Ma on mieć następujące atrybuty:
//
// red o wartości 100
// green o wartości 0
// blue o wartości 50
// Poprzez zmienną referenceColor zmodyfikujcie wcześniej utworzony obiekt, ustawicie mu:
//
// red na wartość 50
// green na wartość 50
/*
let car = {
    type: "sedan",
    color: "green",
    engine: 2.0
}
console.log(car.type, car.color, car.engine)
let color = {
    red: 100,
    green: 0,
    blue: 50
}
let refenceColor = color;
refenceColor.red =50;
refenceColor.green = 50;
console.log(color.green);
 */
//Za pomocą metody prompt() pobierz od użytkownika odpowiedź na pytanie "Ile masz lat?".
// Jeśli użytkownik jest pełnoletni - wypisz w konsoli informację "Jesteś pełnoletni",
// jeśli ma poniżej 18 lat - "Jesteś niepełnoletni
/*
let age = window.prompt("Ile masz lat?");
age>18? console.log("jestes pelnoletni") : console.log("jestes niepelnoletni");
 */
//Z wykorzystaniem instrukcji warunkowej switch wyświetl odpowiedni tekst w zależności od wartości zmiennej grade:
//
// dla 6 tekst “celujący”
// dla 5 tekst “bardzo dobry”
// dla 4 tekst “dobry”
// dla 3 tekst “dostateczny”
// dla 2 tekst “dopuszczający”
// dla 1 tekst “niedostateczny”
/*
let grade = 1;
switch (grade){
    case 6:
        console.log("celujacy")
        break;
    case 5:{
        console.log("bardzo dobry")
        break;
    }
    case 4:{
        console.log("dobry")
        break;
    }
    case 3:{
        console.log("dostateczny")
        break;
    }
    case 2:{
        console.log("dopuszczajacy")
        break;
    }
    case 1:{
        console.log("niedostateczny");
    }
}
 */
//Napisz program liczący wartość x!, gdzie ! oznacza silnię, a x jest zmienną.
// Silnia to wynik mnożenia wszystkich liczb całkowitych od jeden do podanej liczby, czyli:
/*
let x = 5;
let result =1;
for(let i =1 ;i <= x ; i++){
    result = result*i;
}
console.log(result)
*/
//Napisz program liczący sumę wszystkich liczb w podanym przedziale od x do y.
//
// Np. dla x = 5, y = 10 suma to 5 + 6 + 7 + 8 + 9 + 10 = 45.
/*
let x = 5;
let y = 10;
let sum = 0;
for(x; x<=y;x++){
    sum = sum +x;
}
console.log(sum)
 */
//Stwórz tablicę z dowolnymi liczbami.
// Następnie oblicz średnią arytmetyczną z liczb znajdujących się w tej tablicy i wypisz ją w konsoli.
/*
const numbers = [4, 4, 1, 2, 5, 40];
let sum = 0;
for(let i = 0; i<numbers.length;i++){
    sum = sum + numbers[i];
}
let avg = sum / numbers.length;
console.log(avg);

 */
//Stwórz tablicę z losowymi liczbami (10 liczb) z przedziału 1-60. Wylosuj liczby za pomocą Math.random().
//Następnie sprawdź każdą liczbę w tablicy i zmodyfikuj tak, aby była parzysta.
/*
const arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 60);
}
console.log(arr)
const modArr = [];
for (let i = 0; i < 10; i++) {
    arr[i] % 2 != 0 ? modArr[i] = arr[i] + 1 : modArr[i] = arr[i];
}
console.log(modArr)

 */
//Stwórz funkcję, która będzie zwracała (poprzez return) sumę liczb z tablicy.
// Tablica powinna być przekazana do funkcji jako argument.
/*
function sum(arr){
    let sum=0;
    for(let i=0; i< arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
let arr1 = [1,2,3];
let result = sum(arr1);
console.log(result);
*/
//Napisz funkcję anonimową, która przyjmuje jako argumenty trzy liczby i zwraca największą z nich (zwraca, a nie wypisuje na ekranie).
// Wypisać możesz dopiero jak zwrócisz wynik z funkcj
/*
 const showBiggestNum = function (a,b,c){
     let x;
     a>b ? x =a: x=b;
     x>c ?  x = x  : x = c;
    return x;
 }
 console.log(showBiggestNum(2,4,5))

 */
//Napisz funkcję calculateTip(amount, rating), która będzie przyjmować dwa argumenty:
//
// kwotę do zapłaty,
// opis słowny obsługi. Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany - funkcja powinna zwracać napis "Opis nieczytelny".
// Opis może przyjmować następujące wartości:
//
// "Bardzo dobra obsługa" => 25% napiwku,
// "Dobra obsługa" => 20% napiwku,
// "Średnia obsługa" => 15% napiwku,
// "Zła obsługa" => 0% napiwku.
/*
const calculateTip = (amount,rating) =>{
    let tip;
    switch (rating){
        case "Bardzo dobra obsługa":
            tip = amount*0.25
            break;
        case "Dobra obsługa":
            tip = amount*0.2
            break;
        case "Średnia obsługa":
            tip = amount*0.15
            break;
        case "Zła obsługa":
            tip = 0
            break;
        default:
            tip = "Opis nieczytelny";
    }
    return tip;
}
console.log(calculateTip(100,"Bardzo dobra obsługa"))

 */