const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  let objArr = [];

  students.forEach((student, i) => {
    let gradeSum = 0;

    grades[i].forEach((el) => {
      gradeSum += el;
    });

    objArr.push({
      name: student,
      average: gradeSum / grades[i].length,
    });
  });

  return objArr;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
