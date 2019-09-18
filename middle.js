// ARRAYS ARE EQUAL FUNCTION...

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// TEST CODE
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]) ,[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);

