let numbers = [-2, 3, 7, 8, -1, 4, 2];
let sum = 0;
let sumOfNumbersEven = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] > sum) {
        sumOfNumbersEven += numbers[i];
      }
}
console.log(sumOfNumbersEven);
// Example - sum all numbers in the interval [1..10]:
var sumNumbers = 0;
for ( var x = 1; x <= 10 ; x++ ){
    sumNumbers += x ;
};
console.log("sum = " + sumNumbers);

// TASK: given the array numbers, write the code which will print in console the sum of all positive  even numbers in the array:
//let numbers = [-2, 3, 7, 8, -1, 4, 2];
// >>>>>>>>> write your code bellow:


