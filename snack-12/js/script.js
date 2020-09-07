// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali
// tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

//1. make a function to create random numbers

function randomizeNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//2. make two for cicle to generate the array n and the random numbers inside of it
var n = parseInt(prompt("insert a number"));

for (var i = 0; i < n; i++) {
  var array = [];
  for (var j = 0; j < 10; j++) {
    array.push(randomizeNumbers(100, 1));
  }
  console.log("array n°" + (i + 1) + " => " + array);
}
