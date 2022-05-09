const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail')

const testTail = tail([]);
const testArray2 = [1, 3, 5, 7]

//testing
assertEqual(testTail.length, 0);
assertArraysEqual(testTail, []);
assertEqual(testTail[1], undefined);

assertArraysEqual(tail(testArray2), [3, 5, 7]);