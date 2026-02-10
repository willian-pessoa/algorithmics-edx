import { lastDigitOfFibonacciSum } from "./lastDigitFibonacciSum.js";

function lastDigitOfPartialSum(m, n) {
  // Soma(m, n) = S_n - S_{m-1}
  // S_k = F_{k+2} - 1

  // Calculamos F_{n+2} e F_{m+1} (que é (m-1)+2)
  const fnPlus2 = lastDigitOfFibonacciSum(n);
  const fmPlus1 = lastDigitOfFibonacciSum(BigInt(m) - 1n);

  // Subtraímos os dois e tratamos o resultado negativo
  return (fnPlus2 - fmPlus1 + 10) % 10;
}

// --- PADRÃO DE TESTES ---

console.log("Iniciando testes (SOMA PARCIAL)...");

// Teste 1: Exemplo do enunciado (3 a 7)
const res1 = lastDigitOfPartialSum(3, 7);
console.log(
  `Teste 1 | m=3, n=7 | Resultado: ${res1} | Esperado: 1 | Sucesso: ${res1 == 1}`,
);

// Teste 2: Apenas um número (10 a 10)
const res2 = lastDigitOfPartialSum(10, 10);
console.log(
  `Teste 2 | m=10, n=10 | Resultado: ${res2} | Esperado: 5 | Sucesso: ${res2 == 5}`,
);

// Teste 3: Limites Máximos (n = 10^18)
console.log("\nExecutando Teste 3 (Limites Máximos: n=10^18)...");
console.time("Tempo de Execução Teste 3");

const mMax = 10n ** 10n; // 10^10
const nMax = 10n ** 18n; // 10^18
const res3 = lastDigitOfPartialSum(mMax, nMax);

console.timeEnd("Tempo de Execução Teste 3");
console.log(`Teste 3 | Resultado: ${res3}`);
