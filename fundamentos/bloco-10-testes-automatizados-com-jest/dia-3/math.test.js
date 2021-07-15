const math = require('./math.js');

describe('math functions', () => {
  test('somar', () => {
    jest.spyOn(math, 'somar');
    math.somar.mockImplementation((a, b) => a + b);

    expect(math.somar(1, 2)).toBe(3);
  });

  test('subtrair', () => {
    jest.spyOn(math, 'subtrair');
    math.subtrair.mockReturnValue(20);

    expect(math.subtrair(2, 4)).toBe(20);
    expect(math.subtrair).toHaveBeenCalledTimes(1);

    math.subtrair.mockRestore();

    expect(math.subtrair(4, 2)).toBe(2);
  });

  test('dividir', () => {
    jest.spyOn(math, 'dividir');

    math.dividir.mockReturnValue(15);

    math.dividir(2, 5);

    expect(math.dividir(2, 5)).toBe(15);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledWith(2, 5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
  });

  test('multiplicar', () => {
    jest.spyOn(math, 'multiplicar');
    math.multiplicar.mockReturnValue(10);

    expect(math.multiplicar()).toBe(10);
  });
});
