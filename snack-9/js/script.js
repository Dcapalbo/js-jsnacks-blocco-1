// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var numeroUtente = prompt("inserisci un numero a quattro cifre");

var totale = 0;

for (var i = 0; i < numeroUtente.length; i++) {
  totale += parseInt(numeroUtente[i]);
}

console.log(totale);
