const sum = require('./test-1.js');

describe('the function sum()', () => {
  it('sum(4,5) must return 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
