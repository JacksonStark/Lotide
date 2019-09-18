// ASSERT EQUAL...

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TAIL FUNCTION
const tail = (array) => {
  let tail;
  if (array.length > 1) {
    tail = array.splice(0,1);
  } else if (array.length === 0) {
    tail = [];
  } else if (array.length === 1) {
    tail = array;
  }
  return tail;
};


// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 2);