
const { assert } = require('chai');
const middle = require('../middle')

describe("#middle", () => {
  it("middle([1, 2] = []", () => {
    assert.deepEqual(middle([1, 2]), [])}
    );
  it("middle([1, 2, 3]) = [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
  it("middle([1, 2, 3, 4, 5]) = [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
  it("middle([1, 2, 3, 4]) = [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
  it("middle([1, 2, 3, 4, 5, 6]) = [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
}

);