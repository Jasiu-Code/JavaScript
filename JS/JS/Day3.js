////////////ZDARZENIA////////////
//Uruchom stronę index.html. Na stronie znajdują się dwa elementy o klasach parent i children Stwórz event,
// który po najechaniu na element parent pokaże element children. Zauważ, że element children ma ustawiony display: none w css. Stwórz drugi event, który po zjechaniu z elementów schowa z powrotem element children.
// Pamiętaj o tym, aby nie chować wszystkich elementów naraz.
/*
const parent = document.getElementsByClassName('parent');
console.log(parent)
Array.from(parent).forEach(e=>{
    e.addEventListener('mouseover',()=>{
        e.children[0].style.display ='block';
    })
    e.addEventListener('mouseout',()=>{
        e.children[0].style.display ='none';
    })
})
 */
//Uruchom stronę przygotowaną dla zadania. Sprawdź w konsoli, czy są jakieś błędy. Następnie:
//
// Przenieś tag <script> do sekcji <head>. Zobacz, co się zmieniło w działaniu skryptu. Spróbuj to wytłumaczyć.
// Stwórz event DOMContentLoaded dla elementu document i przenieś kod do środka tego eventu. Czy poprawiło to sytuację?
// Przenieś znowu tag <script> na koniec pliku - czy jest jakaś różnica?
/*
document.addEventListener('DOMContentLoaded',()=>{
    const menu = document.querySelector("#menu");
    const paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 2";
})
 */
//Uruchom stronę przygotowaną dla zadania. Na stronie znajduje się przycisk.
// Podepnij do niego event, który po kliknięciu spowoduje, że w konsoli wyświetli się napis "Hura! Działa!".
/*
const btn = document.querySelector('button');
btn.addEventListener('click', ()=>console.log("Dzia"));

 */
//Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i jeden licznik. Napisz jeden wspólny event dla wszystkich przycisków,
// który spowoduje, że po kliknięciu w przycisk licznik zwiększy wartość o jeden.
/*
const btns = document.querySelectorAll('button');
const spn = document.querySelector('span');
Array.from(btns).forEach(btn=>{
    btn.addEventListener('click',()=>{
        let counter = parseInt(spn.innerText);
        spn.innerText = (counter+1).toString();
    })
})
 */
//Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i trzy liczniki (elementy span o klasie counter). Do każdego przycisku dopisz event, który spowoduje,
// że po kliknięciu w przycisk przypisany do niego licznik zwiększy swoją wartość o jeden.
/*
const btns = document.querySelectorAll('button');
Array.from(btns).forEach(e=>{
    e.addEventListener('click',()=>{
        let counter = parseInt(e.previousElementSibling.lastElementChild.innerText);
        e.previousElementSibling.lastElementChild.innerText = (counter+1).toString();
    })
})
 */
//Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy elementy div. Napisz jeden wspólny event dla nich wszystkich, który będzie zmieniał kolor tła tylko w klikniętym divie. Użyj do tego słowa kluczowego this.
//
// Hint: Żeby uzyskać losowy kolor użyj poniższego kodu:
/*
const boxes = document.querySelectorAll(".box");
boxes.forEach(box=>{
    box.addEventListener('click',function (){
        // odwołanie fukcji musi byc function()  a nie ()=> jak chcemy uzyc this
        this.style.backgroundColor =  "#" + Math.floor(Math.random()*16777215).toString(16);
    })
})
 */
//Uruchom stronę przygotowaną dla zadania. Na stronie znajduje się element div o id box. Napisz dla niego event, który będzie wypisywał położenie kursora myszy w chwili, gdy znajduje się nad tym elementem.
//
// Wyszukaj zarówno położenie kursora globalne (czyli odległość od górnego lewego rogu okna), jak i lokalne (czyli odległość od lewego górnego rogu elementu).
/*
const box = document.getElementById('box');
const gx = document.getElementById('globalX');
const gy = document.getElementById('globalY');
const lx = document.getElementById('localX');
const ly = document.getElementById('localY');
box.addEventListener('mousemove',(e)=>{
    gx.innerText=e.clientX;
    gy.innerText = e.clientY;
    lx.innerText = e.offsetX;
    ly.innerText =e.offsetY;
})
 */
//Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się zagnieżdżone elementy. Do każdego dopisane są eventy. Użyj metod stopPropagation i stopImmediatePropagation w taki sposób, aby:
//
// Wywoływały się eventy dla elementu pierwszego i drugiego, a nie wywoływał się event dla elementu trzeciego.
// Wywoływały się wszystkie eventy dla elementu czwartego i pierwszy event dla elementu piątego.
/*
document.querySelector("#element1").addEventListener("click", function (e) {
    console.log("Event in #element1 fired!");
});
document.querySelector("#element2").addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Event in #element2 fired!");
});

document.querySelector("#element3").addEventListener("click", function (e) {
    console.log("Event in #element3 fired!");
});

document.querySelector("#element4").addEventListener("click", function (e) {
    console.log("Event in #element4 fired!");
});

document.querySelector("#element5").addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    console.log("Event in #element5 fired!");
});

document.querySelector("#element5").addEventListener("click", function (e) {
    console.log("Second event in #element5 fired!");
});
 */
//Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się dwa elementy, które pokazują wielkość okna. Dopisz event do okna (element window), który spowoduje,
// że elementy te będą pokazywały poprawne wartości (innerWidth, innerHeight) nawet po przeskalowaniu okna (resize).
/*
const windowWidth = document.getElementById('windowWidth');
const windowHeight = document.getElementById('windowHeight');
window.addEventListener('resize',(e)=>{
    windowWidth.innerText = window.innerWidth;
    windowHeight.innerText = window.innerHeight;
})

 */
//Uruchom stronę przygotowaną dla zadania. Prześledź dokładnie kod i przeczytaj komentarze.
// Skoncentruj się na każdej linijce kodu. Zastanów się nad taką sytuacją: Potrzebujesz użyć elementu o id b wewnątrz funkcji innerFuncOne, żeby zmienić mu kolor.
// Jak to zrobisz? Odpowiedź umieść w komentarzu.
/*
const a = document.getElementById("a");
const b = document.getElementById("b");
// Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
// addEventListener to właśnie document)
console.log("obiekt document: ", this);
a.addEventListener("click", function (event) {
// Tutaj this wskazuje na element DOM o id a
    console.log("a: ", this);
});
b.addEventListener("click", function (event) {
// Tutaj this wskazuje na element DOM o id b
    console.log("b: ", this);
    function innerFuncOne() {
// Tutaj this wskazuje na element Window, bo funkcja została
//wywołana bez żadnego kontekstu.
        console.log("innerFuncOne: ", this);
        // b.style.backgroundColor='red';
    }
    innerFuncOne();
});

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
////////////TWORZENIE ELEMENTOW////////////
//Na stronie znajduje się tabela z zamówieniami. Przy każdym zamówieniu znajduje się przycisk, który służy do usuwania tego zamówienia. Dopisz do niego odpowiedni event, który spowoduje, że dane zamówienie zniknie z tablicy.
// Spróbuj zrobić to w taki sposób, żeby wszystkie przyciski korzystały z tego samego eventu (użyj this).
/*
const btns = document.querySelectorAll('a');
btns.forEach(btn=>{
    btn.addEventListener('click',function(e){
        this.parentElement.parentElement.remove();
    })
})

 */
//Na stronie znajduje się przycisk.
// Musisz dopisać do niego event w taki sposób, żeby po kliknięciu w niego został usunięty ze strony.
/*
document.getElementById('remove').addEventListener('click', function(){
    this.parentElement.removeChild(this);
})
 */
//Na stronie przypisanej do zadania znajduje się lista i przycisk.
// Dopisz odpowiednie eventy do nich w taki sposób, żeby po kliknięciu w przycisk dodał się nowy element do listy.
// Element powinien mieć w sobie informacje na temat tego, ile elementów jest w liście w chwili jego dodania.
/*
const menu = document.getElementById('menu');
const toCopy = menu.querySelector('li');

document.getElementById('add').addEventListener('click', function (){
    const copy = toCopy.cloneNode(true);
    console.log("hit")
    const l = menu.children.length;
    copy.innerText = "Element " + (l+1) + " - w chwili dodania było "+l+" elementów";
    menu.appendChild(copy);
})

 */
