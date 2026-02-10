const moneyChange = (value) => {
  let totalCoins = 0;
  let rest = value;

  while (rest > 0) {
    if (rest >= 10) {
      totalCoins++;
      rest -= 10;
    } else if (rest >= 5) {
      totalCoins++;
      rest -= 5;
    } else if (rest >= 1) {
      totalCoins++;
      rest -= 1;
    }
  }

  return totalCoins;
};

console.log("TESTE MONEY CHANGE \n");

const res1 = moneyChange(2);
console.log(`Expected 2 | Result ${res1} | Valid: ${res1 === 2}`);

const res2 = moneyChange(28);
console.log(`Expected 6 | Result ${res2} | Valid: ${res2 === 6}`);

const bigM = 10000;
const res3 = moneyChange(bigM);
console.log(`Expected ?? | Result ${res3} | Valid: ??`);
