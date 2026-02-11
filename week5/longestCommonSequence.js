const longestCommonSequence = (n, nSequence, m, mSequence) => {
  // Cria a matriz preenchida com 0
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (nSequence[i - 1] === mSequence[j - 1]) {
        // Se os elementos são iguais, somamos 1 ao resultado anterior da diagonal
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Se são diferentes, pegamos o maior valor vindo de cima ou da esquerda
        // (Isso ignora o elemento atual de uma das sequências)
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
};

// --- INICIANDO TESTES DO LONGEST COMMON SUBSEQUENCE (DYNAMIC PROGRAMMING) ---

// Teste 1: Exemplo do enunciado (Input: [2, 7, 5] e [2, 5])
const res1 = longestCommonSequence(3, [2, 7, 5], 2, [2, 5]);
console.log(
  `Teste 1 (2 7 5 vs 2 5): Expected: 2 | Result: ${res1} | Valid: ${res1 === 2}`,
);

// Teste 2: Sem elementos comuns (Input: [7] e [1, 2, 3, 4])
const res2 = longestCommonSequence(1, [7], 4, [1, 2, 3, 4]);
console.log(
  `Teste 2 (7 vs 1 2 3 4): Expected: 0 | Result: ${res2} | Valid: ${res2 === 0}`,
);

// Teste 3: Elementos fora de ordem (Input: [2, 7, 8, 3] e [5, 2, 8, 7])
const res3 = longestCommonSequence(4, [2, 7, 8, 3], 4, [5, 2, 8, 7]);
console.log(
  `Teste 3 (2 7 8 3 vs 5 2 8 7): Expected: 2 | Result: ${res3} | Valid: ${res3 === 2}`,
);

// Teste 4: Sequências idênticas
const res4 = longestCommonSequence(3, [1, 2, 3], 3, [1, 2, 3]);
console.log(
  `Teste 4 (1 2 3 vs 1 2 3): Expected: 3 | Result: ${res4} | Valid: ${res4 === 3}`,
);
