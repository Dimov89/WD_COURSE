// //TASK 1:  Задача: помислете и си запишете на мястото на "?" какво ще се изпише в конзолата, а след това стартирайте скрипта и сравнете вашите отговори:
// // var a = 1, b = 1;
// // console.log( a++ + ++a);  // ?4
// // console.log( ++b + b++);  // ?4
// // console.log( a + b);      // ?6

// //Task 2: 
// function greetings() {
//     // DO NOT CHANGE
//     // взимаме въведената от потребителя стойност за град:
//     var userTown = document.getElementById("town").value;
//     //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//     // Task 1: Изпишете в конзолата съдържанието на променливата userTown
//   console.log(userTown);
    
//     //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//     // Task 2:
//     // ако потребителят е избрал 'София', то да се изпише в конзолата:
//     // "Здравей!"
//     // ако потребителят е избрал 'Париж', то да се изпише в конзолата:
//     // "Salut!"
//     // ако потребителят е избрал 'Лондон', то да се изпише в конзолата:
//     // "Hi!"
//     // --> YOUR CODE STARTS HERE <--
//     if (userTown === "София") {
//         console.log("Здравей!");
//     } else if (userTown === "Париж") {
//       console.log("Salut!");
//     }

//     else {
//       console.log("Hi");
//     }
    
    
//     // --> YOUR CODE ENDS HERE <--
  
//     // DO NOT CHANGE
//     // внимавайте, да не изтриете затварящата '}' фигурна скоба по-долу :)
//   }

//   //TASK 3
//   function checkUserAge() {
//     // взимаме въведените от потребителя данни:
//     var inputsValues = getInputsValues();
//     var userBirthYear = inputsValues.uBirth.year;
//     var userName = inputsValues.uname;


//     console.log(userBirthYear);
//     console.log(typeof userBirthYear);
//     console.log(userName);
  
//     // ЗАДАЧА - реализирайте следната функционалност, която ще се изпълни след кликване на бутона "Go":
//     //  ако потребителят е пълнолетен  то на екрана да се изпише:
//     //      "Добре дошли, <userName>!"
//     //  ако потребителят е непълнолетен, но не и малолетен, то на екрана да се изпише:
//     //      "<UserName>, ще имате достъп само до определена функционалност от този сайт"
//     //  ако потребителят е малолетен  то:
//     //    "Съжaлявам <userName>, отбий се тук след X години!");
//     //
//     //  където <userName> e името въведено от потребителя, а X = 18-userAge;
  
//     // пример за изписване на екрана на произволен низ, чрез функцията writeToOutput():
//     // writeToOutput("Натиснахте бутона GO, но не сте направили задачата!");
  
//     // >>>>>>>>>> НАЧАЛО НА ВАШИЯ КОД >>>>>>>>>>
//     let userAge = 2023 - userBirthYear;
//     let x = 18-userAge;

//     if (userAge >= 18) {
//       console.log(`Добре дошли, ${userName}`)
//     } else if (userAge >= 14 && userAge <= 18) {
//       console.log(`${userName}, ще имате достъп само до определена функционалност от този сайт`)
//     }
//     else {
//       console.log(`Съжaлявам ${userName},  отбий се тук след X години!`)
//     }

//   // <<<<<<<<<< КРАЙ НА ВАШИЯ КОД <<<<<<<<<<<<<
    
    
//     // <<<<<<<<<< КРАЙ НА ВАШИЯ КОД <<<<<<<<<<<<<
//   }
  
//   // ****************************************
//   // main:
//   writeToOutput("Попълнете формата и кликнете върху бутона!");
  
//   // ****************************************
//   // DO NOT CHANGE
//   // допълнителни DOM функции:
//   function getInputsValues() {
//     var form = document.getElementsByClassName("test")[0];
//     var inputs = form.getElementsByTagName("input");
//     var inputsValues = {};
  
//     for (var i = 0, len = inputs.length; i < len; i++) {
//       var inputNode = inputs[i];
//       var inputNodeValue = inputNode.value;
  
//       // check for date field:
//       if (inputNode.type === "date") {
//         var dateMatch = inputNodeValue.match(/^(\d{4})-(\d{2})-(\d{2})$/); //YYYY-MM-DD
//         if (dateMatch) {
//           inputNodeValue = {
//             year: dateMatch[1],
//             month: dateMatch[2],
//             day: dateMatch[3]
//           };
//         }
//       } else {
//         inputNodeValue = inputNode.value;
//       }
//       inputsValues[inputNode.id] = inputNodeValue;
//     }
  
//     // console.log("inputsValues=", inputsValues);
//     return inputsValues;
//   }
  
//   function writeToOutput(result) {
//     var outputNode = document.getElementById("output");
//     outputNode.innerHTML = result;
//   }

  //TASK 4
//   Интерпретация на показателите на ИТМ
// Напишете програма, която да изчислява Индекса на Телсната маса и според дадената таблица: Интерпретация на показателите на ИМТ да изписва в конзолата съответното състояние на пациента.

// Използвайте подходящи имена на променливи!
// let weightIndex = 65;
// let heightIndex = 1.67;
// let bmi = (weightIndex / ((heightIndex * heightIndex) )).toFixed(2);

