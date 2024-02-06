// // const developer1 = {
// //     "firstName" : "Ivan",
// //     "surName"   : "Ivanov",
// //     "skills"     : ["HTML", "CSS", "JavaScript"],
  
// //     "applyForJob": function(){
// //       const skillsStr = this.skills.toString();
// //       console.log(`Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`);
// //     }
// //   }

// // console.log(developer1.firstName);
// // console.log(developer1.surName);
// // console.log(developer1.skills[2]);

// // developer1.skills[3] = "React JS";

// // const prices = {
// //   'apples': 2.50,
// //   'oranges': 3.45,
// //   'bananas': 2.80
// // }

// // // името на пропъртито, което искаме да достъпим е дадено в променлива:
// // const fruitName = 'apples';
// // console.log(prices['apples']);
// // console.log(prices.apples);






// // let student1 = {
// //   // properties:
// //   "name":"Pesho",
// //   "address":{
// //     "town":"Sofia",
// //     "zip": 1508
// //   },
// //   "scores": [3,4,5],

// //   // methods
// //   "greet": function() {
// //     console.log(`Hello, I'm ${this.name}. My max sore is: ${this.findMaxScore()}`);
// //   },
// //   "findMaxScore": function () {
// //     let maxScore = 0;
// //     for (let i = 0; i < this.scores.length; i++) {
// //       const currentScore = this.scores[i];
// //       if(currentScore>=maxScore){
// //         maxScore=currentScore
// //       }
// //     }
// //     return maxScore;
// //   }
// // };

// // student1.greet()

// // конструктор за обекти от тип Patient:
// function Patient( age, firstName, lastName ){
//   this.age = age;
//   this.firstName = firstName;
//   this.lastName= lastName;

//   // TODO: discuss why this is memory greedy:
//   this.printAge = function(){
//       console.log( this.firstName + " е на " + this.age + " години.");
//   };     
// };

// // създаване и използване на обектите:
// var ivan = new Patient( 60, "Иван", "Иванов");
// var petyr = new Patient( 74, "Петър", "Петров");

// ivan.printAge();  
// petyr.printAge();

// // ЗАДАЧА: определяне на по-младия пациент:
// // функцията връща true, ако patient1 е по-млад (използваме '<=') от patient2.
// // в противен случй - връща false:
// function isYounger( patient1, patient2 ){
//   return isYounger;
// }
// isYounger(ivan,petyr);

// if ( isYounger(ivan, petyr) ){
// console.log(ivan.firstName + " е по-млад от " + petyr.firstName );
// }else{
// console.log(petyr.firstName + " е по-млад от " + ivan.firstName );
// };

// //////////////////////////////////
// // an array of objects, representing data for a person:
// let persons = [
//   {
//     "gender": "female",
//     "age": 32,
//     "firstName": "Ada",
//     "surName": "Byron"
//   },
//   {
//     "gender": "male",
//     "age": 42,
//     "firstName": "Asen",
//     "surName": "Asenov"
//   },  
//   { 
//     "gender": "male",
//     "age": 18,
//     "firstName": "Petar",
//     "surName": "Petrov"
//   },
//   {
//     "gender": "male",
//     "age": 33,
//     "firstName": "Ivan",
//     "surName": "Ivanov"
//   }
// ];

// const findYoungestPerson = function(arr) {
//   let minAge = arr[0].age;
//   let youngestPerson;

//   for (let i = 0; i < arr.length; i++) {
//     let person = arr[i];

//     if (person.age < minAge) {
//       minAge = person.age;
//       youngestPerson = person;
//     }
//   }

//   return youngestPerson;
// }

// let youngestPerson = findYoungestPerson(persons);
// console.log(`The younger person is ${youngestPerson.firstName} - ${youngestPerson.age} years.`);

/////////////////////////////////////////////////////////////////
// масив от обекти представящи данни за различни марки бири:
const beers = [
  {name: "Ариана", color: "светло", prices:[1.3, 2, 2.4], town: "София"},
  {name: "Ариана", color: "тъмно", prices:[1.4, 2.2, 2.8], town: "София"},
  {name: "Каменица", color: "светло", prices:[1.5, 2.5, 3], town: "Пловдив"},
  {name: "Загорка", color: "светло", prices:[2, 3, 3.6], town: "Стара Загора"},
];
console.log("The beers array: ", beers);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ПРИМЕР: изписване на имената и цвета на всички бири:
for (let i = 0, len = beers.length; i < len; i++) {
  const beer = beers[i];
  
  console.log(`${beer.name} - ${beer.color} - ${beer.prices}`);

  
}

// Calculate and print the sum of prices for each beer
for (let j = 0; j < beers.length; j++) {
  let sum = 0;
  const sumOfallBeersPrice = beers[j];
  
  for (let k = 0; k < sumOfallBeersPrice.prices.length; k++) {
    sum += sumOfallBeersPrice.prices[k];
  }
  
  console.log(`Sum of prices for ${sumOfallBeersPrice.name} - ${sumOfallBeersPrice.color}: ${sum}`);
}






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ЗАДАЧА: намиране на най-евтината бира по 3-та цена:
// да се изпише в конзолата името, цвета и цената на най-евтината бира, като използваме за сравнението 3-тата цена в масива prices:


// очакван изход:
// "Ариана, светло" - 2.4