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

// WITHOUT FUNCTION

const without = (source, itemsToRemove) => {
  let perfect = source;
  for (let i = 0; i < source.length; i++) {
    for (let n = 0; n < itemsToRemove.length; n++) {
      if (itemsToRemove[n] === source[i]) {
        perfect.splice(i,1);
        i = i - 1;
      }
    }
  }
  return perfect;
};

// TEST CODE...
assertArraysEqual((without(['4','4'], ['4'])), []);