const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice([1]);
};

const testTail = tail([]);

//testing
assertEqual(testTail.length, 0);
assertEqual(testTail, []);
assertEqual(testTail[1], 3);
console.log(testTail);