// EQUAL ARRAYS...
const eqArrays = require('./eqArrays');

// ASSERT ARRAYS EQUAL...
const assertArraysEqual = require('./assertArraysEqual');


// MIDDLE FUNCTION
const middle = (array) => {
  let middleValue = [];
  if (array.length === 1 || array.length === 2) {
    return middleValue;

  } else if (array.length % 2 === 0) {
    middleValue.push(array[(array.length / 2) - 1]);
    middleValue.push(array[array.length / 2]);
    return middleValue;

  } else if (array.length % 2 !== 0) {
    middleValue.push(array[Math.floor(array.length / 2)]);
    return middleValue;
  }
};


module.exports = middle;