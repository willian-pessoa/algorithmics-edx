export const mdc = (a, b) => {
  let bigger;
  let smaller;

  if (a - b > 0) {
    bigger = a;
    smaller = b;
  } else {
    bigger = b;
    smaller = a;
  }

  let rest = smaller;

  while (rest > 0) {
    rest = bigger % smaller;

    if (rest === 0) {
      return smaller;
    }

    bigger = smaller;
    smaller = rest;
  }
};

console.log("MDC");
const res1 = mdc(18, 35);
console.log(`Test 1; Return: ${res1}; Expected: 1; ${res1 === 1}`);

const res2 = mdc(28851538, 1183019);
console.log(`Test 2; Return: ${res2}; Expected: 17657; ${res2 === 17657}`);
