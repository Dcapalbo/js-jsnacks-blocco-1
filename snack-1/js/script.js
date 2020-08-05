// 1. l'utente inserisce il primo numero
var primoNumero = parseInt(prompt("inserisci primo numero"));
// 2. l'utente inserisce il secondo numero
var secondoNumero = parseInt(prompt("inserisci secondo numero"));
// condizione, se il primoNumero è maggiore del secondoNumero stampo il primo, se il secondoNumero è maggiore del primoNumero, stampo il secondo.
if (isNaN(primoNumero) || isNaN(secondoNumero)) {

   alert("Non è un numero, reinserire i dati!")

} else {
  if (primoNumero > secondoNumero) {
    console.log(primoNumero);
  } else if (primoNumero < secondoNumero) {
    console.log(secondoNumero);
  } else {
    console.log("Numeri uguali");
  }
}
