const maximumGold = ([weight, nBars], arrBars) => {
  if (nBars !== arrBars.length) return 0;

  // dp[i] será 1 (true) se for possível alcançar o peso i
  let dp = new Array(weight + 1).fill(0);
  dp[0] = 1;

  arrBars.forEach((barWeight) => {
    // Percorremos de trás para frente para não reutilizar o mesmo item
    // Exemplo, barras 1,2 e 8 numa mochila de peso 10
    // Se a barra pesa 1
    // Ele vai chegar em dp[0] === 1 e dai atualizar dp[1] = 1,
    // Porque podemos chegar na mochila de peso 1 adicionando essa barra de peso 1
    // Proxima barra peso 2,
    // quando j for 3 (3-2 = 1), ele vai bater em dp[1] = 1
    // Atualizando dp[3] = 1, porque podemos chegar no peso 3 adicionando o peso 1 com o peso 2
    // E tambem vai atualizar dp[2] = 1, porque podemos chegar nele usando dp[0] + 2
    // Mas dp[4] = 0 sempre, porque nao temos uma barra de peso 3 para bater em dp[1] ou peso 4 para bater em dp[0], ou peso 2 para bater em dp[2],
    // ja que a proxima barra sera 8 e ela so verifica até dp[8] que é o minimum que ela pode por si só preencher
    for (let j = weight; j >= barWeight; j--) {
      if (dp[j - barWeight] === 1) {
        dp[j] = 1;
      }
    }
  });

  // Encontramos o maior índice que possui o valor 1
  // seguindo exemplo dito no loop teriamos um array no formato
  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] Peso
  // [1, 1, 1, 1, 0, 0 ,0, 0, 1, 1,  1] Existe Combinacao para o peso
  for (let i = weight; i >= 0; i--) {
    if (dp[i] === 1) return i;
  }

  return 0;
};

// --- INICIANDO TESTES DO MAXIMUM AMOUNT OF GOLD (DYNAMIC PROGRAMMING) ---

// Teste 1: Exemplo do enunciado (Input: 10, [1, 4, 8])
const res1 = maximumGold([10, 3], [1, 4, 8]);
console.log(
  `Teste 1 (W=10, [1, 4, 8]): Expected: 9 | Result: ${res1} | Valid: ${res1 === 9}`,
);

// Teste 2: Capacidade exata (Input: 20, [5, 5, 10])
const res2 = maximumGold([20, 3], [5, 5, 10]);
console.log(
  `Teste 2 (W=20, [5, 5, 10]): Expected: 20 | Result: ${res2} | Valid: ${res2 === 20}`,
);

// Teste 3: Itens maiores que a capacidade (Input: 5, [10, 20, 30])
const res3 = maximumGold([5, 3], [10, 20, 30]);
console.log(
  `Teste 3 (W=5, [10, 20, 30]): Expected: 0 | Result: ${res3} | Valid: ${res3 === 0}`,
);

// Teste 4: Soma perfeita com múltiplos itens pequenos (Input: 7, [2, 2, 2, 5])
const res4 = maximumGold([7, 4], [2, 2, 2, 5]);
console.log(
  `Teste 4 (W=7, [2, 2, 2, 5]): Expected: 7 | Result: ${res4} | Valid: ${res4 === 7}`,
);

// Teste 5: Capacidade zero (Input: 0, [1, 2, 3])
const res5 = maximumGold([0, 3], [1, 2, 3]);
console.log(
  `Teste 5 (W=0, [1, 2, 3]): Expected: 0 | Result: ${res5} | Valid: ${res5 === 0}`,
);
