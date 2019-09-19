// ARE THE ARRAYS EQUAL...

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




// WORDS ARRAY FOR INPUT...
const words = ['jackson', 'austin', 'chloe', 'tessa', 'carmen', 'curtis', 'pam', 'rod'];


// CALLBACK FUNCTION...
const results1 = (word) => word[0];


// HIGHER ORDER FUNCTION...
const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


// GET FIRST LETTER OF EACH WORD IN ARRAY...THEN ASSERT THE ARRAY IS EQUAL...
assertArraysEqual(map(words, results1), [ 'j', 'a', 'c', 't', 'c', 'c', 'p', 'r' ]);