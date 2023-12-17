function problem2(cryptogram) {
  const isError = checkError(cryptogram);
  return isError ? -1 : removeDuplicates(cryptogram);
}

function checkError(word) {
  return !isValidLength(word.length) || !isValidAlphabet;
}

function isValidLength(length) {
  const LENGTH = { MIN: 1, MAX: 1000 };
  return length >= LENGTH.MIN || length <= LENGTH.MAX;
}

function isValidAlphabet(word) {
  const regex = /^[a-z]+$/;
  return regex.test(word);
}

function removeDuplicates(word) {
  let removedResult = '';
  let lastChar = '';

  for (let char of word) {
    if (char !== lastChar) {
      removedResult += char;
      lastChar = char;
    }
  }

  return removedResult;
}

module.exports = problem2;
