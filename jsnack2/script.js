/*
Snack2
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.
*/

// Dichiaro variabili e creo una lista di numeri interi
let sum = 0;
const intNumber = [];
const btnDelete = document.querySelector(".btn-delete");
const btnCreate = document.querySelector(".btn-create");
const numberOfListElement = document.querySelector(".number-of-list");
const listCreate = document.querySelector(".list-create");

// Creo un event listener con il pulsante "Genera" per chiedere all'utente quanti numeri vuole nella lista
btnCreate.addEventListener("click", function () {

    const numberOfList = numberOfListElement.value;

    // Controllo che il numero inserito sia corretto
    if (numberOfList <= 0) {
        alert("Hai inserito un valore errato.");
        location.reload();
    }

    // Aggiungo alla lista il numero di elementi scelto dall'utente
    for (let i = 0; i < numberOfList; i++) {
        intNumber.push(Math.floor(Math.random() * (99 - 1 + 1)) + 1);

        // Mostro all'utente la lista creata
        listCreate.classList.add("border", "rounded-4");
        listCreate.innerHTML += `<li class="list-group-item">${intNumber[i]}</li>`;
    }

    // Scorro su tutta la lista "saltando" ogni volta di 2
    for (let i = 0; i < intNumber.length; i = i + 2) {

        // Mostro all'utente quali sono gli elementi in posizione dispari
        listCreate.innerHTML += `<li class="list-group-item bg-secondary text-white">${intNumber[i]} è in posizione dispari</li>`;

        // Mentre scorro sommo i numeri
        sum += intNumber[i];
    }

    // Mostro all'utente il totale degli elementi in posizione dispari
    listCreate.innerHTML += `<li class="list-group-item bg-success text-white">La somma dei numeri in posizione dispari è: ${sum}</li>`;
})

// Creo un event listener con il pulsante "Cancella" per resettare la lista
btnDelete.addEventListener("click", function () {
    location.reload();
})