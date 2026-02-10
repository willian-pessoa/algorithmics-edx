/**
 * Given a sequence of elements 𝑎1, 𝑎2, . . . , 𝑎𝑛, you would like to check whether
it contains an element that appears more than 𝑛/2 times
Output 1 if the sequence contains an element that appears strictly more than 𝑛/2 times,
and 0 otherwise.
 */

const countInRange = (elements, target, lo, hi) => {
  let count = 0;
  for (let i = lo; i <= hi; i++) {
    if (elements[i] === target) {
      count++;
    }
  }
  return count;
};

const getMajorityRecursive = (elements, lo, hi) => {
  // Caso base: o único elemento é o majoritário de si mesmo
  if (lo === hi) {
    return elements[lo];
  }

  // Dividir
  const mid = Math.floor((hi - lo) / 2) + lo;
  const leftMajority = getMajorityRecursive(elements, lo, mid);
  const rightMajority = getMajorityRecursive(elements, mid + 1, hi);

  // Se os dois lados concordam, retornamos o vencedor
  if (leftMajority === rightMajority) {
    return leftMajority;
  }

  // Se divergem, contamos a frequência de cada um no intervalo atual
  const leftCount = countInRange(elements, leftMajority, lo, hi);
  const rightCount = countInRange(elements, rightMajority, lo, hi);

  return leftCount > rightCount ? leftMajority : rightMajority;
};

const majorityElement = (elements) => {
  if (elements.length === 0) return 0;

  const candidate = getMajorityRecursive(elements, 0, elements.length - 1);

  // Verificação final para garantir que é estritamente > n/2
  const finalCount = countInRange(elements, candidate, 0, elements.length - 1);

  return finalCount > elements.length / 2 ? 1 : 0;
};

console.log("TESTE \n");

const res1 = majorityElement([2, 2, 2, 3, 9]);
console.log(`Expected: 1 | Result: ${res1} | Valid: ${res1 === 1}`);

const res3 = majorityElement([2, 3, 9, 2, 2, 2]);
console.log(`Expected: 1 | Result: ${res3} | Valid: ${res3 === 1}`);

const res4 = majorityElement([2, 3, 9, 2, 2, 10]);
console.log(`Expected: 0 | Result: ${res4} | Valid: ${res4 === 0}`);

const res5 = majorityElement([1, 1, 9, 2, 2, 10]);
console.log(`Expected: 0 | Result: ${res5} | Valid: ${res5 === 0}`);

const res6 = majorityElement([1, 2, 2, 2, 2, 10]);
console.log(`Expected: 1 | Result: ${res6} | Valid: ${res6 === 1}`);

const res2 = majorityElement([1, 2, 3, 4]);
console.log(`Expected: 0 | Result: ${res2} | Valid: ${res2 === 0}`);
