const letterPositions = function(sentence) {
  const results = {};
  // loop through sentence
  for (let i = 0; i < sentence.length; i++) {
    console.log("index: ",i);
    // take each index and add it to results at location element
    // if a letter is already in results, add to count
    const sentenceLetter = sentence[i];
    console.log("sentenceLetter: ", sentenceLetter);
    if (sentence[i] === " ") {
      // do nothing
    } else if (!results[sentenceLetter]) {
      results[sentenceLetter] = [i];
    } else {
      results[sentenceLetter].push(i)
    }
  }
  return results;
}


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

let blah = letterPositions("hello this is your captain speaking");
console.log("blah: ", blah);

module.exports = letterPositions;