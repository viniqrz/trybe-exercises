const { users, getUserName, findUserById } = require('./exercicios2-3.js');

describe('function getUserName', () => {
  test('user must be found', () => {
    // expect.assertions(1);
    return expect(getUserName('4')).resolves.toEqual('Mark');
  });

  test('user must not be found', () => {
    return expect(getUserName('7')).rejects.toEqual({
      error: 'User with ' + '7' + ' not found.',
    });
  });

  test('user must be found', async () => {
    await expect(getUserName('4')).resolves.toEqual('Mark');
  });

  test('user must not be found', async () => {
    await expect(getUserName('7')).rejects.toEqual({
      error: 'User with ' + '7' + ' not found.',
    });
  });
});
