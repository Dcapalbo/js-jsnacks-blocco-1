// 1. inserisci un numero random
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// 2. Se è pari stampalo nel box rosso, se dispari nel box verde
if (randomNumber % 2 == 0){
   var square = document.getElementById('square-red').innerHTML = randomNumber;
   // Numero pari
} else {
   var square = document.getElementById('square-green').innerHtml = randomNumber;
   // Numero dispari
}
