// ASSERT EQUAL...
const assertEqual = require('./assertEqual').default;


// TAIL FUNCTION
const tail = (array) => {
  let tail;
  if (array.length > 1) {
    tail = array.slice(1);
  } else if (array.length === 0) {
    tail = [];
  } else if (array.length === 1) {
    tail = array;
  }
  return tail;
};


module.exports = tail;