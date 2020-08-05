// 1. l'utente inserisce la prima parola
var primaParola = prompt("inserisci prima parola");
//2. l'utente inserisce la seconda parola
var secondaParola = prompt("inserisci seconda parola");
// condizione, la parola più lunga dell'altra verrrà stampata prima a schermo
if (primaParola.length > secondaParola.length) {
  console.log(primaParola + " " + secondaParola);
} else if (secondaParola.length > primaParola.length) {
  console.log(secondaParola + " " + primaParola);
} else {
  console.log("le parole sono lunghe uguali");
}
