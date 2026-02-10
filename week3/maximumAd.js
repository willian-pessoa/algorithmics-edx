/* 
    n => numero de ads
    ads = [a1,a2,a3...] => valor dos ads
    clickSlots = [c1,c2,c3...] => click por slot
*/
const maximumAd = (n, ads, clickSlots) => {
  if (ads.length !== n || clickSlots.length !== n) return -1;

  const sortedAds = ads.sort((a, b) => b - a);
  const sortedClicks = clickSlots.sort((a, b) => b - a);

  let totalValue = 0;

  for (index in sortedAds) {
    totalValue += sortedAds[index] * sortedClicks[index];
  }

  return totalValue;
};

console.log("TESTE MAXIMUM LOOT \n");

const res1 = maximumAd(1, [23], [39]);
console.log(`Expected 897 | Result ${res1}`);

const res2 = maximumAd(3, [1, 3, -5], [-2, 4, 1]);
console.log(`Expected 23 | Result ${res2}`);
