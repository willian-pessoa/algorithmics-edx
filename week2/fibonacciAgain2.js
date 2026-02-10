/**
 * Calcula o comprimento do Período de Pisano para um divisor m.
 * O período sempre começa com 0, 1 e sua extensão máxima é 6 * m.
 */
function getPisanoPeriod(m) {
  let prev = 0n;
  let curr = 1n;
  let res = 0n;

  // O limite de 6*m é uma propriedade matemática conhecida
  for (let i = 0; i < m * 6; i++) {
    let temp = (prev + curr) % BigInt(m);
    prev = curr;
    curr = temp;

    // Se voltamos ao início da sequência (0, 1), encontramos o período
    if (prev === 0n && curr === 1n) {
      res = BigInt(i + 1);
      break;
    }
  }
  return res;
}

/**
 * Calcula Fibonacci de n modulo m para n extremamente grandes.
 */
function fibonacciHuge(n, m) {
  const bigN = BigInt(n);
  const bigM = BigInt(m);

  // 1. Encontrar o período de Pisano
  const period = getPisanoPeriod(Number(m));

  // 2. Reduzir n usando o resto da divisão pelo período
  const reducedN = bigN % period;

  if (reducedN <= 1n) return reducedN;

  // 3. Calcular o Fibonacci do n reduzido
  let prev = 0n;
  let curr = 1n;

  for (let i = 0n; i < reducedN - 1n; i++) {
    let temp = (prev + curr) % bigM;
    prev = curr;
    curr = temp;
  }

  return curr;
}

// --- TESTES ---

console.log("Iniciando testes (IA ALGORITMO)...");

// Teste 1: Exemplo do enunciado
const res1 = fibonacciHuge(239, 1000);
console.log(
  `Teste 1 | n=239, m=1000 | Resultado: ${res1} | Esperado: 161 | Sucesso: ${res1 == 161}`,
);

// Teste 2: Número grande
const res2 = fibonacciHuge("2816213588", 239);
console.log(
  `Teste 2 | n=2816213588, m=239 | Resultado: ${res2} | Esperado: 151 | Sucesso: ${res2 == 151}`,
);

// Teste 3: Limites Máximos (n = 10^18, m = 10^5)
console.log("\nExecutando Teste 3 (Limites Máximos: n=10^18, m=10^5)...");
console.time("Tempo de Execução Teste 3");

const nMax = 1000000000000000000n; // 10^18
const mMax = 10000000; // 10^7
const res3 = fibonacciHuge(nMax, mMax);

console.timeEnd("Tempo de Execução Teste 3");
console.log(`Teste 3 | Resultado: ${res3}`);