//Na stronie znajduje się tabela z informacjami na temat zamówień (z dwoma już wprowadzonymi zamówieniami).
// Poniżej znajduje się formularz do wypełnienia nowego zamówienia.
// Napisz event, który pobierze informacje z inputów (el.value) i wprowadzi nowy wpis do tabeli.
/*
document.getElementById('add').addEventListener('click',()=>{
    const id = document.getElementById('orderId').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const newItem = document.querySelector('tbody tr').cloneNode(true);
    newItem.children[0].innerText = id;
    newItem.children[1].innerText = item;
    newItem.children[2].innerText = quantity;
    document.querySelector('tbody').appendChild(newItem);
})

 */
//Na stronie znajduje się lista z wpisami i przycisk.
// Napisz taki event, żeby po kliknięciu w przycisk z listy zostały usunięte wszystkie jej dzieci.
// Element ul#list powinien pozostać na stronie.
/*
document.getElementById('remove').addEventListener('click',function(){
    Array.from(this.previousElementSibling.children).forEach(e=>{
        e.remove();
    });
})
*/
//Na stronie znajdują się dwie listy. Każdy z wpisów jest "klikalny".
//
// Napisz taki kod JavaScript, żeby po kliknięciu danego elementu listy, został on przeniesiony na drugą listę.
//
// Pamiętaj, że element może być przenoszony wiele razy (np. z listy 1 do listy 2, a potem z powrotem do listy 1).
/*
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');

document.querySelectorAll('a').forEach(element =>{
    element.addEventListener('click',function(){
        element.parentElement.id == 'list1'
            ? list1.removeChild(element) && list2.appendChild(element)
            : list2.removeChild(element) && list1.appendChild(element);
    })
})
 */
////////////FORMULARZE////////////
//Przy rozwiązywaniu tego zadania pamiętaj, aby teksty wypisywane w elementach #error-message i #success-message były identyczne jak w treści zadania. Elementy te mają nadane klasy d-none które je ukrywają. Należy tę klasę usunąć aby pokazać odpowiednie pole.
//
// Na stronie znajduje się formularz rejestracyjny. Napisz walidację tego formularza w taki sposób, żeby informacja o sukcesie pojawiła się tylko i wyłącznie wtedy, kiedy spełnione zostaną następujące warunki:
//
// Email zawiera w sobie @.
// Jeżeli warunek nie jest spełniony, wypisz w polu #error-message informację: Email musi posiadać znak @,
// Imię jest dłuższe niż 2 znaki.
// Jeżeli warunek nie jest spełniony, wypisz w polu #error-message informację: Twoje imię jest za krótkie,
// Nazwisko jest dłuższe niż 2 znaki.
// Jeżeli warunek nie jest spełniony, wypisz w polu #error-message informację: Twoje nazwisko jest za krótkie,
// Hasło i hasło drugie są identyczne, ale nie puste.
// Jeżeli warunek nie jest spełniony, wypisz w polu #error-message informację: Hasła nie są takie same lub puste,
// Checkbox musi być zaznaczony.
// Jeżeli warunek nie jest spełniony, wypisz w polu #error-message informację: Musisz zaakceptować warunki.
// Jeżeli walidacja przebiegła poprawnie, wpisz w polu #success-message informację: Formularz wysłany!.
/*
const email = document.getElementById('email');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const checkbox = document.getElementById('agree')

const btn = document.querySelector('button');
const err = document.getElementById('error-message');
const success = document.getElementById('success-message');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    err.classList.add('d-none');
    success.classList.add('d-none');
    if (!email.value.includes('@')) {
        err.innerText = 'Email musi posiadać znak @';
        err.classList.remove('d-none');
    } else if (name.value.length < 2) {
        err.innerText = 'Twoje imię jest za krótkie';
        err.classList.remove('d-none');
    } else if (surname.value.length < 2) {
        err.innerText = 'Twoje nazwisko jest za krótkie';
        err.classList.remove('d-none');
    } else if (pass1.value.length == 0 || pass1.value != pass2.value) {
        err.innerText = 'Hasła nie są takie same lub puste';
        err.classList.remove('d-none');
    }else if (checkbox.checked == false) {
        err.innerText = 'Musisz zaakceptować warunki';
        err.classList.remove('d-none');
    }else{
        success.innerText ="Formularz wysłany!"
        success.classList.remove('d-none');
    }
})
 */
