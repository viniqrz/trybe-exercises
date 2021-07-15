const fetch = require('node-fetch');

const useFetch = () => {
  return fetch('https://dog.ceo/api/breeds/list/all').then((res) => {
    if (!res.ok) throw new Error('fails');

    return res.json();
  });
};

module.exports = { useFetch };
