console.log('***** Function Practice *****');

// wifi = Welcome28

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log('Test - should say "Hello, Jo!"', helloName('Jo'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(`Test - should say "3"`, addNumbers(1, 2));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
console.log('Test - should say "6"', multiplyThree(1, 2, 3));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
    else {
    return false;
    }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
// array is empty, return `undefined`.
function getLast(array) {
if (array != undefined) {
  return array.pop();
}
  else{
  return 'undefined';
  }
}
console.log('Test - should say 4', getLast([1,2,3,4]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
let i = 0
while (i < array.length) {
  i++
  console.log('Test a - Argument value is 1, "i" should equal "1"', i);
  if (value == i) {
    return true
  } else {
    return false;
  }
}
}
console.log('Test b - should say true', find(1, [1,2,3,4]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log("This is a the first letter in the string:");
  if (isFirstLetter.unshift == (letter)) {
    return true
  } else {
    return false
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < sumAll.length; index++) {
    sum += sumAll[i];
  }
  // TODO: return the sum
  return console.log(sum);
}

console.log("This is the sum of the array", sumAll([1,2,3,4]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
// function allPositive() {
//   if (i > 0) {
//     return console.log([i]);
//   } else (i <= 0)
//     return console.log('no positive numbers');
// }
// console.log(allPositive());


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Create a function that takes two numbers as arguments and returns their sum.
// Examples
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}