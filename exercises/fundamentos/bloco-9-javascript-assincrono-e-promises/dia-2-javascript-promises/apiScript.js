// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.getElementById('joke-container');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => (jokeContainer.textContent = data.joke));
};

const promise = new Promise((resolve, reject) => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.ceil(Math.random() * 50) ** 2);
  }

  if (arr.reduce((a, b) => a + b) < 8000) {
    resolve('Promise resolvida');
  } else {
    reject('Promise rejeitada');
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

window.onload = () => fetchJoke();
