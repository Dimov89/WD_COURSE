// // TASK: преди да пуснете програмата си запишете какъв очаквате да е изхода от програмата и след това сравнете.

// var x = 1;

// var foo = function() {
//   var x = 2;

//   let bar = function(x) {
//     console.log("x in bar = ", x) //99
//   };
//   bar(99);

//   console.log("x in foo = ", x); //2
// }

// foo();
// console.log("x in main = ", x); //2


// //TASK 2: 
// //да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:

// // ---> YOUR CODE HERE <---
// function calcRectangleArea() {
//    return rectWidth*rectHeight;
// }

// // !!! Do not change code bellow
// // TEST:
// let rectWidth = 6;
// let rectHeight = 3;

// let area = calcRectangleArea(rectWidth, rectHeight);

// console.log(`The area of rectangle is: ${area}`);

// EXPECTED RESULT:
// The area of rectangle is: 18

// TASK 3: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE

// let sumOfTwoArrays = function () {
//     let array = [2,3,4];
//     let array2 = [5,6,7];
//     let sum = [];
//     for (let i = 0; i < array.length; i++) {
//        let sumArrays =  array[i] + array2[i];
//        sum.push(sumArrays);
//     }

//     return sum;
//  }
//  sumOfTwoArrays();
// TEST:
// console.log(sumArrays([1, 2, 3], [4, 5, 6]));
// OUTPUT:
// [ 5, 7, 9 ]

// TASK 4: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
// function findMaxEven() {
//     let numbers = [2,-4, 10, 5, 3, 9, 0, 1];
//     let max = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         let sum = numbers[i];
        
//         if ( sum % 2 === 0 && sum > max ) {
//             max = sum;
//         }

//     }

//     return max;
// }
// findMaxEven();

// TEST
// let numbers = [2, -4, 5, 3, 9, 0, 1];
// let max = findMaxEven(numbers);
// console.log(`The max of ${numbers} is ${max}`);

//TASK 5

// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:
// expected output
// Maria has the higest score: 6

// function getHighestScoreIndex() {
//     let students = ["Ivan", "Pesho", "Maria"];
//     let scores = [5, 4, 6];
//     let highestScore = 0;
//     let highestScoreIndex = 0;

//     for (let i = 0; i < scores.length; i++) {

//         if (scores[i] > highestScore) {
//             highestScore = scores[i];
//             highestScoreIndex = i;
//         }
//     }

//     const highestScoringStudent = students[highestScoreIndex];
//     console.log(highestScoringStudent + " has the highest score: " + highestScore);
// }
// getHighestScoreIndex();

// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.
// let SumEven2DimArrayElements = function () {
//     let arr = [
//         [1,2,3],
//         [4,5,6]
//     ];

//     let array1 = arr[0];
//     let array2 = arr[1];


//     let total = 0;

//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] % 2 === 0 ) {
//             total += array1[i];

//             console.log(array1[i])
//         }

//         if (array2[i] % 2 === 0 ) {
//             total += array2[i];
//             console.log(array2[i])
//         }
        
       
//      }
//      console.log(total);
     
//     return total;

// }


// SumEven2DimArrayElements();


// TEST:
// let arr = [
//     [1,2,3],
//     [4,5,6]
//   ];
  
//   let sum = SumEven2DimArrayElements(arr);
//   console.log(sum);
  
  // expected output: 12



// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
// let numbers = [2, -4, 5, 3, 9, 0, 1,8,10,60];
// let max = 0;
// let findMaxEven = function () {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0 && numbers[i] > max) {
//           max = numbers[i];
//       }
//     }
//     console.log(`The max of ${numbers} is ${max}`);
// }
// findMaxEven();

// TEST
// let numbers = [2, -4, 5, 3, 9, 0, 1];
// let max = findMaxEven(numbers);
// console.log(`The max of ${numbers} is ${max}`);

// define function , which takes 1 arrays and return the sum of araay elements

// let array1 = [1,2,3,4,5];
// let sum = 0;

// function sumofArray () {
//   for (let i = 0; i < array1.length; i++) {
//     sum += array1[i];
//     // console.log(sum);
//   }

//   return sum;
// }
// sumofArray();

// let array2 = [5,5,5];
// let sum2 = sumofArray(array2);
// let sumoftwoArrays = sum + sum2;
// console.log(sumoftwoArrays);























//Морски шах


// целта е да представим в JavaScript двумерна дъска за игра, (например - "Морски шах"), която в последствие ще можем лесно да променяме за да отразим текущото състояние на играта.

//   -----------
//  | 0 | 0 | 0 |
//  -------------
//  | 0 | 0 | 0 |
//  -------------
//  | 0 | x | 0 |
//   -----------
//      фиг.1

// Вариант 1: едномерен масив:
// можем да използваме едномерен масив, в който полетата от дъската са представени последователно.
// Тоест, дъската от фиг.1 би изглеждала така:
let board1d = [ 0, 0, 0, 0, 0, 0, 0, 'x', 0 ];
             // 1  2  3  4  5  6  7   8   9

// Вариант 2: двумерен масив:
// по-интутивен, тъй като следва реалната двумерна структура на дъската:
//
//     j: 0  1   2
//  i: ------------
//   0 | 0 | 0 | 0| -> row1 ( i = 0)
//   - -----------
//   1 | 0 | 0 | 0| -> row2 ( i = 1)
//   - -----------
//   2 | 1 | x | 0| -> row3 ( i = 2)
//     ------------
//
let board2d = [
  [ 0,  0 , 0 ],
  [ 0,  0 , 0 ],
  [ 0, 'x', 0 ]
];



// TASK:
// дефинирайте функция setX( i, j), с два параметъра:
//    i    : индекса на реда (започва от 0)
//    j    : индекса на колона (започва от 0),
// която ще запише 'x' в дадената клетка на board2d

// Например: setX(0, 2); трябва да промени дъската, така че да изглежда така:
// [
//  [ 0, 0, x],
//  [ 0, 0, 0],
//  [ 0, x, 0]
// ];

// ---> YOUR CODE HERE <---
function setX(i, j) {
  if (
    i >= 0 && i < board2d.length && j >= 0 && j < board2d[i].length
  ) {
    board2d[i][j] = 'x';
  }
}
// TEST
// извикване на функцията setX()
setX(0, 2);
console.log(board2d);

// За да видите текущото състояние на дъската за игра, след извикването на setX(0, 1) използвайте функцията:
showConsoleBoard( board2d );


// дефиниция на функцията showConsoleBoard()"
function showConsoleBoard( board ){ 
  let boardStr = "";
  for (let i = 0; i < board.length; i++) {
    boardStr += "|";    

    for (let j = 0; j < board[i].length; j++) {
      boardStr += board[i][j] + "|";
    }
    boardStr += "\n";
  }

  console.log(boardStr);
}