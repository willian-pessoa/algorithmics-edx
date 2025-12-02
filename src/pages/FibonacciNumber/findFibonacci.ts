export const findFibonacci = (n: number) => {
  const arrPrevious: number[] = [0, 1];

  for (let i = 2; i <= n; i++) {
    const nextNumber = arrPrevious[i - 1] + arrPrevious[i - 2];

    arrPrevious.push(nextNumber);
  }

  return arrPrevious[n];
};
