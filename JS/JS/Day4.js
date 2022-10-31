////////////FETCH////////////
//Zadanie 1 - rozwiązywane z wykładowcą
// Stworzysz teraz aplikację do pobierania informacji na temat książki o danym numerze isbn.
//
// W pliku index.html masz przygotowany formularz.
//
// Podepnij do niego zdarzenie, aby w momencie zatwierdzania formularza wysłał zapytanie do API o książkę o danym numerze isbn.
//
// Wykorzystaj do tego fetch() i wykonaj zapytanie na adres otwartego API:
//
// https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}
//
// gdzie zamiast numerISBN pobrany z formularza
//
// Otrzymasz w odpowiedzi JSON, a z niego obiekt, w którym interesuje Cię tablica pod kluczem items, a w niej pierwszy element - obiekt z informacją o książce.
//
// Po pobraniu tych danych utwórz za pomocą JavaScript element h2 z tytułem (jest w tym obiekcie pod kluczem volumeInfo.title i wstaw go do elementu o klasie .book-info.
//
// Przetestuj formularz np. dla isbn = 0747532699
/*
document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault();
    const query = document.querySelector('input').value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${query}`)
        .then(res=>{
            return res.json();
        }).then(json =>{
            document.querySelector('.book-info').innerText = json.items[0].volumeInfo.title;
    }).catch(err=>{
        console.log(err);
    })
})
 */
//Zadanie polega na wczytaniu danych z adresu: https://pokeapi.co/api/v2/pokemon i wyświetlenie ich nazw w kolejnych li.
//
// Przydatne informacje:
//
// użyj odpowiedniej metody HTTP, jeśli jest potrzebna,
// użyj odpowiednich metod informujących użytkownika o statusie żądania (metody then(), catch()),
// sprawdź w konsoli, jak wyglądają wczytywane dane, czy jest to tablica, string, JSON?
// jeśli dane zostaną poprawnie wczytane, w pętli utwórz elementy li do którego wstawisz nazwę pokemona i li wstawisz do ul
// Dla chętnych
// API zwraca nam tylko określoną ilość pokemonów + linki do API aby pobrać poprzednią / następną pulę. Dorób paginację i pobieranie kolejnych pokemonów.
/*
const pokBox = document.querySelector('.list');
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => (
        res.json()
    )).then(json => (
        console.log(json.next),
        json.results.forEach(pok=>{
            pokBox.innerHTML +=`<li>${pok.name}</li>`
            }
        ),
    fetch(json.next)
        .then(res=>(
            res.json()
        )).then(json=>(
        json.results.forEach(pok=>{
            pokBox.innerHTML +=`<li>${pok.name}</li>`
        }
    )).catch(err=>{
        console.log(err)
    })

)).catch(err => {
    console.log(err);
}))
 */
//rozwiazanie z async await
/*
const pokBox = document.querySelector('.list');
async function getData(){
     const res = await fetch('https://pokeapi.co/api/v2/pokemon');
     const data = await res.json();
     const res2 = await fetch(data.next);
     const data2 = await  res2.json();
    data.results.forEach(pok =>{
        pokBox.innerHTML += `<li>${pok.name}</li>`
    })
    data2.results.forEach(pok =>{
        pokBox.innerHTML += `<li>${pok.name}</li>`
    })
}
getData();
 */
