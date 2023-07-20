/* eslint-disable func-style */
// 1) Regular Function
// console.log('called before declaration: ', getSquareArea(4));
function getSquareArea(side) {
  return side * side;
}

// 2) Anonymous Function

const myAnonymousFunction = function(side) {
  return side * side;
};

const arrayWithAnonymous = [1, "hello world!", false, myAnonymousFunction];

// console.log(arrayWithAnonymous[3](4));


// 3) Arrow Function
// console.log('called before declaration: ', arrowFunction(4));

const arrowFunction = (side) => {
  return side * side;
};

const arrayWithArrow = [1, "hello world!", false, arrowFunction];

// console.log(arrayWithArrow[3](3));