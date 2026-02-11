const getChange = (money) => {
  // Denominações disponíveis
  const coins = [1, 3, 4];

  // Array para armazenar o número mínimo de moedas para cada valor de 0 a money.
  // Preenchemos com Infinity para facilitar a comparação inicial.
  const minCoins = new Array(money + 1).fill(Infinity);

  // Caso base: 0 moedas para o valor 0
  minCoins[0] = 0;

  // Constrói a tabela de baixo para cima (bottom-up)
  for (let m = 1; m <= money; m++) {
    for (let coin of coins) {
      if (m >= coin) {
        // Verifica se usar a moeda atual reduz o número de moedas
        let numCoins = minCoins[m - coin] + 1;
        if (numCoins < minCoins[m]) {
          minCoins[m] = numCoins;
        }
      }
    }
  }

  return minCoins[money];
};

// --- INICIANDO TESTES DO MONEY CHANGE (DYNAMIC PROGRAMMING) ---

// Teste 1: Exemplo simples (Input: 2)
const res1 = getChange(2);
console.log(
  `Teste 1 (Money 2): Expected: 2 | Result: ${res1} | Valid: ${res1 === 2}`,
);

// Teste 2: Exemplo onde Greedy falharia (Input: 6)
const res2 = getChange(6);
console.log(
  `Teste 2 (Money 6): Expected: 2 | Result: ${res2} | Valid: ${res2 === 2}`,
);

// Teste 3: Exemplo do enunciado (Input: 34)
const res3 = getChange(34);
console.log(
  `Teste 3 (Money 34): Expected: 9 | Result: ${res3} | Valid: ${res3 === 9}`,
);

// Teste 4: Limite superior da constraint (Input: 1000)
const res4 = getChange(1000);
console.log(
  `Teste 4 (Money 1000): Expected: 250 | Result: ${res4} | Valid: ${res4 === 250}`,
);
