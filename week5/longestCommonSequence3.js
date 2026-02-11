const longestCommonSequence3 = (n, nSequence, m, mSequence, l, pSequence) => {
  // Cria um cubo (array 3D) preenchido com 0
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Array(l + 1).fill(0)),
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      for (let k = 1; k <= l; k++) {
        // Se o elemento bater nas TRÊS sequências
        if (
          nSequence[i - 1] === mSequence[j - 1] &&
          nSequence[i - 1] === pSequence[k - 1]
        ) {
          dp[i][j][k] = dp[i - 1][j - 1][k - 1] + 1;
        } else {
          // Caso contrário, pegamos o máximo das combinações anteriores
          dp[i][j][k] = Math.max(
            dp[i - 1][j][k], // Recua nSequence
            dp[i][j - 1][k], // Recua mSequence
            dp[i][j][k - 1], // Recua pSequence
          );
        }
      }
    }
  }

  return dp[n][m][l];
};

// --- INICIANDO TESTES DO LCS 3 SEQUENCES (DYNAMIC PROGRAMMING) ---

// Teste 1: Exemplo do enunciado (Sample 1)
const res1_3d = longestCommonSequence3(
  3,
  [1, 2, 3],
  3,
  [2, 1, 3],
  3,
  [1, 3, 5],
);
console.log(
  `Teste 1 : Expected: 2 | Result: ${res1_3d} | Valid: ${res1_3d === 2}`,
);

// Teste 2: Exemplo complexo (Sample 2)
const res2_3d = longestCommonSequence3(
  5,
  [8, 3, 2, 1, 7],
  7,
  [8, 2, 1, 3, 8, 10, 7],
  6,
  [6, 8, 3, 1, 4, 7],
);
console.log(
  `Teste 2 : Expected: 3 | Result: ${res2_3d} | Valid: ${res2_3d === 3}`,
);

// Teste 3: Sem elementos comuns em todas
const res3_3d = longestCommonSequence3(2, [1, 2], 2, [3, 4], 2, [5, 6]);
console.log(
  `Teste 3 : Expected: 0 | Result: ${res3_3d} | Valid: ${res3_3d === 0}`,
);
