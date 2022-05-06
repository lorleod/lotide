// Function: takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function (arrayOne, arrayTwo) {
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
const assertArraysEqual = function (arrayOne, arrayTwo) {
  // input arrayOne and arrayTwo into eqArrays.
  // If true, then console log passed. if false, console log failed
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Arrays EQUAL: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Arrays NOT equal: ${arrayOne} !== ${arrayTwo}`);
  }
};

const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

test3 = [6, 2, 40, 4, 5, 6];
assertArraysEqual(
  takeUntil(test3, (x) => x % 2 !== 0),
  [6, 2, 40, 4]
);
