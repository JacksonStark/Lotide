// ASSERT EQUAL...

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// HEAD FUNCTION
const head = (array) => {
  if (array.length > 1) {
    let headElement = array[0];
    return headElement;
  } else if (array.length === 0) {
    return undefined;
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 'Stark');