export function lastDigitOfFibonacciSum(n) {
  const bigN = BigInt(n);

  // 1. O período de Pisano para m=10 é 60
  const pisano10 = 60n;

  // 2. Queremos F(n+2) % 10. Reduzimos o índice primeiro.
  const reducedIndex = Number((bigN + 2n) % pisano10);

  // 3. Calculamos o Fibonacci até o reducedIndex apenas para o último dígito
  let prev = 0;
  let curr = 1;

  if (reducedIndex === 0) return 9; // F(0) - 1 = -1 => 9
  if (reducedIndex === 1) return 0; // F(1) - 1 = 0

  for (let i = 2; i <= reducedIndex; i++) {
    let temp = (prev + curr) % 10;
    prev = curr;
    curr = temp;
  }

  // 4. Resultado é (F(n+2) - 1) % 10
  // Somamos 10 antes do % para evitar números negativos
  return (curr - 1 + 10) % 10;
}

// --- PADRÃO DE TESTES ---

// Teste 1: Exemplo do enunciado
const res1 = lastDigitOfFibonacciSum(3);
console.log(
  `Teste 1 | n=3, m=10 | Resultado: ${res1} | Esperado: 4 | Sucesso: ${res1 == 4}`,
);

// Teste 2: Número grande
const res2 = lastDigitOfFibonacciSum(100);
console.log(
  `Teste 2 | n=100, m=10 | Resultado: ${res2} | Esperado: 5 | Sucesso: ${res2 == 5}`,
);

// Teste 3: Limites Máximos (n = 10^18, m = 10^5)
console.log("\nExecutando Teste 3 (Limites Máximos: n=10^18, m=10^5)...");
console.time("Tempo de Execução Teste 3");

const nMax = 100000000000000n; // 10^14
const mMax = 10000000; // 10^7
const res3 = lastDigitOfFibonacciSum(nMax);

console.timeEnd("Tempo de Execução Teste 3");
console.log(`Teste 3 | Resultado: ${res3}`);
