// ASSERT EQUAL FUNCTION...

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// COUNT-LETTERS FUNCTION

const countLetters = (phrase) => {
  let letterList = phrase.split(' ').join('').toLowerCase().split('');
  let result = {};

  for (const item of letterList) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};

console.log(countLetters('Jackson Robert Gillies Stark'));