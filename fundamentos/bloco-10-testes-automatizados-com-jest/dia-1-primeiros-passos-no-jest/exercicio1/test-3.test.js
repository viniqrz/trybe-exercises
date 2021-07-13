const myRemoveWithoutCopy = require('./test-3.js');

describe('the function myRemoveWithoutCopy', () => {
  it('given the arguments ([1, 2, 3, 4], 3), it should return [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('given the arguments ([1, 2, 3, 4], 3), it should not return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});
