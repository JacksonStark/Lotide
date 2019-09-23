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

module.exports = tail;