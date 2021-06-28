const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  let letterACount = 0;

  names.forEach((name) => {
    if (name.toLowerCase().includes('a')) {
      let innerCount = 0;
      for (const letter of name.toLowerCase()) {
        if (letter === 'a') {
          innerCount += 1;
        }
      }

      letterACount += innerCount;
    }
  });

  return letterACount;
}

assert.deepStrictEqual(containsA(), 20);
