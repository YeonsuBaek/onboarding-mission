function problem3(number) {
  return checkError(number) ? -1 : countClapAll(number);
}

function checkError(number) {
  const NUMBER = { MIN: 1, MAX: 10000 };
  return !Number.isInteger(number) || !(number >= NUMBER.MIN && number <= NUMBER.MAX);
}

function countClapAll(number) {
  const FIRST_NUMBER = 1;
  let countAll = 0;

  for (
    let currentNumber = FIRST_NUMBER;
    currentNumber <= number;
    currentNumber++
  ) {
    countAll += countClapNumber(currentNumber);
  }

  return countAll;
}

function countClapNumber(number) {
  let countClap = 0;
  
  for (let current = 1; current <= number; current++) {
    const currentString = current.toString();
    if (["3", "6", "9"].includes(currentString)) {
      countClap += 1;
    }
  }

  return countClap;
}

module.exports = problem3;
