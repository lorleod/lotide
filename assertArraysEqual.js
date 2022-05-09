const eqArrays = require('./eqArrays');

// Take in two arrays and console.log and asserts passed if equal or failed if not equal
const assertArraysEqual = function(arrayOne, arrayTwo) {
  // input arrayOne and arrayTwo into eqArrays.
  // If true, then console log passed. if false, console log failed
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Arrays EQUAL: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Arrays NOT equal: ${arrayOne} !== ${arrayTwo}`);
  }
};

module.exports = assertArraysEqual;