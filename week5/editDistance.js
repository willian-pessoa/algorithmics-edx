const editDistance = (str1, str2) => {
  const n = str1.length;
  const m = str2.length;

  // Cria a matriz preenchida com zeros
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  // Inicializa as bordas (casos base)
  // [[0,1,2],
  //  [1,0,0],
  //  [2,0,0]]
  for (let i = 0; i <= n; i++) dp[i][0] = i;
  for (let j = 0; j <= m; j++) dp[0][j] = j;

  // Preenche a matriz
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // Se forem iguais, o custo da diagonal é apenas o valor anterior
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Se forem diferentes, pegamos o mínimo entre as 3 direções e somamos 1
        dp[i][j] =
          Math.min(
            dp[i - 1][j - 1], // Substituição (Diagonal)
            dp[i - 1][j], // Deleção (Vertical)
            dp[i][j - 1], // Inserção (Horizontal)
          ) + 1;
      }
    }
  }

  return dp[n][m];
};

// --- INICIANDO TESTES DO EDIT DISTANCE (DYNAMIC PROGRAMMING) ---

// Teste 1: Exemplo simples - Strings idênticas (Input: "ab", "ab")
const res1 = editDistance("ab", "ab");
console.log(
  `Teste 1 (ab vs ab): Expected: 0 | Result: ${res1} | Valid: ${res1 === 0}`,
);

// Teste 2: Exemplo do enunciado (Input: "short", "ports")
const res2 = editDistance("short", "ports");
console.log(
  `Teste 2 (short vs ports): Expected: 3 | Result: ${res2} | Valid: ${res2 === 3}`,
);

// Teste 3: Exemplo do enunciado (Input: "editing", "distance")
const res3 = editDistance("editing", "distance");
console.log(
  `Teste 3 (editing vs distance): Expected: 5 | Result: ${res3} | Valid: ${res3 === 5}`,
);

// Teste 4: Caso com strings de um caractere (Input: "a", "b")
const res4 = editDistance("a", "b");
console.log(
  `Teste 4 (a vs b): Expected: 1 | Result: ${res4} | Valid: ${res4 === 1}`,
);

// Teste 5: Uma string vazia (Simulando deleção total)
const res5 = editDistance("abc", "");
console.log(
  `Teste 5 (abc vs ""): Expected: 3 | Result: ${res5} | Valid: ${res5 === 3}`,
);
