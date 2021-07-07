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

window.onload = () => fetchJoke();
