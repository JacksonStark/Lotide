// ASSERT EQUAL...
const assertEqual = require('./assertEqual');


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

// TEST CODE
console.log(countLetters('Jackson Robert Gillies Stark'));