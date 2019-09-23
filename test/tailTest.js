// ASSERT EQUAL...
const assertEqual = require('../assertEqual');

// TAIL...
const tail = require('../tail');


// TEST CODE
const words1 = ["Yo Yo", "Lighthouse", "Labs"];
tail(words1);
assertEqual(words1.length, 2);

const words2 = ["Jackson", "Robert", "Gillies", "Stark"];
tail(words2);
assertEqual(words2.length, 3);

const words3 = ["Kawhi", "Leornard"];
tail(words3);
assertEqual(words3.length, 1);