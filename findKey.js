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

// Takes in an object and a callback. Returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined
const findKey = function (object, callback) {
  let result = "";
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

testObject = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

console.log(findKey(testObject, (x) => x["stars"] === 2));
assertArraysEqual(
  findKey(testObject, (x) => x["stars"] === 2),
  "noma"
);

module.exports = findKey;