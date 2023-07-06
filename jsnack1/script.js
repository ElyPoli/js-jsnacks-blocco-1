/*
Snack1
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// Dichiaro variabili - creo la lista dei nomi, quella dei cognomi e una lista vuota.
const firstName = ["Leonardo", "Sofia", "Giulia", "Gabriele", "Edoardo", "Andrea", "Alice", "Aurora", "Tommaso", "Mattia", "Vittoria", "Giorgia"];
const lastName = ["Rossi", "Fontana", "Marino", "Colombo", "Mancini", "Longo", "Moretti", "Ricci", "Costa", "Romano"];
const inviteList = [];

// Genero la falsa lista di 10 invitati
for (let i = 0; i < 10; i++) {

    // Genero casualmente un numero da 0 ad un numero in meno rispetto la lungezza della lista 
    const firstNameNumber = Math.floor(Math.random() * ((firstName.length - 1) - 0 + 1)) + 0;
    const lastNameNumber = Math.floor(Math.random() * ((lastName.length - 1) - 0 + 1)) + 0;

    console.log(firstNameNumber);
    console.log(lastNameNumber);

    // Prendo i due elementi della lista nomi e cognomi che corrispondono alla posizione dei due numeri generati e assegno i due valori alla nuova lista
    inviteList[i] = firstName[firstNameNumber] + " " + lastName[lastNameNumber];

    console.log(inviteList[i]);
}