const getRepos = require('./exercicio4.js');

describe('function GetRepos', () => {
  test('given https://api.github.com/orgs/tryber/repos, must return sd-01-week4-5-project-todo-list in an array', async () => {
    await expect(
      getRepos('https://api.github.com/orgs/tryber/repos')
    ).resolves.toContain('sd-01-week4-5-project-todo-list');
  });

  test('given https://api.github.com/orgs/tryber/repos, must return sd-01-week4-5-project-meme-generator in an array', async () => {
    await expect(
      getRepos('https://api.github.com/orgs/tryber/repos')
    ).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});
