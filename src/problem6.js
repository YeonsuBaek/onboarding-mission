function problem6(forms) {
  const isError = checkErrors(forms);
  return isError ? -1 : getResult(forms);
}

function checkErrors(crews) {
  const isValidCount = checkValidCount(crews);
  const isValidDomain = checkValidDomain(crews);
  const isKoreanName = checkKoreanName(crews);
  const isValidLength = checkValidLength(crews);

  return !(isValidCount && isValidDomain && isKoreanName && isValidLength);
}

function checkValidCount(crews) {
  const NUMBER = { MIN: 1, MAX: 10000 }
  const crewsCount = crews.length;

  return crewsCount >= NUMBER.MIN && crewsCount <= NUMBER.MAX;
}

function checkValidDomain(crews) {
  const crewsCount = crews.length;

  for (let i = 0; i < crewsCount; i++) {
    const EMAIL_DOMAIN = "email.com";
    const email = crews[i][0];

    if (!email.includes(EMAIL_DOMAIN)) {
      return false;
    }
  }

  return true;
}

function checkKoreanName(crews) {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const crewsCount = crews.length;

  for (let i = 0; i < crewsCount; i++) {
    const name = crews[i][1];

    if (!korean.test(name) {
      return false;
    }
  }

  return true;
}

function checkValidLength(crews) {
  const NAME = { MIN: 1, MAX: 19 }
  const crewsCount = crews.length;

  for (let i = 0; i < crewsCount; i++) {
    const name = crews[i][1];
    const nameLength = name.length;

    if (nameLength < NAME.MIN || nameLength > NAME.MAX) {
      return false;
    }
  }

  return true;
}

function getResult(crews) {
  const cutNames = cutNamesIntoTwoLetters(crews);
  const emailListOfDuplicatedCrews = getEmailOfDuplicatedCrews(
    forms,
    cutNames
  );
  const result = arrangeInAscendingOrder(emailListOfDuplicatedCrews);

  return result;
}

function cutNamesIntoTwoLetters(crews) {
  const crewsCount = crews.length;
  const duplicatedNameIndexList = new Array(theNumberOfCrews).fill(0);

  for (
    let standardNameIndex = 0;
    standardNameIndex < crewsCount;
    standardNameIndex++
  ) {
    const standardName = crews[standardNameIndex][1];
    const standardNameLength = standardName.length;

    for (
      let standardCutIndex = 0;
      standardCutIndex < standardNameLength - 1;
      standardCutIndex++
    ) {
      const standardCutName = standardName.substr(standardCutIndex, 2);

      for (
        let comparedNameIndex = standardNameIndex + 1;
        comparedNameIndex < theNumberOfCrews;
        comparedNameIndex++
      ) {
        const comparedName = crews[comparedNameIndex][1];
        const comparedNameLength = comparedName.length;

        for (
          let comparedCutIndex = 0;
          comparedCutIndex < comparedNameLength - 1;
          comparedCutIndex++
        ) {
          const comparedCutName = comparedName.substr(comparedCutIndex, 2);

          if (standardCutName === comparedCutName) {
            duplicatedNameIndexList[standardNameIndex] += 1;
            duplicatedNameIndexList[comparedNameIndex] += 1;
          }
        }
      }
    }
  }

  return duplicatedNameIndexList;
}

function getEmailOfDuplicatedCrews(crews, duplicatedCrewsList) {
  const crewsCount = crews.length;
  let emailList = [];

  for (let i = 0; i < crewsCount; i++) {
    const email = crews[i][0];

    if (duplicatedCrewsList[i] > 0 && email.trim() !== "") {
      emailList.push(email)
    }
  }

  return emailList;
}

function arrangeInAscendingOrder(list) {
  const emailCount = list.length;

  let comparedIndex, standardIndex, standard;
  for (standardIndex = 1; standardIndex < emailCount; standardIndex++) {
    standard = list[standardIndex];

    for (
      comparedIndex = standardIndex - 1;
      comparedIndex >= 0 && list[comparedIndex] > standard;
      comparedIndex--
    ) {
      list[comparedIndex + 1] = list[comparedIndex];
    }

    list[comparedIndex + 1] = standard;
  }

  return removeDuplicatedEmail(list);
}

function removeDuplicatedEmail(list) {
  const emailCount = list.length;
  const deduplicatedList = [];

  for (let i = 0; i < emailCount; i++) {
    if (list[i] !== list[i - 1]) {
      deduplicatedList.push(list[i]);
    }
  }

  return deduplicatedList.filter((email) => email && email.trim() !== "");
}

module.exports = problem6;
