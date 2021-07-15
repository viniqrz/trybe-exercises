const stringify = require('./stringify.js');
jest.mock('./stringify.js');

describe('stringify functions', () => {
  test('mock toUpper', () => {
    stringify.toUpper.mockImplementation((str) => str.toLowerCase());

    expect(stringify.toUpper('ABC')).toBe('abc');

    stringify.toUpper.mockRestore();
    stringify.toUpper.mockImplementation((str) => str.toUpperCase());

    expect(stringify.toUpper('abc')).toBe('ABC');
  });

  test('mock firstLetter', () => {
    stringify.firstLetter.mockImplementation((str) => str[str.length - 1]);

    expect(stringify.firstLetter('CHICO')).toBe('O');
  });

  test('mock concat', () => {
    stringify.concat.mockImplementation((a, b, c) => a + b + c);

    expect(stringify.concat('vini', 'qrz', 'srs')).toBe('viniqrzsrs');
  });
});
