
var firstWord = prompt("insert the first word");
var secondWord = prompt("insert the second word");

function wordsLenght(firstWord, secondWord) {
  if (firstWord.length > secondWord.length) {
    console.log(firstWord);
  } else if (firstWord.length == secondWord.length) {
    console.log(firstWord, secondWord);
  } else {
    (firstWord.length < secondWord.length)
    console.log(secondWord);
  }
}

var lenght = wordsLenght(firstWord, secondWord);
