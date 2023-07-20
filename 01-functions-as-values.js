/* eslint-disable func-style */
// How can we write function

// const
// let

// for
/**
 * 1) "function" keyword
 * 2) name of the function
 * 3) inside parenthesis() we can pass ARGUMENTS
 * 4) inside curly brackets{} we can decide WHAT THE FUNCTION DOES
 */

function addTwoNumbers(num1, num2) {
  // console.log('inside function execution: ', num1 + num2);
  return num1 + num2;
}

function addTwoNumbersInConsole(num1, num2) {
  console.log(num1 + num2);
  // return num1 + num2;
  // returns undefined by default
  // return undefined;
}

const result1 = addTwoNumbers(5, 4);
const result2 = addTwoNumbers(3, 6);

// console.log(addTwoNumbers(result1, result2));

// const name2 = function() {};

/**
 *What does it mean to have functions that are treated as values??
 */

function getTriangleArea(base, height) {
  return (base * height) / 2;
}

// console.log(getTriangleArea);


/**
 * Where can I store a function as a value?
 */

function sayHello() {
  return "hello";
}

const array = [1, "hello world!", false, sayHello];
// sayHello()
// console.log(array[3]);

const object = {
  myFunction: sayHello
};

console.log(object.myFunction());