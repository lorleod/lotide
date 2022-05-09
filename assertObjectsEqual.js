// asserts whether actual === expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function: takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

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
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
// assertObjectsEqual(cd, dc);