//Na stronie znajduje się formularz do zamówienia. Jest w nim sekcja odpowiedzialna za wystawienie faktury.
//
// Napisz kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i wyłącznie wtedy, kiedy zaznaczony jest checkbox "Chcę otrzymać fakturę".
//
// Ma to również działać przy starcie strony: sekcja z danymi do faktury powinna być ukryta!
/*
const checkbox = document.getElementById('invoice');
const invoiceData = document.getElementById('invoiceData');
invoiceData.style.display = 'none';
checkbox.addEventListener('click',()=>{
    checkbox.checked ?   invoiceData.style.display = 'block' :   invoiceData.style.display = 'none';
})

 */
//Na stronie znajduje się select i trzy obrazki. Każdy z obrazków jest przypisany do jednego z wyborów w selekcie. Napisz kod javaScript w taki sposób, żeby widoczny był tylko ten obrazek, który został wybrany.
//
// Na start powinien być wyświetlony obrazek Windows. Następnie po wyborze innego i zatwierdzeniu przyciskiem Zatwierdź zmień wyświetlany obrazek.
/*
const btn = document.querySelector('button');
const imgs = document.querySelectorAll('img');
imgs.forEach(img=>{
    if(img.alt != "Windows"){
        img.style.display = 'none';
    }
})
function showIcon(pic){
    imgs.forEach(img=>{
        img.style.display = 'block';
        if(img.alt != pic){
            img.style.display = 'none';
        }
    })
}
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    showIcon(document.querySelector('select').value)
})
 */
//Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich. Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach. Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
//
// Obie drużyny muszą być różne.
// Liczba goli powinna być nieujemna.
// Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informacja o wyniku spotkania powinna pojawić się w tabeli jako kolejny wiersz.
/*
const team1 = document.getElementById('team1');
const team2 = document.getElementById('team2');
const points1 = document.getElementById('points1');
const points2 = document.getElementById('points2');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (team1.value != team2.value) {
        if (points1.value >= 0 && points2.value >= 0) {
            const newItem = document.querySelector('tbody').firstElementChild.cloneNode(true);
            console.log(newItem);
            newItem.children[0].innerText = team1.value;
            newItem.children[1].innerText = team2.value;
            newItem.children[2].innerText = points1.value + " - " + points2.value;
            console.log(newItem);
            document.querySelector('tbody').appendChild(newItem);
        }
    }

})
 */
/*

const input = document.getElementById('cardNumber');

// visa.style.display = 'none';

function showLogo(arr) {
    document.getElementById('visa-icon').style.display = 'none';
    document.getElementById('mastercard-icon').style.display = 'none';
    document.getElementById('amex-icon').style.display = 'none';
    console.log(arr[0]);
    if (arr[0] == 4) {
        document.getElementById('visa-icon').style.display = 'inline-block';
    }else if (arr[0]== 5){
        document.getElementById('mastercard-icon').style.display = 'inline-block';
    }else if (arr[0]== 3 && (arr[1]==4 || arr[1]==7)){
        document.getElementById('amex-icon').style.display = 'inline-block';
    }
}
function validate(arr){
    document.querySelector('input').style.backgroundColor = 'red';
    if (arr[0] == 4) {
        if(arr.length >= 13 && arr.length <=16){
            document.querySelector('input').style.backgroundColor = 'green';
        }

    }else if (arr[0]== 5){
        if(arr.length == 16){
            document.querySelector('input').style.backgroundColor = 'green';
        }

    }else if (arr[0]== 3 && (arr[1]==4 || arr[1]==7)){
        if(arr.length == 15){
            document.querySelector('input').style.backgroundColor = 'green';
        }
    }
}
input.addEventListener('input', () => {
    showLogo(Array.from(input.value));
    validate(Array.from((input.value)));
})
 */

