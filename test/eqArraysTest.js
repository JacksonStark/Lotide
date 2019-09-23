// ASSERT EQUAL...
const assertEqual = require('../assertEqual');

// EQUAL ARRAYS...
const eqArrays = require('../eqArrays');


// TEST CODE
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);