// if (bmi <=18.5) {
//   console.log(`${bmi}, You are really skinny, dude!`);
// } else if(bmi == 18.5 && bmi <=24.99 ) { 
//   console.log(`${bmi}, Nice and healthy`);
// } else {
//   console.log(`${bmi}, Too fat brother! You are gonna die soon!!!`)
// }

// //TASK 5
// // Да се напише програма, която изписва в конзолата сумата на четните числа, които се делят на 3, в интервала [1 - 20] включително
// let myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let sum = 0;
// for (let i = 0; i < myArr.length; i++) {
//   let array = myArr[i];

//   if (array % 2 === 0 && array % 3 ===0) {
//     sum += array;
//   }

// }
// console.log('Sum of Elements devided by 2 and 3:' + sum); 


//RANDOM TASK TRAINING - Given an array of numbers, find the sum of all the numbers in the array.
// let array = [10,15,17,62,44,13];
// let sum = 0;

// for (let j = 0; j < array.length; j++) {
//   let arraySum = array[j];
//   sum += arraySum;
// }

// console.log(sum);

//RANDOM TASK TRAINING - Create an array of your favorite colors and print each color on a new line.
// let favColorsArr = ['green','yellow','black','red','white'];
// for (let i = 0; i < favColorsArr.length; i++) {
//   let difColorsPrint  = favColorsArr[i];
//   console.log(difColorsPrint);
// }

//RANDOM TASK TRAINING - Write a program that finds the largest number in an array.
// let array = [10,15,17,62,44,13];
// let largestNumberArr = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > largestNumberArr) {
//     largestNumberArr = array[i];
//   }
  
// }
// console.log(largestNumberArr);

//RANDOM TASK TRAINING - Given an array of names, check if a specific name is present in the array.
// let firstName = ['Ilko','Vesko','Stoil','Ivaka','Ceko'];
// let specialName = 'Ilko';
// if (typeof firstName[0] === 'string' && firstName[0] === specialName) {
//     console.log("My name is:" + specialName);
// }

// else {
//   console.log('You are not in the List, brother');
// }

//RANDOM TASK TRAINING - Create an array of numbers and multiply each number by 2, storing the results in a new array.
// let array = [10,15,17,62,44,13];
// for (let i = 0; i < array.length; i++) {
//   let elementsOfArray = array[i]*2;
//   console.log(elementsOfArray);
// }

//RANDOM TASK TRAINING - LOOPS - Write a program to print the numbers from 1 to 10.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

//RANDOM TASK TRAINING - LOOPS - Given an array of names, use a for loop to print each name on a new line.
// let firstName = ['Ilko','Vesko','Stoil','Ivaka','Ceko'];
// for (let i = 0; i < firstName.length; i++) {
//   let elementNames = firstName[i];
//   console.log(elementNames);
// }

//RANDOM TASK TRAINING - LOOPS - Print the multiplication table of a given number using a for loop.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//   let multiplicationNumber = array[i]*7;
//   console.log(multiplicationNumber);
// }

//RANDOM TASK TRAINING - LOOPS Write a program to calculate the sum of all odd numbers from 1 to 20.
// let array = [10,15,17,62,44,13];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   let numbers = array[i];
//   sum += numbers;
// }
// console.log(sum);

//RANDOM TASK TRAINING - LOOPS Iterate through an array of numbers and print only the even numbers.
// let array = [10,15,17,62,44,22,16,13];
// for (let i = 0; i < array.length; i++) {
//   let numbers = array[i];

//   if (numbers % 2 === 0) {
//     console.log(numbers);
//   }
// }

//RANDOM TASK TRAINING - If-Else Statements: Write a program that checks if a given number is positive, negative, or zero.
// let number = 0;
// if (number >= 0) {
//   console.log("The given number is positive" + " " + number);
// }
//  else if (number <= 0) {
//   console.log("The given number is negative" + " " + number)
// }
// else {
//   console.log("The given number is zero")
// }

//RANDOM TASK TRAINING - If-Else Statements:Check if a person is eligible to vote based on their age (e.g., if age is 18 or above).
// let person = 'Ilko';
// let age = 17;
// if (age >= 18 ) {
//   console.log(`This person is eligible to vote ${person}`);
// } else {
//   console.log(`This person is not eligible to vote ${person}`);
// }
 
//RANDOM TASK TRAINING - If-Else Statements: Create a program that checks if a year is a leap year.
// let years = 1904;
// if ((years % 4 === 0 && years % 100 !==0 ) ||  years % 400 === 0){
//   console.log(years + 'is a lap year');
// }
// else {
//   console.log(years + 'is not a lap year')
// }

//RANDOM TASK TRAINING - If-Else Statements: Check if a number is divisible by both 2 and 3 using if-else statements.
// let array = [5,8,14,16,21,28,40,90,60,30];
// let devidedNumbers = [];
// for (let i = 0; i < array.length; i++) {
//   let numbers = array[i];
//   devidedNumber = numbers;
//   if (numbers % 2 ===0 && numbers % 3 ===0 ) {
//     console.log(`numbers devideb by 2 and 3 are: ${devidedNumber}`);
//   }
// }


