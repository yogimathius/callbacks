const mexicanFood = ['tacos', 'enchiladas', 'pozole', 'chilaquiles'];

/**
 * CALLBACK
 * A function that is passed as the argument of another function
 */


/**
 * JS iterative methods usually have three arguments passed to our callback:
 * 1) item iterating over
 * 2) index of item
 * 3) entire array
 * THESE WILL ALWAYS BE IN THAT ORDER
 * */
const logFood = (item, _, array) => {
  console.log(`I want to eat ${item}`);
  console.log('this is the array: ', array);
};

// Non function variables cannot be used as callbacks for any iterative array methods
// const notAFunction = "hello";

// mexicanFood.forEach(logFood);

/**
 * HIGHER ORDER FUNCTION
 * A function that receives a function as an argument
 */


/**
 * Let's create our own higher order function, using a for each function
*/

const animalsArray = [
  'frog',
  'lion',
  'bear',
  'gecko',
  'raccoon',
  'another frog'
];

const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const animal = array[i];
    callback(animal, i, array, "hello there");
  }
};

// Example with anonymous function callback
animalsArray.forEach(
  function(animal, _, array, hello) {
    console.log(`The current animal is ${animal}`);
    console.log("this is the array: ", array, hello);
  }
);


// Example with arrow function stored as value
const eatMexican = (animal) => {
  console.log(`today I want to eat: ${animal}`);
};

// Example of arrow function used as callback
myForEach(mexicanFood, eatMexican);

