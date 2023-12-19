function problem4(word) {
  const alphabets = { A: "A".charCodeAt(0), Z: "Z".charCodeAt(0), a: "a".charCodeAt(0), z: "z".charCodeAt(0)}
  const alphabetArrays = sortAlphabet();
  const result = reverseWord(word, arrayedAlphabetLists, alphabets);

  return result;
}

function sortAlphabet() {
  const TOTAL_ALPHABET = 26;
  const alphabetList = Array.from({ length: TOTAL_ALPHABET }, (v, i) => String.fromCharCode(i + 65));
  const reverseAlphabetList = alphabetList.reverse();

  return { list: alphabetList, reverseList: reversedAlphabetList };
}

function reverseWord(word, { list, reverseList }) {
  const wordLength = word.length;
  let changedWord = new Array(wordLength);

  if (wordLength < 1 || wordLength > 1000) {
    return -1;
  }

  for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
    const isAlphabet = checkAlphabet(word[wordIndex]);
    const changedChar = changeFromLowerToUpper(word[wordIndex]);

    if (!isAlphabet) {
      changedWord[wordIndex] = changedChar[wordIndex];
      continue;
    }

    currentIndex = list.indexOf(word);
    changedWord[wordIndex] = reverseList[currentIndex];

    if (changedChar !== changedChar[wordIndex]) {
      word[wordIndex] = changeFromUpperToLower(word[wordIndex]);
    }
  }

  return changedWord.join("");
}

function checkAlphabet(word) {
  return (word >= "A" && word <= "Z) || (word >= "a" && word <= "Z")
}

function changeFromLowerToUpper(alphabet) {
  const LOWER_MINUS_UPPER = "a".charCodeAt(0) - "A".charCodeAt(0);
  const alphabetNumber = alphabet.charCodeAt(0);

  return String.fromCharCode(alphabetNumber + LOWER_MINUS_UPPER);
}

function changeFromUpperToLower(alphabet) {
  const LOWER_MINUS_UPPER = "a".charCodeAt(0) - "A".charCodeAt(0);
  const alphabetNumber = alphabet.charCodeAt(0);

  return String.fromCharCode(alphabetNumber - LOWER_MINUS_UPPER);
}

module.exports = problem4;
