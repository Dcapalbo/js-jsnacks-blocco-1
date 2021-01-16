// You'll have to capitalize each word.
// Your task is to convert strings in UpperCases.
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
};
