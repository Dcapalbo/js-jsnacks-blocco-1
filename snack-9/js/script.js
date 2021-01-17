// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

// Arrays 
let numbers = [3, 45, 10, 23, 9, 45, 34];
// constant reducer function to sum the value inside of the array 
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sumTotal = numbers.reduce(reducer);
console.log(sumTotal);

function sumDigits(sumTotal) {
    subTotal = 0;
    let i = 0;
    while (sumTotal) {
        subTotal += sumTotal % 10;
        sumTotal = Math.floor(sumTotal / 10);
        i++
    }
}
sumDigits(sumTotal);
console.log(subTotal);

