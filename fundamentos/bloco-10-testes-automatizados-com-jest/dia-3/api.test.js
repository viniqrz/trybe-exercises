const api = require('./api.js');

describe('api', () => {
  test('get request resolves', () => {
    jest.spyOn(api, 'useFetch');

    api.useFetch.mockResolvedValue('success');

    expect(api.useFetch()).resolves.toBe('success');
  });

  test('get request rejects', () => {
    jest.spyOn(api, 'useFetch');

    api.useFetch.mockRejectedValue('failed');

    expect(api.useFetch()).rejects.toBe('failed');
  });
});
