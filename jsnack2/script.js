/*
Snack2
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.
*/

// Dichiaro variabili e creo una lista di numeri interi
let sum = 0;
const intNumber = [99, 77, 97, 82, 80, 66, 8, 83, 73, 42, 57, 33, 6, 68, 11, 74, 32, 86];

// Scorro su tutta la lista "saltando" ogni volta di 2
for (let i = 0; i < intNumber.length; i = i + 2) {

    console.log(intNumber[i]);

    // Mentre scorro sommo i numeri
    sum += intNumber[i];
}

console.log(sum);
