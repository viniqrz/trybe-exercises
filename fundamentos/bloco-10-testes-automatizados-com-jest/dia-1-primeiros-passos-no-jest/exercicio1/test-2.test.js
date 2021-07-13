const myRemove = require('./test-2.js');

describe('the function myRemove', () => {
  it('given the array [1, 2, 3, 4], it should return [1,2,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('given the array [1, 2, 3, 4], it should return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('given the array [1, 2, 3, 4], it should return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
