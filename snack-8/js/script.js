// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

//1. chiedo il numero all' Utente
var numeroUtente = parseInt(prompt("inserisci un numero"));
//2. inizio un ciclo for per calcolare ogni singolo numero
for (var i = 1; i < numeroUtente; i++) {
  //3. elevo a potenza cubica il numero dell'Utente
  var potenzaCubica = Math.pow(i,3);
  console.log(potenzaCubica);
}
