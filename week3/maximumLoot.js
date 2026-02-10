const maximumLoot = (arrInfo, arrItems) => {
  const [n, w] = arrInfo;

  if (arrInfo.length !== 2 || arrItems.length !== n) {
    return -1;
  }

  const sortedItems = arrItems.sort(([priceA, amountA], [priceB, amountB]) => {
    const valueA = priceA / amountA;
    const valueB = priceB / amountB;
    return valueB - valueA;
  });

  let availableWeight = w;
  let totalValue = 0;

  for (item of sortedItems) {
    const itemValue = item[0];
    const itemWeight = item[1];
    if (availableWeight > itemWeight) {
      totalValue += itemValue;
      availableWeight -= itemWeight;
    } else {
      totalValue += availableWeight * (itemValue / itemWeight);
      availableWeight = 0;
    }

    if (availableWeight === 0) {
      return totalValue;
    }
  }

  return totalValue;
};

console.log("TESTE MAXIMUM LOOT \n");

const res1 = maximumLoot(
  [3, 50],
  [
    [60, 20],
    [100, 50],
    [120, 30],
  ],
).toFixed(4);
console.log(`Expected 180.0000 | Result ${res1}`);

const res2 = maximumLoot([1, 10], [[500, 30]]).toFixed(4);
console.log(`Expected 166.6667 | Result ${res2}`);
