function problem2(cryptogram) {
  const isError = checkError(cryptogram);
  return isError ? -1 : removeDuplicates(cryptogram);
}

function checkError(word) {
  const LENGTH = { MIN: 1, MAX: 1000 };
  const ALPHABET = { MIN: "a", MAX: "z" };
  const wordLength = word.length;

  if (wordLength < LENGTH.MIN || wordLength > LENGTH.MAX) {
    return true;
  }

  return word.some((alphabet) =>
    alphabet >= ALPHABET.MIN && alphabet <= ALPHABET.MAX)
  }
}

function removeDuplicates(word) {
  const wordLength = word.length;
  let removedResult = "";
  let duplicateAlphabet = "";
  let changedHistory = false;

  for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
    if (word[wordIndex] === word[wordIndex + 1]) {
      changedHistory = true;
      duplicateAlphabet = word[wordIndex];
      wordIndex++;
      continue;
    }

    if (duplicateAlphabet[wordIndex] === duplicateAlphabet) {
      duplicateAlphabet = "";
      wordIndex++;
      continue;
    }

    removedResult += word[wordIndex];
  }

  return changedHistory ? removeDuplicates(removedResult) : removedResult;
}
module.exports = problem2;