//Pod adresem https://fer-api.coderslab.pl/v1/holidays jest przechowywana baza świąt państwowych różnych krajów. Aby z niej skorzystać należy przesłać specjalny klucz (key): e92601251-c0a2-4s63-v73f-54041195480f. API wymaga również podania kodu kraju (country). Do dyspozycji mamy trzy:
//
// Polska (PL)
// Wielka Brytania (GB)
// Stany Zjednoczone (US)
// Zasób	Metoda	Dane	Opis
// /holidays	GET	key, country	Pobranie świąt w danym kraju
// Za pomocą funkcji fetch() wczytaj do elementu ul wszystkie daty świąt (jako elementy li). Aby poprawnie wczytać dane w funkcji fetch() trzeba w odpowiedni sposób skonstruować adres URL naszego żądania, np.: https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL.
//
// Każdą nazwę święta wczytaj do elementu li jako element h3.holiday-name, a jego datę wczytaj do elementu li jako element date.holiday-date.
//
// Podpowiedzi:
//
// Wczytaj dane i zobacz w konsoli jak wyglądają, pozwoli Ci to ustalić czego należy użyć, aby dostać się do nazw i dat świąt. Możesz tutaj wykorzystać też zakładkę Network.
// Dodatkowe
// Dorób na stronie formularz, który zawiera element select w którym będzie można wybrać z którego kraju mają pojawiać się święta. Wybór jakiegoś elementu option ma spowodować ponowne wysłanie zapytania i utworzenie na nowo elementów listy. Domyślnie wybraną opcją ma być PL.
/*
const app = document.getElementById('app');
const list = document.createElement('ul');
list.classList.add('list');
app.appendChild(list);
async function getData(){
    const res = await fetch('https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL');
    const data = await res.json();
    data.holidays.forEach(holiday =>{
        document.querySelector('.list').innerHTML += `<li><h3 class="holiday-name">${holiday.name}</h3></li>`
        document.querySelector('.list').innerHTML += `<li class="holiday-date">${holiday.date}</li>`
    })

    console.log(data.holidays);
}
getData();

 */
//Slider
// Twoim zadaniem jest stworzenie prostego slidera. Realizacja podzielona jest na punkty. Pamiętaj, żeby trzymać się dokładnie ich treści i wykonywać je po kolei.
//
// Punkt 1
// Zapoznaj się z kodem HTML i CSS dodanym do zadania. Do zrobienia slidera zazwyczaj używany odpowiednio ostylowanej listy, w której znajdują się obrazki. Lista zazwyczaj spełnia następujące zależności:
//
// Nie ma żadnych stylów.
// Ma szerokość i wysokość odpowiednią do wyświetlenia jednego obrazka.
// Wszystkie obrazki mają tę samą szerokość i wysokość.
// Wszystkie obrazki poza jednym są niewidoczne.
// Dodaj w odpowiednie miejsce klasę slider w kodzie HTML.
//
// Punkt 2
// Przygotuj do pracy plik app.js. Następnie znajdź następujące elementy i zapisz je do zmiennych:
//
// Guzik next.
// Guzik prev.
// Wszystkie elementy listy (zapisz do tablicy).
// Dodaj też zmienną liczbową, która będzie określała indeks obrazka, który jest aktualnie widoczny (na początku będzie to pierwszy obrazek - czyli zmienna będzie wskazywała na indeks 0).
//
// Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.
//
// Punkt 3
// Po dodaniu klasy slider zniknęły nam wszystkie obrazki. Dodaj do zerowego elementu naszej listy klasę visible. Użyj odpowiednich zmiennych:
//
// tablicy z elementami listy,
// zmiennej, która określa widoczny element. Po wejściu na stronę pierwszy obrazek powinien być widoczny.
// Punkt 4
// Dodaj do guzików eventy reagujące na kliknięcie. Na początku mają tylko wypisywać w konsoli informacje o kliknięciu.
//
// Punkt 5
// W evencie odpowiadającym za pokazanie następnego obrazka wykonaj następujące czynności:
//
// Zabierz obecnie widocznemu obrazkowi klasę visible.
// Zwiększ zmienną trzymającą indeks obrazka, który jest aktualnie widoczny o jeden.
// Dodaj obrazkowi, który powinien być widoczny, klasę visible. Użyj odpowiednich zmiennych (czyli tablicy z elementami listy oraz zmiennej, która określa, który element jest widoczny).
// Punkt 6
// Wykonaj czynności w evencie dla guzika pokazującego poprzedni obrazek analogicznie do punktu 5.
//
// Punkt 7
// Sprawdź, jak działa Twoja strona. Widzisz jakieś problemy związane ze sliderem? Napisz.
//
// Punkt 8
// W poprzednim punkcie powinieneś zauważyć, że po wielokrotnym naciśnięciu guzika do przodu (albo do tyłu) obrazki znikają ze strony. Dzieje się tak dlatego, że zmienna określająca numer widocznego obrazka przyjmuje niepoprawną wartość (mniejszą od zera lub większą niż liczba elementów w naszej tablicy). Jak temu zaradzić? W eventach dodaj if-a, który sprawdzi, czy wartość nie wyszła poza zakres. Jeżeli tak się stało, to program ma nastawić poprawną wartość:
//
// liczbą jest ujemna -> ostatni element,
// liczba równa się liczbie elementów lub jest większa -> 0.
/*
const next = document.getElementById('nextPicture');
const prev = document.getElementById('prevPicture');
const imgs = document.querySelectorAll('li');
let num = 0;
imgs[num].classList.add('visible');
next.addEventListener('click',()=>{
    imgs[num].classList.remove('visible');
    num++;
    num == 6 ? num = 0 : null;
    imgs[num].classList.add('visible');
    console.log('next');
})
prev.addEventListener('click', ()=>{
    imgs[num].classList.remove('visible');
    num--;
    num == -1 ? num = 5 : null;
    imgs[num].classList.add('visible');
    console.log('prev')
})

 */
