function problem1(pobi, crong) {
  if (isError(pobi) || isError(crong)) {
    return -1;
  }
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  return getResult({ pobi: pobiScore, crong: crongScore });
}

function getScore(person) {
  const [left, right] = person;
  const leftValues = calculatePageNumber(left);
  const leftScore = compareNumber(leftValues);
  const rightValues = calculatePageNumber(right);
  const rightScore = compareNumber(rightValues);

  return compareNumber({ first: leftScore, second: rightScore });
}

function calculatePageNumber(page) {
  const hundredNumber = Math.floor(page / 100);
  const tenNumber = Math.floor((page / 10) % 10);
  const oneNumber = Math.floor((page % 100) % 10);

  if (hundredNumber === 0) {
    if (tenNumber === 0) {
      return { first: oneNumber, second: oneNumber };
    }
    return { first: tenNumber + oneNumber, second: tenNumber * oneNumber };
  }

  return {
    first: hundredNumber + tenNumber + oneNumber,
    second: hundredNumber * tenNumber * oneNumber,
  };
}

function compareNumber({ first, second }) {
  return first >= second ? first : second;
}

function isError(person) {
  const pageError = isPageError(person);
  const numberOfPagesError = isNumberOfPagesError(person);
  const leftPageError = isLeftPageError(person);
  const pageOrderedError = isPageOrderedError(person);

  return pageError || numberOfPagesError || leftPageError || pageOrderedError;
}

function isPageError(person) {
  const [left, right] = person;
  const FIRST_PAGE = 1;
  const LAST_PAGE = 400;

  return left <= FIRST_PAGE || right >= LAST_PAGE;
}

function isNumberOfPagesError(person) {
  const NUMBER_OF_PAGES = 2;
  return person.length !== NUMBER_OF_PAGES;
}

function isLeftPageError(person) {
  const left = person[0];
  return left % 2 == 0;
}

function isPageOrderedError(person) {
  const [left, right] = person;
  return right !== left + 1;
}

function getResult({ pobi, crong }) {
  const POBI_WiN = 1;
  const CRONG_WIN = 2;
  const TWO_THE_SAME = 0;

  if (pobi > crong) {
    return POBI_WiN;
  }
  if (pobi === crong) {
    return TWO_THE_SAME;
  }
  if (pobi < crong) {
    return CRONG_WIN;
  }
}

module.exports = problem1;
