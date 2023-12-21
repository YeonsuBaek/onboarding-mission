function problem5(money) {
  const isError= checkError(money);
  return isError ? -1 : countByBillUnit(money);
}

function checkError(money) {
  return (isNumber(money) || isValidRange(money);
}

function isNumber(money) {
  return !Number.isInteger(currentMoney);
}

function isValidRange(money) {
    const MONEY = { MIN: 1, MAX: 1000000 };
  return currentMoney < MONEY.MIN || currentMoney > MONEY.MAX;
}

function countByBillUnit(money) {
  const BILL_UNIT_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const MINIMUM_BILL_NUMBER = 1;
  let billCountList = new Array(BILL_UNIT_LIST.length).fill(0);

  BILL_UNIT_LIST.forEach((bill, index) => {
    const billCount = Math.floor(money / bill);

    if (billCount >= MINIMUM_BILL_NUMBER) {
      billCountList[index] += billCount;
      money -= billCount * bill;
    }
  });

  return billCountList;
}

module.exports = problem5;