//Gallery
// Napisz prostą galerię. Po naciśnięciu miniatury zdjęcia powinno się ono pokazywać w trybie pełnego ekranu. Będzie się to działo przez dodanie nowego elementu w chwili, w której ktoś kliknie na daną miniaturę. Zadanie podzielone jest na punkty. Pamiętaj, żeby trzymać się dokładnie treści punktów i robić je po kolei.
//
// Punkt 1
// Zapoznaj się z kodem HTML i CSS dodanym do zadania. Do zrobienia galerii zazwyczaj używany odpowiednio wystylowanej listy, w której znajdują się obrazki. Lista zazwyczaj spełnia następujące zależności:
//
// Nie ma żadnych stylów.
// Ma szerokość i wysokość odpowiednią do wyświetlenia jednego obrazka.
// Wszystkie obrazki mają tę samą szerokość i wysokość.
// Wszystkie obrazki są widoczne.
// W kodzie HTML dodaj (ręcznie) w odpowiednie miejsce klasę gallery.
//
// Punkt 2
// Przygotuj do pracy plik app.js. Następnie znajdź następujące elementy i zapisz je do zmiennych:
//
// Wszystkie elementy listy (zapisz do tablicy).
// Tag body (będzie nam potrzebny do dodania elementu, który pokaże się na pełnym ekranie).
// Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.
//
// Punkt 3
// Do wszystkich obrazków dodaj event reagujący na kliknięcie. Najpierw może wypisywać "działa" w konsoli.
//
// Punkt 4
// Zmodyfikuj event w taki sposób, żeby w konsoli wypisywał adres URL klikniętego obrazka. Użyj do tego this.
//
// Punkt 5
// Zauważ, że na górze pliku app.js jest zakomentowany kawałek kodu HTML. Jest to wzór elementu, który ma zostać dodany do strony. Przeanalizuj go, a następnie zmodyfikuj event dla obrazków w taki sposób, żeby tworzyć takie elementy i dodawały go do tagu body. Pamiętaj o tym, żeby pod adres URL obrazka podłożyć odpowiednie dane.
//
// Punkt 6
// Po kliknięciu na obrazek powinien nam się wyświetlać powiększony obrazek + guzik. Musisz teraz dopisać event reagujący na kliknięcie w guzik. Ma on spowodować usunięcie nowo stworzonego elementu z drzewa DOM.
//
// Punkt 7
// Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.
/*

 // <div class="fullScreen">
 //   <img src="./images/wrong.png">
 //   <button class="close">Close</button>
 // </div>


const imgs = document.querySelectorAll('li');
const body = document.querySelector('body');


imgs.forEach(img => {
    img.addEventListener('click', function () {
        body.innerHTML += `
                <div class="fullScreen">
                    <img src="${this.firstChild.src}">
                    <button class="close">Close</button>
                 </div>`;
        const close = document.querySelector('.close');
        const fullScreen = document.querySelector('.fullScreen');
        close.addEventListener('click',function (){
            body.removeChild(fullScreen);
        })
    })
})
*/
//Gallery with filter
// Napisz galerię, w której będziesz chować obrazki z odpowiednimi tagami. Po wpisaniu tagu w inpucie i kliknięciu guzika obrazki opisane tym tagiem powinny zniknąć/pojawić się.
//
// Zadanie podzielone jest na punkty. Pamiętaj, żeby trzymać się dokładnie treści punktów i robić je po kolei.
//
// Punkt 1
// Zapoznaj się z kodem HTML i CSS dodanym do zadania. Do zrobienia galerii zazwyczaj używamy diva o odpowiednim id.
//
// Punkt 2
// Przygotuj do pracy plik app.js. Następnie znajdź następujące elementy i zapisz je do zmiennych:
//
// Wszystkie obrazki należące do galerii (zapisz do tablicy).
// Guzik odpowiedzialny za znikanie obrazków.
// Guzik odpowiedzialny za pojawianie się obrazków.
// Input, do którego będziemy wprowadzać tagi.
// Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.
//
// Punkt 3
// Do guzików dopisz eventy na kliknięcie. Sprawdź, czy działają przez wyświetlenie w konsoli jakiegoś napisu.
//
// Punkt 4
// Zmień eventy w taki sposób, żeby wyświetlały tekst wpisany w inpucie, a następnie czyściły go. Zapisz ten tekst do zmiennej.
//
// Punkt 5
// Zmień eventy w taki sposób, żeby dodatkowo wypisywały wszystkie tagi dla wszystkich obrazków (czyli musisz użyć pętli i datasetu).
//
// Punkt 6
// Zmień eventy w taki sposób, żeby wyświetlały tylko i wyłącznie tagi, w których znajduje się napis z inputu (użyj do tego indexOf).
//
// Punkt 7
// Zmień eventy, w taki sposób, żeby zamiast wyświetlać tag dla obrazka (cały czas tylko dla tych, które mają odpowiedni tag), obrazek ten dostawał lub tracił (w zależności od guzika) klasę invisible.
//
// Punkt 8
// Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.
/*
window.addEventListener('DOMContentLoaded',()=>{
    const imgs = document.querySelectorAll('#gallery img');
    const show = document.getElementById('showButton');
    const hide = document.getElementById('hideButton');
    const inputVal = document.getElementById('tagInput');

    show.addEventListener('click',()=>{

        imgs.forEach(img=>{
            if(img.getAttribute('data-tag').includes(inputVal.value)){
                img.classList.remove('invisible');
            }
        })
        inputVal.value = '';
    })
    hide.addEventListener('click',()=>{
        imgs.forEach(img=>{
            if(img.getAttribute('data-tag').includes(inputVal.value)){
                img.classList.add('invisible');
            }
        })
        inputVal.value = '';
    })
})

 */
