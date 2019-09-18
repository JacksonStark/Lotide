// ASSERT EQUAL...

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FIND-KEY-BY-VALUE FUNCTION

const findKeyByValue = (genres, show) => {

  for (const key in genres) {
    if (genres[key] === show) {
      return key;
    }
  }
};


// TEST CODE
const bestTVShowsBygenres = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsBygenres, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsBygenres, "That '70s Show"), undefined);