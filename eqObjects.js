// ASSERT EQUAL...

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



// TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true


const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false