//Menu
// Napisz proste rozwijane menu. Zazwyczaj tworzy się je w liście (gdzie podmenu znajduje się w zagnieżdżonych listach). Nasze menu ma dwa poziomy (następne poziomy możecie dorobić podobnie do pierwszego).
//
// Zadanie podzielone jest na punkty. Pamiętaj, żeby trzymać się dokładnie treści punktów i robić je po kolei.
//
// Punkt 1
// Zapoznaj się z kodem HTML i CSS dodanym do zadania. Menu będzie się dobrze wyświetlać, gdy dodasz odpowiednią klasę do odpowiedniego elementu.
//
// Punkt 2
// Przygotuj do pracy plik app.js.
//
// Następnie znajdź elementy listy i zapisz je do zmiennych. Chodzi o wszystkie elementy listy głównej (te, które są widoczne), bez elementów listy zagnieżdżonych (te, które są niewidoczne). Pamiętaj o trzymaniu ich w tablicy. Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.
//
// Punkt 3
// Do każdego elementu listy (trzymanego w zmiennej) dodaj dwa eventy: mouseover i mouseout. Wypisz coś w konsoli, żeby sprawdzić, czy eventy są dobrze podpięte.
//
// Punkt 4
// Zmień eventy w taki sposób, żeby wyszukiwały pod listę elementu, na który najechaliśmy myszką (czyli zagnieżdżony element ul).
//
// Punkt 5
// Zmień eventy w taki sposób, żeby wiadomość z punktu 3. była wyświetlana, tylko gdy pod lista istnieje (czyli zwrócony element jest inny niż null).
//
// Punkt 6
// Zmień event mouseover. Ma on nie wyświetlać informacji w konsoli, a powodować, że pod lista jest widoczna. Jeżeli nie wiesz, jak to zrobić, sprawdź kod CSS, żeby doczytać się, w jaki sposób lista staje się niewidoczna.
//
// Punkt 7
// Zmień event mouseout. Ma on nie wyświetlać informacji w konsoli, a powodować, że pod lista znowu znika.
//
// Punkt 8
// Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.
/*
const el = document.querySelector('.nav').firstElementChild.children;
Array.from(el).forEach(item =>{
    item.addEventListener('mouseover',()=>{
        if(item.firstElementChild !=null){
            item.firstElementChild.style.display = 'block';
        }

    });
    item.addEventListener('mouseout',()=>{
        if(item.firstElementChild !=null){
            item.firstElementChild.style.display = 'none';
        }
    })
})
console.log(el)
 */
