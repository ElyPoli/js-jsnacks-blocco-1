/*
Snack1
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// Dichiaro variabili e creo la lista dei nomi, quella dei cognomi e una lista vuota.
const firstName = ["Leonardo", "Sofia", "Giulia", "Gabriele", "Edoardo", "Andrea", "Alice", "Aurora", "Tommaso", "Mattia", "Vittoria", "Giorgia"];
const lastName = ["Rossi", "Fontana", "Marino", "Colombo", "Mancini", "Longo", "Moretti", "Ricci", "Costa", "Romano"];
const inviteList = [];
const btnDelete = document.querySelector(".btn-delete");
const btnCreate = document.querySelector(".btn-create");
const numberNameListElement = document.querySelector(".number-name-list"); // Chiedo all'utente quanti invitati generare
const inviteListCreate = document.querySelector(".invite-list-create");

// Creo un event listener con il pulsante "Crea lista" per creare una lista di nomi
btnCreate.addEventListener("click", function () {

    const numberNameList = numberNameListElement.value;

    // Controllo il numero inserito dall'utente
    if (numberNameList <= 0) {
        alert("Hai inserito un valore errato.");
        location.reload();
    }

    // Genero la lista del numero di invitati richiesti dall'utente
    for (let i = 0; i < numberNameList; i++) {

        // Genero casualmente un numero da 0 ad un numero in meno rispetto la lungezza della lista 
        const firstNameNumber = Math.floor(Math.random() * ((firstName.length - 1) - 0 + 1)) + 0;
        const lastNameNumber = Math.floor(Math.random() * ((lastName.length - 1) - 0 + 1)) + 0;

        // Prendo i due elementi della lista nomi e cognomi che corrispondono alla posizione dei due numeri generati e assegno i due valori alla nuova lista
        inviteList[i] = firstName[firstNameNumber] + " " + lastName[lastNameNumber];

        // Mostro all'utente la lista creata
        inviteListCreate.classList.add("border", "rounded-4");
        inviteListCreate.innerHTML += `<li class="list-group-item">${inviteList[i]}</li>`;
    }
})

// Creo un event listener con il pulsante "Cancella lista" per resettare la lista
btnDelete.addEventListener("click", function () {
    location.reload();
})