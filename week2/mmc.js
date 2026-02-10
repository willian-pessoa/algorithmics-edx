import { mdc } from "./mdc.js";

const mmc = (a, b) => {
  // a * b = mmc(a,b) * mdc(a,b)

  return (a * b) / mdc(a, b);
};

console.log("MMC");
const res1 = mmc(6, 8);
console.log(`Test 1; Return: ${res1}; Expected: 24; ${res1 === 24}`);

const res2 = mmc(28851538, 1183019);
console.log(
  `Test 2; Return: ${res2}; Expected: 1933053046; ${res2 === 1933053046}`,
);
