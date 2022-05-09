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

module.exports = middle;