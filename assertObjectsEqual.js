// ASSERT EQUAL...

const eqArrays = (array1, array2) => {

  // Initial check to see if lengths match...
  if (array1.length !== array2.length) {
    return false;
  } else {
    // Checking if each index is a match...
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }  
    }
  }
  return true;
};

const eqObjects = (objA, objB) => {

  // Extracting both objects' keys...
  let objAKeys = Object.keys(objA);
  let objBKeys = Object.keys(objB);


  // Initial check to see if keys lengths match...
  if (objAKeys.length !== objBKeys.length) {
    return false;
  } else {

    // Iteration over keys...
    for (const key of objAKeys) {

      // Checking if they any keys are arrays...
      if (Array.isArray(objA[key]) && Array.isArray(objB[key])) {

        // If they are both arrays...eqArrays is used to check for a falsy value...
        if (eqArrays(objA[key], objB[key]) === false) {
          return false;
        }
        
        // Checking if each key's value is a match...
      } else if (objA[key] !== objB[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// TEST CODE
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
