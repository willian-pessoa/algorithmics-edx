/**
 * Calcula o comprimento do Período de Pisano e retorna a sequência
 */
function getPisanoPeriod(m) {
  const mBig = BigInt(m);
  const arrPisanoPeriod = [0n, 1n];

  // O limite de 6*m é uma propriedade matemática conhecida
  for (let i = 2; i <= m * 6; i++) {
    let temp = (arrPisanoPeriod[i - 2] + arrPisanoPeriod[i - 1]) % mBig;

    // Se voltamos ao início da sequência (0, 1)
    if (arrPisanoPeriod[i - 1] === 0n && temp === 1n) {
      // Removemos o último 0 que foi verificado para o período ficar correto
      arrPisanoPeriod.pop();
      break;
    } else {
      arrPisanoPeriod.push(temp);
    }
  }

  return arrPisanoPeriod;
}

/**
 * Calcula Fibonacci de n modulo m para n extremamente grandes.
 */
function fibonacciHuge(n, m) {
  const bigN = BigInt(n);

  const periodArray = getPisanoPeriod(Number(m));
  const periodLength = BigInt(periodArray.length);

  // O resto da divisão (n % tamanho_do_periodo)
  const reducedN = bigN % periodLength;

  // Acessando o array convertendo o BigInt para Number
  return Number(periodArray[Number(reducedN)]);
}

// --- TESTES ---

console.log("Iniciando testes (MEU ALGORITMO)...");

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
