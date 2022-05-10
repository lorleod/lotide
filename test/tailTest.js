const tail = require('../tail');
const { assert } = require('chai');

const testTail = tail([]);
const testArray2 = [1, 3, 5, 7]

describe ("#tail", () => {
  it("[] tail.length = 0", () => {assert.strictEqual(testTail.length, 0)});
  it("tail([]) = []", () => {assert.deepEqual(testTail, [])});
  it("tail(testArray2) = [3, 5, 7]", () => {assert.deepEqual(tail(testArray2), [3, 5, 7])});
}
);