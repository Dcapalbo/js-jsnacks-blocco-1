
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

