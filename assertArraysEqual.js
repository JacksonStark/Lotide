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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`The arrays match!`);
  } else {
    console.log(`The arrays don't match`);
  }
};


// TEST CODE
assertArraysEqual([3,4,5],[3,4,5]);
assertArraysEqual([3,2,5],[3,2,5]);
assertArraysEqual([3,3,3],[3,3,1]);
