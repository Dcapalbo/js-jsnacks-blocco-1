// 1. inserisci un numero random
var randomnumber = Math.floor(Math.random() * 100) +1;
console.log(randomnumber);
// 2. chiedi all'utente di inserire un numero
var numeroUtente = parseInt(prompt("inserisci un numero"));
// 3. Proseguo se il dato inserito è un Numero
if (!isNaN(numeroUtente));
// 4. Sommo le due variabili
var somma = randomnumber + numeroUtente
// 5. Stampa nell'HTML la somma dei due numeri
document.getElementById('Numero').innerHTML= randomnumber + numeroUtente;
