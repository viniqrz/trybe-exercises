const random = require('./random.js');

describe('random functions', () => {
  test('mock return value', () => {
    jest.spyOn(random, 'randomToHundred');

    random.randomToHundred.mockReturnValue(10);

    expect(random.randomToHundred()).toBe(10);
  });

  test('mock implementation', () => {
    jest.spyOn(random, 'randomToHundred');

    random.randomToHundred.mockImplementation((a, b) => a / b);

    expect(random.randomToHundred(6, 2)).toBe(3);

    random.randomToHundred.mockRestore();
  });

  test('mock implementation to multiply', () => {
    jest.spyOn(random, 'randomToHundred');

    random.randomToHundred.mockImplementation((a, b, c) => a * b * c);

    expect(random.randomToHundred(3, 3, 3)).toBe(27);

    random.randomToHundred.mockReset();
    random.randomToHundred.mockImplementation((a) => a * 2);

    expect(random.randomToHundred(3)).toBe(6);
  });
});
