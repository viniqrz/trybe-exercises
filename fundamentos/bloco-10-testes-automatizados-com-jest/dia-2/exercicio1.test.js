const uppercase = require('./exercicio1.js');

describe('uppercase callback', () => {
  test('verify callback functionality', (done) => {
    uppercase('abc', (param) => {
      expect(param).toBe('ABC');
      done();
    });
  });
});
