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
  const wordLength = word.length;
  let removedResult = '';
  let duplicateAlphabet = '';
  let changedHistory = false;

  for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
    if (word[wordIndex] === word[wordIndex + 1]) {
      changedHistory = true;
      duplicateAlphabet = word[wordIndex];
      wordIndex++;
      continue;
    }

    if (duplicateAlphabet[wordIndex] === duplicateAlphabet) {
      duplicateAlphabet = '';
      wordIndex++;
      continue;
    }

    removedResult += word[wordIndex];
  }

  return changedHistory ? removeDuplicates(removedResult) : removedResult;
}
module.exports = problem2;
