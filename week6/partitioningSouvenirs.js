const partitioningSouvenirs = (n, souvenirs) => {
  const totalSum = souvenirs.reduce((acc, curr) => acc + curr, 0);

  if (totalSum % 3 !== 0 || n < 3) return 0;

  const target = totalSum / 3;

  // Ordenar do maior para o menor ajuda a busca
  souvenirs.sort((a, b) => b - a);

  // dp[s1][s2] indica se é possível o amigo 1 ter soma s1 e o amigo 2 ter s2
  let dp = Array.from({ length: target + 1 }, () =>
    new Array(target + 1).fill(false),
  );
  dp[0][0] = true;

  souvenirs.forEach((value) => {
    for (let s1 = target; s1 >= 0; s1--) {
      for (let s2 = target; s2 >= 0; s2--) {
        if (dp[s1][s2]) {
          // Tenta dar para o amigo 1
          if (s1 + value <= target) dp[s1 + value][s2] = true;
          // Tenta dar para o amigo 2
          if (s2 + value <= target) dp[s1][s2 + value] = true;
          // Se der para o amigo 3, s1 e s2 não mudam,
          // então dp[s1][s2] continua true
        }
      }
    }
  });

  return dp[target][target] ? 1 : 0;
};

// --- INICIANDO TESTES DO PARTITIONING SOUVENIRS ---

// Teste 1: Exemplo Sample 1 (4 itens '3' somam 12, target 4 - impossível)
const res1 = partitioningSouvenirs(4, [3, 3, 3, 3]);
console.log(
  `Teste 1 (3,3,3,3): Expected: 0 | Result: ${res1} | Valid: ${res1 === 0}`,
);

// Teste 2: Exemplo Sample 3 (Soma 102, cada um deve ter 34)
const res2 = partitioningSouvenirs(
  13,
  [1, 2, 3, 4, 5, 5, 7, 7, 8, 10, 12, 19, 25],
);
console.log(
  `Teste 2 (Sample 3): Expected: 1 | Result: ${res2} | Valid: ${res2 === 1}`,
);

// Teste 3: Apenas um item (Sample 2)
const res3 = partitioningSouvenirs(1, [30]);
console.log(
  `Teste 3 (30): Expected: 0 | Result: ${res3} | Valid: ${res3 === 0}`,
);

// Teste 4: Divisível por 3 mas impossível de repartir (Ex: 1, 1, 4)
const res4 = partitioningSouvenirs(3, [1, 1, 4]);
console.log(
  `Teste 4 (1,1,4): Expected: 0 | Result: ${res4} | Valid: ${res4 === 0}`,
);
