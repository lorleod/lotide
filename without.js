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

const without = function (source, itemsToRemove) {
  cleanArray = [];
  for (element of source) {
    let skip = false;
    for (item of itemsToRemove) {
      if (element === item) {
        skip = true;
      }
    }
    if (skip === false) {
      cleanArray.push(element);
    }
  }
  return cleanArray;
};

//testing
assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
