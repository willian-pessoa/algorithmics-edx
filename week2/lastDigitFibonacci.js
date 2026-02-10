const lastDigitFibonacci = (n) => {
  const arrLastDigit = [0, 1];

  for (let i = 2; i <= n; i++) {
    const fn = (arrLastDigit[i - 2] % 10) + (arrLastDigit[i - 1] % 10);
    arrLastDigit.push(fn);
  }

  return arrLastDigit[n];
};

console.log(`Input 3; Return: ${lastDigitFibonacci(3)}; Expected: 2`);
console.log(`Input 331; Return: ${lastDigitFibonacci(331)}; Expected: 9`);
console.log(`Input 327305; Return: ${lastDigitFibonacci(327305)}; Expected: 5`);
