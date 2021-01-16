// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

let numeroUtente = prompt("inserisci un numero a quattro cifre");

let sumTotal = 0;

for (let i = 0; i < numeroUtente.length; i++) {
  sumTotal += parseInt(numeroUtente[i]);
}

console.log(sumTotal);
