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
    console.log(`The arrays match!`);
  } else {
    console.log(`The arrays don't match`);
  }
};

// WITHOUT FUNCTION

const without = (source, itemsToRemove) => {
  let perfect = source;
  for (let i = 0; i < source.length; i++) {
    for (let n = 0; n < itemsToRemove.length; n++) {
      if (itemsToRemove[n] === source[i]) {
        perfect.splice(i,1);
      }
    }
  }
  return perfect;
};

// TEST CODE...
assertArraysEqual(without(['jackson','stark', 1], [1]), ['jackson','stark']);