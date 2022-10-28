////////////OBIEKTOWOŚĆ W ES6////////////
//Stwórz klasę abstrakcyjną Vehicle. Stwórz trzy obiekty:
// boat
// car
// plane
// na podstawie odpowiednich klas dziedziczących po Vehicle.
// W odpowiednich klasach stwórz metody,
// które będą wypisywały w konsoli informacje wyróżniające te pojazdy. Zrób to w taki sposób,
// aby obiekt boat nie mógł jeździć ani latać, itp.
/*
class Vehicle{
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
class Boat extends Vehicle{
    constructor(name) {
        super(name);
    }
    float(){
        console.log("I can float")
    }
}
class Car extends Vehicle{
    constructor(name) {
        super(name);
    }
    drive(){
        console.log("I can drive")
    }
}
class Plane extends Vehicle{
    constructor(name) {
        super(name);
    }
    fly(){
        console.log("I can fly")
    }
}
const fiat = new Car("fiat");
console.log(fiat.getName());
const avionetka = new Plane("plane1");
avionetka.fly();
 */
//Stwórz klasę Duck. Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki. Stwórz wewnątrz tej klasy konstruktor i metody:
//
// konstruktor - którego zadaniem będzie ustawienie typu kaczki na "ordinary duck" np. this.type = "ordinary duck"
// sound() - wypisuje "Quack quack"
// swim() - wypisuje "I'm swimming...""
// print() - wypisuje "Looks like ordinary duck". Skorzystaj z ustawienia type do wypisania typu kaczki.
// Stwórz obiekt donaldDuck. Wywołaj dla niego wszystkie metody.
//
// Część 2
// Na bazie klasy Duck stwórz kolejną o nazwie WildDuck. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody print() typ kaczki zmienił się na "wild". Stwórz obiekt daffyDuck. Wywołaj dla niego wszystkie metody.
//
// Część 3
// Na bazie klasy Duck stwórz kolejną o nazwie MallardDuck. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody print() typ kaczki zmienił się na "mallard". Stwórz obiekt daisyDuck. Wywołaj dla niego wszystkie metody.
//
// Część 4
// Stworzyłeś klasę Duck. Mogą z niej dziedziczyć wszystkie kaczki. Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody fly(). Metoda ma wypisywać w konsoli tekst "I'm flying...".
//
// Część 5
// Na bazie klasy Duck stwórz kolejną o nazwie RubberDuck. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody print() typ kaczki zmienił się na "rubber". Stwórz obiekt howardTheDuck. Wywołaj dla niego wszystkie metody. Czy widzisz coś niepokojącego?
//
// Twoja gumowa kaczka potrafi latać!
//
// Nadpisz odpowiednio metodę fly() tak, aby po jej wywołaniu w przypadku gumowej kaczki wypisywał się w konsoli tekst "Rubber ducks can't fly!".
/*
class Duck {
    constructor() {
        this.type = "ordinary duck";
    }
    sound() {
        console.log("Quack quack");
    }
    swim() {
        console.log("I'm swimming");
    }
    print() {
        console.log("Looks like " + this.type);
    }
    fly() {
        console.log("I can fly")
    }
}
const donaldDuck = new Duck();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();

class WildDuck extends Duck{
    constructor() {
        super();
        this.type = "wild duck";
    }
}
const daffyDuck = new WildDuck();
daffyDuck.sound();
daffyDuck.swim();
daffyDuck.print();

class MallardDuck extends Duck{
    constructor() {
        super();
        this.type = "mallard"
    }

}
const daisyDuck = new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();

class RubberDuck extends Duck{
    constructor() {
        super();
        this.type = "rubber"
    }
    fly() {
        console.log("I can't fly")
    }
}
const howardDuck = new RubberDuck();
howardDuck.sound();
howardDuck.swim();
howardDuck.print();
howardDuck.fly();
 */
