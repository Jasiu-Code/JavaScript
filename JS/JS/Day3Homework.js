//Na stronie znajduje się sekcja z dwoma elementami article. W każdym artykule znajdują się elementy h2, a oraz div o klasie content, który jest ukryty w CSS (klasa d-none).
//
// Twoim zadaniem jest:
//
// ustawienie na pierwszym linku eventu, który spowoduje, że kiedy użytkownik w niego kliknie pokaże się element o klasie content (należący do tego artykułu).
// ustawienie na drugim linku eventu, który spowoduje, że kiedy użytkownik na niego najedzie pokaże się element o klasie content (należący do tego artykułu).
/*
const btns = document.querySelectorAll('a');

Array.from(btns)[0].addEventListener('click',function(){
    this.nextElementSibling.classList.toggle('d-none')
})
Array.from(btns)[1].addEventListener('mouseover',function(){
    this.nextElementSibling.classList.toggle('d-none')
})
 */
//Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami, w którym użytkownik może wybrać sobie dodatki.
//
// Cena każdego z dodatków jest trzymana w atrybucie data-price.
//
// Napisz takie eventy, żeby po zaznaczeniu checkboxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza wewnątrz elementu order-info wyświetliła się następująca informacja: "Do zapłaty: [odpowiednia kwota]", gdzie [odpowiednia kwota] to wartość zamówienia (cena za dodatki + 35zł podstawy za pizze). Pamiętaj o tym, że kliknięcie w przycisk wywołuje domyślną akcję przeładowania strony. Zablokuj tą akcję, aby móc zobaczyć wpisaną informację do elementu order-info.
//
// Zwróć uwagę na dwa specjalne przyciski:
//
// Wyczyść - powinien odznaczyć wszystkie opcje,
// Wszystkie dodatki - powinien zaznaczyć wszystkie opcje
/*
const checkBoxes = document.querySelectorAll('[type = checkbox]');
const btns = document.querySelectorAll('button');



function checkSum() {
    let sum = 0;
    checkBoxes.forEach(box => {
        box.checked ? sum += parseFloat(box.getAttribute('data-price')) : sum;
        sum = Math.round(sum * 100) / 100;
        const price = document.getElementById('price');
        price.innerText = sum + 'zł';
        console.log(sum)
    })
}
checkBoxes.forEach(box=>{
    box.addEventListener('change',checkSum)
})
btns[0].addEventListener('click', () => {
    checkBoxes.forEach(box => {
        console.log('click')
        box.checked = true;

    })
    checkSum();
})
btns[1].addEventListener('click', () => {
    checkBoxes.forEach(box => {
        console.log('click')
        box.checked = false;
    })
    checkSum();
})
btns[2].addEventListener('click', (e) => {
    e.preventDefault();
    const price = parseFloat(document.getElementById('price').innerText) +35;
    console.log(price)
    document.getElementById('price').parentElement.nextElementSibling.innerText = "Do zapłaty: "+price+"zł";
})
 */
