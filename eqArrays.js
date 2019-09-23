// ASSERT EQUAL...
const assertEqual = require('./assertEqual');


// EQUAL ARRAYS FUNCTION
const eqArrays = (array1, array2) => {
  // Initial check to see if lengths match...
  if (array1.length !== array2.length) {
    return false;
  } else {
    // Checking if each index is a match...
    for (let i = 0; i < array1.length; i++) {
      // Checking and recursing if arrays are within the arrays.
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (eqArrays(array1[i], array2[i]) === false) {
          return false;
        }
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};


module.exports = eqArrays;