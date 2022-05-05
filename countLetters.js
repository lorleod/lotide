const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  // initialize counter object
  let count = {};

  // loop through sentence
for (letter of sentence) {

  //if count doesn't have letter yet, initialize at 1
  if (count[letter]) {
    count[letter]++;
  } else {
    // else ++ letter
    count[letter] = 1;
  }
}
  return count;
}

let testResult = countLetters("Hello");

assertEqual(testResult["H"], 1);
assertEqual(testResult["e"], 1);
assertEqual(testResult["l"], 2);
assertEqual(testResult["h"], undefined);