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

const middle = function(array) {
  // find length of array

  if (array.length >= 0 && array.length < 3) {
    // if array.length is 0, 1 or 2 elements long: return empty array
    return [];
  } else if (array.length % 2 !== 0) {
    // if array.length % 2 !== 0: find array.length/2 and return element
    return [array[Math.floor(array.length / 2)]];
  }
  // if array.length % 2 === 0: find and return Math.floor(array.length/2) and that + index 1
  return [array[array.length / 2 - 1], array[array.length / 2]];
};

// Test code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);