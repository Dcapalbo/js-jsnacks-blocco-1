//1. create an empty array
var numbers = [];
var sum = 0;

while (sum < 50) {
  var utentNumber = parseInt(prompt("insert a number"));
  numbers.push(utentNumber)
  sum += utentNumber;
  console.log(sum);
  console.log(utentNumber);  
}
