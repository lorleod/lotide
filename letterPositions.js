const letterPositions = function(sentence) {
  const results = {};
  // loop through sentence
  for (const index in sentence)
  console.log(index);
  // take each index and add it to results at location element
  // if a letter is already in results, add to count
  return results;
}

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



// testing
assertArraysEqual(, "hello")