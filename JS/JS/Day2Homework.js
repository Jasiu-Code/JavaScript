//W pliku app.js za pomocą konstruktora stwórz funkcję Tree. Niech funkcja ta ma jedną właściwość type, która będzie przechowywać typ drzewa. Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.
//
// Dopisz do prototypu konstruktora również metodę bloom(), która będzie zwracała tekst "I am blooming".
/*
function Tree(name){
    this.name = name;
}
Tree.prototype.bloom = function(){
    console.log("I am blooming")
}
const tree1 = new Tree("dab");
const tree2 = new Tree("brzoza");
tree1.bloom();
 */
//Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.
//
// 1. Pobranie informacji z atrybutu data
// znajdź element o id menu,
// stwórz funkcję getDataInfo(element) do której przekaż, jako argument, znaleziony element,
// stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data-info każdego elementu li. Zauważ, że elementy li to dzieci elementu o id menu.
// zwróć tę tablicę.
// 2. Szukanie elementu po id
// Znajdź element o id main-container.
// stwórz funkcję getElementClass(element) do której przekaż, jako argument, znaleziony element.
// zwróć tablicę złożoną z nazw klas tego elementu.
// 3. Szukanie elementu po klasie
// Znajdź element o klasie pink-color.
// stwórz funkcję getElementText(element) do której przekaż, jako argument, znalezione elementy.
// zwróć z funkcji tekst, znajdujący się w tym elemencie.
// 4. Szukanie elementu po klasie
// Znajdź elementy o klasie images.
// stwórz funkcję getElementAlt(element) do której przekaż, jako argument, znalezione elementy.
// stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków. Pobierz te atrybuty z przekazanych jako argument elementów.
// 5. Szukanie elementu po klasie
// Znajdź elementy o klasie my-link.
// stwórz funkcję getElementHref(element) do której przekaż, jako argument, znalezione elementy.
// stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków. Pobierz te atrybuty z przekazanych jako argument elementów
//ZAD1
/*
const menu = document.getElementById('menu');

function getData(el){
    const arr = [];
    Array.from(el.children).forEach(e=>{
        arr.push(e.getAttribute('data-info'))
    });
    console.log(arr);
}
getData(menu);

 */
//ZAD2
/*
const el = document.getElementById('main-container');
function getElementClass(el){
    console.log(el.classList)
}
getElementClass(el);
 */
//ZAD3
/*
const pink = document.querySelector('.pink-color');

function getElementText(el){
    console.log(el.innerText)
}
getElementText(pink)
 */
//ZAD4
/*
const images = document.getElementsByClassName('images');
function getElementAlt(el){
    const arr = [];
    Array.from(el).forEach(e=>{
        arr.push(e.getAttribute('alt'));
    })
    console.log(arr);
}
getElementAlt(images)
 */
//ZAD5
/*
const myLink = document.getElementsByClassName('my-link');
function getElementHref(el){
    const arr =[];
    Array.from(el).forEach(e=>{
        arr.push(e.getAttribute('href'))
    })
    console.log(arr)
}
getElementHref(myLink)
 */
