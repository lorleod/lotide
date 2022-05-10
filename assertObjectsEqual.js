const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {


  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (key in object1) {
    console.log(`Array.isArray(${key}): `, Array.isArray(object1[key]));
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

  for (key in actual) {
    if (Array.isArray(actual[key])) {
      if (!eqArrays(actual[key], expected[key])) {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
    } else if (actual[key] !== expected[key]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  }

  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};


module.exports = assertObjectsEqual;