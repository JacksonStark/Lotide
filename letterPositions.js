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
    console.log(`The arrays match! ${actual} === ${expected}`);
  } else {
    console.log(`The arrays don't match ${actual} !== ${expected}`);
  }
};


// LETTER-POSITIONS FUNCTION

const letterPositions = (phrase) => {
  let results = {};
  let letterList = phrase.toLowerCase().split('');

  for (const [index, letter] of letterList.entries()) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  }
  console.log(results);
  return results;
};


// TEST CODE
assertArraysEqual(letterPositions('lighthouse in the house').h,[3,5,15,18]);