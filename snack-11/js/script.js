
var firstWord = prompt("insert the first word");
var secondWord = prompt("insert the second word");

function wordsLenght(firstWord, secondWord) {
  if (firstWord > secondWord) {
    console.log(firstWord);
  } else if (firstWord == secondWord) {
    console.log(firstWord, secondWord);
  } else {
    (firstWord < secondWord)
    console.log(secondWord);
  }
}

var lenght = wordsLenght(firstWord, secondWord);