//Tooltips
// Napisz tooltipy. Są to małe okienka wyskakujące po najechaniu na tekst z dodatkowymi informacjami. Jest to prosta wersja tego, co znajdziesz tutaj: https://jqueryui.com/tooltip/.
//
// Tekst, który ma się wyświetlić w tooltipie, powinien być trzymany w datasecie. Zadanie podzielone jest na punkty. Pamiętaj, żeby trzymać się dokładnie treści punktów i robić je po kolei.
//
// Punkt 1
// Zapoznaj się z kodem HTML i CSS dodanym do zadania.
//
// Punkt 2
// Przygotuj do pracy plik app.js. Następnie znajdź elementy o klasie tooltip (pamiętaj, że może być ich wiele) i zapisz je do zmiennych. Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.
//
// Punkt 3
// Do każdego elementu o klasie tooltip dodaj dwa eventy: mouseover i mouseout. Dodaj do nich wyświetlanie jakiegoś napisu w konsoli, żeby sprawdzić, czy wszystko działa.
//
// Punkt 4
// Zmodyfikuj eventy w taki sposób, żeby wyświetlały w konsoli tekst tooltipu, który będziemy dodawać.
//
// Punkt 5
// Zmodyfikuj event mouseover. Ma on dodawać nowy element do elementu, na którym jest wywoływany. Przykładowy element, który masz dodać, znajduje się w komentarzu na początku pliku app.js.
//
// Punkt 6
// Zmodyfikuj event mouseout w taki sposób, żeby usuwał tooltip stworzony w poprzednim punkcie.
//
// Punkt 7
// Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.
/*
 // <span class="tooltipText">Text tooltipa</span>


const tips = document.querySelectorAll('.tooltip');
console.log(tips)
tips.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        item.innerHTML += ` <span class="tooltipText">${item.getAttribute('data-text')}</span>`
    })
    item.addEventListener('mouseout',()=>{
        const toremove = item.querySelector('.tooltipText');
        item.removeChild(toremove);
    })
})

 */
