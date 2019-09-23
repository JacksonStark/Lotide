// ASSERT EQUAL...
const assertEqual = require('./assertEqual').default;


// HEAD FUNCTION
const head = (array) => {
  if (array.length >= 1) {
    let headElement = array[0];
    return headElement;
  } else if (array.length === 0) {
    return undefined;
  }
};


module.exports = head;