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
console.log('1. Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log('2. Test - should say "Hello, Jo!"', helloName('Jo'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(`3. Test - should say "3"`, addNumbers(1, 2));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
console.log('4. Test - should say "6"', multiplyThree(1, 2, 3));


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
console.log('5. isPositive - should say true', isPositive(3));
console.log('5. isPositive - should say false', isPositive(0));
console.log('5. isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
// array is empty, return `undefined`.

// YIKES: This is buggy code that needs to be replaced.
// function getLast(array) {
// if (array != undefined) {
//   return array.pop();
// }
//   else{
//   return 'undefined';
//   }
// }
// console.log('Test - should say 4', getLast([1,2,3,4]));

// NOTE: this is feedback from Emma:
// Function 6: You're asked to find and return the last item in the array. 
// You've used the .pop() method to return the last item. 
// This does work, but the issue with this is that .pop() alters the array and removes the last item. 
// There's another way to do this that doesn't manipulate the original array.

// replaced array.pop() with array.slice() to return the value.
function getLast(array) {
if (array != undefined) {
// slice(start, end)
// used -1 index to find the last value in the array
  return array.slice(-1);
}
  else{
  return 'undefined';
  }
}
console.log('6. Test - should say 4', getLast([1,2,3,4]));
console.log('6. Test - should say 7', getLast([1,3,5,6,7]));
console.log('6. Test - should say 12', getLast([1,4,7,5,6,12]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
let i = 0
while (i < array.length) {
  if (value == array[i]) {
    return true
  }
  i++
}
return false
}

console.log('7. Test - should say true', find(1, [1,2,3,4]));
console.log('7. Test - should say true', find(2, [1,2,3,4]));
console.log('7. Test - should say true', find(3, [1,2,3,4]));
console.log('7. Test - should say true', find(4, [1,2,3,4]));
console.log('7. Test - should say false', find(5, [1,2,3,4]));
// NOTE: Emma's feedback:
// Function 7: In your for loop, you check to see if value == i. 
// However, remember that i is the index. 
// How can we check to see if the value is equal to each item in the array?



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

// Changed to use the .charAt method.
function isFirstLetter(letter, string) {
  if (string.charAt(0) == letter) {
    return true
  } else {
    return false
  }
}
console.log('8. isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('8. isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// NOTE: Emma's feedback:
// Function 8: You need to get the first letter of the 
// value of string and compare it to letter.

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}

console.log("9. This is the sum of the array", sumAll([1,2,3,4]));
console.log("9. This is the sum of the array", sumAll([1,2,3,5]));

// NOTE: Emma's feedback:
// Function 9: You need to receive the array from the parameters and then loop through it. 
// Right now you are trying to loop using sumAll.length instead of the array from the parameters. 
// Also make sure to use the array and not sumAll, 
// because sumAll is the name of the function and you can not use it to do a sum of it.
// sum += sumAll[i]; needs to change to sum += array[i];


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(array) {
  let positiveNumbers = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNumbers.push(array[i]);
    }
  }
  return positiveNumbers
}
console.log('10. allPositive, should print 1 and 2:', allPositive([-1,0,1,2]));


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

function addition(number1, number2) {
  return (number1 + number2);
}
console.log('11. Edabit, should read 8:', addition(3, 5));
console.log('11. Edabit, should read 9:', addition(4, 5));

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