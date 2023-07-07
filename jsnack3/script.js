/*
Snack3 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Dichiaro variabili e creo due liste
const listShort = [0, 1, 2];
const listLong = ["Sofia", "Francesco", "Gabriele", "Ginevra", "Aurora", "Andrea", "Vittorio", "Mattia", "Alice", "Samuele", "Lorenzo", "Alessandro", "Chiara", "Beatrice", "Emma"];
let numberListLong, numberListShort;
// variabili per le liste
const listLongStart = document.querySelector(".long-list-start");
const listShortStart = document.querySelector(".short-list-start");
const listLongEnd = document.querySelector(".long-list-end");
const listShortEnd = document.querySelector(".short-list-end");
// variabili per le etichette dei valori delle liste
const firstListEnd = document.getElementById("first-list-end");
const secondListEnd = document.getElementById("second-list-end");
const firstListStart = document.getElementById("first-list-start");
const secondListStart = document.getElementById("second-list-start");
// pulsante e variabile per rendere visibili le due liste lunghe uguali sotto
const btnAdd = document.querySelector(".btn-add");
const boxFinalLists = document.getElementById("box-final-lists");

// Memorizzo il numero di elementi che ho nella lista lunga
for (numberListLong = 0; numberListLong < listLong.length; numberListLong++) {

    // Mentre scorro mostro all'utente la lista lunga
    listLongStart.classList.add("border", "rounded-4");
    listLongStart.innerHTML += `<li class="list-group-item">${listLong[numberListLong]}</li>`;
    // Creo la lista corta anche nel box della lista finale lunga
    listLongEnd.classList.add("border", "rounded-4");
    listLongEnd.innerHTML += `<li class="list-group-item">${listLong[numberListLong]}</li>`;
}

firstListStart.innerHTML = numberListLong;

// Memorizzo il numero di elementi che ho nella lista corta
for (numberListShort = 0; numberListShort < listShort.length; numberListShort++) {

    // Mentre scorro mostro all'utente la lista corta
    listShortStart.classList.add("border", "rounded-4");
    listShortStart.innerHTML += `<li class="list-group-item">${listShort[numberListShort]}</li>`;
    // Creo la lista corta anche nel box della lista finale corta
    listShortEnd.classList.add("border", "rounded-4");
    listShortEnd.innerHTML += `<li class="list-group-item">${listShort[numberListShort]}</li>`;
}

secondListStart.innerHTML = numberListShort;

// Aggiungo elementi alla lista corta fino a che non risultano lunghe uguali
while (numberListShort < numberListLong) {

    listShort.push(numberListShort);

    // Mentre scorro aggiungo i nuovi elementi alla lista corta finale
    listShortEnd.innerHTML += `<li class="list-group-item">${listShort[numberListShort]}</li>`;

    numberListShort++;
}

firstListEnd.innerHTML = numberListLong;
secondListEnd.innerHTML = numberListShort;

// Creo un event listener con il pulsante "Aggiungi elementi" per mostrare poi sotto le due liste lunghe uguali
btnAdd.addEventListener("click", function () {

    boxFinalLists.classList.remove("d-none");
})