//Na Twojej stronie internetowej masz stworzony formularz, który pozwala dodawać różne rodzaje produktów do listy.
// W pliku masz stworzoną klasę Food - jako klasę abstrakcyjną. W konstruktorze klasa ustawia nazwę produktu (name), ilość białka (protein), ilość węglowodanów (carbs) oraz ilość tłuszczu (fat) w produkcie, (W gramach).
//
// Napisz kod dzięki, któremu po wypełnieniu formularza i kliknięciu przycisku "Dodaj", zostaną wykonane następujące czynności:
//
// nowy produkt zostanie dodany do listy ul o id products,
// zostanie stworzony nowy obiekt na podstawie odpowiedniej klasy dziedziczącej po Food. To znaczy, jeżeli produkt będzie zawierał powyżej 250 kcal zostanie stworzony jako obiekt klasy FastFood. Jeżeli poniżej 250 kcal zostanie stworzony jako obiekt klasy FatFreeFood.
// dodaj stworzony obiekt do tablicy foods i wyświetl ją w konsoli.
// Kalorie możesz obliczyć na podstawie następującego wzoru:
//
// 1g białka	dostarcza 4 kcal
// 1g tłuszczu	dostarcza 9 kcal
// 1g węglowodanów	dostarcza 4 kcal
//
// Przykład. Po dodaniu produktu hot_dog i wypełnieniu jego danych odżywczych w formularzu, zostanie stworzony obiekt na bazie klasy FastFood np. w następujący sposób: new FastFood('Hot Dog', 10, 4.2, 26), co po przeliczeniu: 10* 4 + 4.2 * 4 + 9 * 26 daje 280.8 kcal.
//
// Na podstawie formularza stwórz kilka obiektów jak poniżej:
//
// new FastFood('Fries', 3.4, 41, 15)
// new FastFood('Donut', 4.9, 51, 25)
// new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)
//
// Napisz metodę o nazwie print (w odpowiedniej klasie), która będzie wypisywała informację o produkcie.
/*
const foods = [];
// brak scriptu out.js
class Food {
    constructor(name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }
}
*/
////////////WYSZUKIWANIE ELEMENTOW////////////
//Znajdź pierwszy element h1 na stronie,
// Znajdź element o class title,
// Znajdź element z atrybutem data-animation
// Każdy znaleziony element wypisz w konsoli, aby upewnić się, że Twój kod działa.
/*
const firstH1 = document.querySelector('h1');
const title = document.querySelector('title');
const atr = document.querySelector('[data-animation]')

console.log(title);
console.log(firstH1.innerText);
console.log(atr);
*/
//Wypisz w konsoli:
//
// Ile na stronie znajduje się elementów div (jest ich 20),
// Ile na stronie znajduje się elementów o klasie offers (jest ich 12),
// Ile na stronie znajduje się elementów, które posiadają atrybut href (jest ich 13).
/*
const divs = document.querySelectorAll('div');
const offers = document.getElementsByClassName('oferts');
const hrefs = document.querySelectorAll('[href]');

console.log(divs.length);
console.log(offers.length);
console.log(hrefs.length);
*/
//Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
//
// Element o id home (na dwa sposoby).
// Pierwszy element li posiadający atrybut data-direction.
// Pierwszy element o klasie block.
// Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element. Pamiętaj, żeby używać funkcji, które wyszukują tylko jeden element.
/*
const idGetById = document.getElementById('home');
const idGetByQuerySelector = document.querySelector('[id="home"]');
const firstId = document.querySelector('li, [data-direction]');
const firstBlock = document.querySelector('.block');

console.log(idGetById);
console.log(idGetByQuerySelector);
console.log(firstId);
console.log(firstBlock);
*/
//Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
//
// Wszystkie elementy li znajdujące się w tagu nav z klasą navigation.
// Wszystkie paragrafy należące do wszystkich elementów div.
// Wszystkie divy znajdujące się w tagu article.
// Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Pamiętaj, żeby używać funkcji,
// które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile znalazłeś elementów.
/*
const allLi = document.querySelectorAll('nav .navi, li');
const allP = document.querySelectorAll('div p');
const appD = document.querySelectorAll('article div')

console.log(allLi);
console.log(allP);
console.log(appD);
*/
//Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag article o klasie first.
// W kolejnym etapie:
// wypisz w konsoli, ile elementów h2 znajduje się w tym tagu.
// Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy.
/*
const tagArticle = document.querySelector('tag article, .first');
const h2InTag = tagArticle.querySelectorAll('h2');
console.log(tagArticle);
console.log(h2InTag.length);
*/
////////////ELEMENTY////////////
//Stwórz funkcję getDataInfo(elements), do której przekaż jako argument zmienną links (pamiętaj o tym, że jest to pseudotablica)
// stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data każdego elementu li
// zwróć tą tablicę.
/*
function getDataInfo(links){
    const newArr = [];
    links.forEach((el)=>{
        const grabLi = el.querySelector('li');
        newArr.push(grabLi.dataset)
    })

}
*/
//Przeanalizuj kod HTML i JavaScript. W pliku js/app.js jest przygotowane kilka zmiennych, w których zapisane są wyszukane elementy DOM.
//
// Wypisz w konsoli wszystkie te zmienne. Sprawdź, które z nich to pseudotablice.
//
// W przypadku pseudotablic przeiteruj (używając np. pętli for). Wypisz nazwę tagu oraz klasy dla każdego elementu.
/*
const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

console.log(home);
console.log(children);
console.log(ban);
console.log(someBlocks);
console.log(listElements);
children.forEach(el=>{
    console.log(el.tagName);
    console.log(el.className);
})
someBlocks.forEach(el=>{
    console.log(el.tagName);
    console.log(el.className);
})
listElements.forEach(el=>{
    console.log(el.tagName);
    console.log(el.className);
})
*/
//Wypisz w konsoli wartość innerText dla elementów zmiennej blocks.
// Następnie ustaw wartość innerText na "Nowa wartość diva o klasie blocks".
/*
const someBlocks = document.querySelectorAll(".block");

console.log(someBlocks);
someBlocks.forEach(e => {
    console.log(e.innerText)
    e.innerText = "Nowa wartosc"
    console.log(e.innerText)
})
*/
//Znajdź na stronie element o class superFooter
// Stwórz funkcję getId(element), do której przekaż jako argument znaleziony element
// pobierz w funkcji nazwę id elementu i zwróć ją
/*
const sf = document.querySelector('.superFooter');

function getId(el){
   console.log(el.id);
}
getId(sf)
 */
