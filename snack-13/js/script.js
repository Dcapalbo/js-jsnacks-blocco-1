// Scrivi una funzione per stabilire se un numero è primo.
// Chiedi un numero all’utente e utilizza la funzione per comunicargli se il numero inserito è primo oppure no.
var utentNumber = parseInt(prompt("insert a number"));

function primeNumber() {
  if (utentNumber % 2 == 1 && utentNumber % 3 == 1) {
    return true;
  } else {
    return false;
  } 
}
console.log("it is a prime number");
