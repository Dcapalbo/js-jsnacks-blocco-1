//1 array per i numeri dispari vuoto.
var numeriDispari = [];
//2 assegnare una variabile i per il ciclo while.
var i = 0;
while (i < 6) {
  var numeroUtente = parseInt(prompt("inserisci un Numero"));
  if (numeroUtente % 2 != 0) {
    //3 in caso di numero dispari, il numero viene inserito dentro l'array
    numeriDispari.push(numeroUtente);
  }
  i++;
}
// 4 stampare il contenuto dell'array in console
console.log(numeriDispari);
