const myFizzBuzz = require('./test-4.js');

describe('the function myFizzBuzz', () => {
  it('given the value 15, it should return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('given the value 3, it should return fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
});