/*
const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");
const getTags = (el)=>{
    const arr = [];
    el.forEach(e=>{
        arr.push(e.tagName)
    })
    console.log(arr)
}
getTags(childElements);

 */
//Stwórz funkcję getClassInfo(element), do której przekaż jako argument zmienną banner
// zwróć tablicę z listą klas, pobraną z przekazanego do funkcji argumentu.
/*
const banner = document.querySelector(".ban");
function getClassInfo(el){
    const arr = el.className.split(" ");
    console.log(arr)
}
getClassInfo(banner);
 */
////////////WIECEJ O ELEMENTACH////////////
//Zmodyfikuj listę w sekcji .exercise w następujący sposób:
//
// Nastaw kolor tła co drugiego elementu listy na szary (#9e9e9e),
// Nastaw piątemu elementowi listy klasę big,
// Nastaw co trzeciemu elementowi podkreślenie.
/*
const x = document.querySelector('.exercise').querySelectorAll('li');
console.log(x)
x.forEach((el,index) =>{
    if(index %2 ==0){
        el.style.backgroundColor = '#9e9e9e';
    }
    if(index %5 ==0){
        el.classList.add('big');
    }
    if(index %3 ==0){
        el.style.textDecoration ='underline';
    }
})
 */
//Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy. Napisz kod JavaScript, który wprowadzi następujące zmiany:
//
// Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą background-image).
// Poprawi linki tak, żeby każdy miał poprawny opis i atrybut href.
// Poprawi szerokość elementu o klasie chrome (powinno być 100px).
/*
const chr = document.querySelector('.chrome');
const edge = document.querySelector('.edge');
const firefox = document.querySelector('.firefox');

edge.style.backgroundImage ='url("../img/edge.jpg")';
firefox.style.backgroundImage ='url("../img/firefox.jpg")';

chr.parentElement.querySelector('a').innerText = "Chrome";
firefox.parentElement.querySelector('a').innerText = "Firefox";

edge.parentElement.querySelector('a').setAttribute('href','https://www.microsoft.com/pl-pl/edge?form=MA13FJ');
firefox.parentElement.querySelector('a').setAttribute('href','https://www.mozilla.org/pl/firefox/new/');

chr.style.width ='100px';
 */
//Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę.
//
// Wyszukaj odpowiednie elementy (spany) i zapisz je do zmiennych.
// Za pomocą innerText wypełnij w nich odpowiednie informacje.
/*
const name = document.getElementById('name');
const color = document.getElementById('fav_color');
const meal = document.getElementById('fav_meal');

name.innerText="Jasiu";
color.innerText="red";
meal.innerText="Hamburger";
 */
/*
const el = document.querySelector('.exercise ul');
el.classList.add('menu');
const els = document.querySelectorAll('.exercise li');
els.forEach(el=>{
    el.classList.add('menuElement')
    if(el.classList.contains('error')){
        el.classList.remove('error')
    }
})
//Dodaj do każdego elementu listy w sekcji .exercise,
// atrybut data-id przyjmujący kolejne liczby całkowite (zaczynając od 1).
els.forEach((el,i) =>{
    el.setAttribute('data-id',`${i+1}`)
})
 */
////////////PORUSZANIE SIE PO DRZEWIE////////////
//Znajdź i zapisz do zmiennych następujące elementy:
//
// Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.
// Element o id second -> jego rodzic -> jego czwarte dziecko.
// Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół).
// Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o tagu article -> jego drugie dziecko o tagu <p>.
// Wszystkie te elementy mają atrybut data-answer nastawiony na numer zadania, dla którego są odpowiedzią.
/*
const first = document.querySelector('.first');
const firstChild = first.firstChild;
const thirdChild = first.children[2];
console.log(thirdChild);
const second = document.getElementById('second');
const secondParent = second.parentElement;
const fourthChild = secondParent.children[3];
console.log(fourthChild);
const data = document.querySelector('[data-ex]');
const dataGrandpa = data.parentElement.parentElement;
const dataFirstChild = dataGrandpa.firstChild;
const dataLastChild = dataGrandpa.lastChild;
const dataMiddleChild = dataGrandpa.children[Math.floor(dataGrandpa.children.length/2)]
console.log(dataMiddleChild);
const fourth = document.querySelector('div .forth');
const parent = fourth.parentElement;
const firstArtChild = parent.querySelector('article');
const secondP = firstArtChild.querySelectorAll('p')[1];
console.log(secondP);
 */
//W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki). Po kliknięciu któregokolwiek z nich – element, który znajduje się bezpośrednio nad nim, powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był niewidoczny). Rozwiązanie musi spełniać następujące założenia:
//
// Na wszystkie przyciski musi być założony ten sam event.
// Następny element ma być wyszukiwany zależnie od położenia this.
// Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, czy następny element nie równa się null).
/*
const btn = document.querySelectorAll('a');

btn.forEach(e => {
    e.addEventListener('click', () => e.previousElementSibling.classList.toggle('hidden'))
})

 */
//W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki). Po kliknięciu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy). Rozwiązanie musi spełniać następujące założenia:
//
// Na wszystkie przyciski musi być założony ten sam event.
// Rodzic ma być wyszukiwany zależnie od położenia this.
// Kolor tła musi być losowy.
/*
const btn = document.querySelectorAll('a');

btn.forEach(e => {
    e.addEventListener('click', () => e.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16));
})

 */
//W pliku znajdują się trzy listy (każda osadzona w elemencie div). Po najechaniu myszką na element div zmienić się mają kolory tła elementów jego listy. Odpowiednio:
//
// Pierwszy element w liście ma mieć kolor czerwony.
// Ostatni element w liście ma mieć kolor niebieski.
// Wszystkie inne elementy mają mieć kolor zielony.
// Rozwiązanie musi spełniać następujące założenia:
//
// Na wszystkie divy musi być założony ten sam event.
// Elementy listy mają być wyszukane w zależności od this.
/*
const container = document.querySelectorAll('.listContainer');
container.forEach(e =>{
    e.addEventListener('mouseover', ()=>{
        for(let i =0;i< e.firstElementChild.children.length;i++){
            e.firstElementChild.children[i].style.backgroundColor = 'green';
        }
        e.firstElementChild.firstElementChild.style.backgroundColor = 'red';
        e.firstElementChild.lastElementChild.style.backgroundColor = 'blue';
    })
    e.addEventListener('mouseout', ()=>{
        for(let i =0;i< e.firstElementChild.children.length;i++){
            e.firstElementChild.children[i].style.backgroundColor = '';
        }
    })
})
 */

