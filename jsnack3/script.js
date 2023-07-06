/*
Snack3 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Dichiaro variabili e creo due liste
const listShort = [0, 1, 2];
const listLong = ["Sofia", "Francesco", "Gabriele", "Ginevra", "Aurora", "Andrea", "Vittorio", "Mattia", "Alice", "Samuele", "Lorenzo", "Alessandro", "Chiara", "Beatrice", "Emma"];
let numberListLong, numberListShort;

// Memorizzo il numero di elementi che ho nella lista lunga
for (numberListLong = 0; numberListLong < listLong.length; numberListLong++) {

}

console.log(numberListLong);

// Memorizzo il numero di elementi che ho nella lista corta
for (numberListShort = 0; numberListShort < listShort.length; numberListShort++) {

}

console.log(numberListShort);

// Aggiungo elementi alla lista corta fino a che non risultano lunghe uguali
while (numberListShort < numberListLong) {

    listShort.push(numberListShort);

    numberListShort++;
}

console.log(numberListShort);
console.log(listShort);