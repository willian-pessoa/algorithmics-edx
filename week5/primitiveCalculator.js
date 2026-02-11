// Calculadora pode +1 ; x2 ; x3
// Dado inteiro n, encontrar quantia minima de operacoes saindo de 1 até n
// retorna quantia minima e a sequencia de numeros ate chegar em n
const primitiveCalculator = (n) => {
  // Tabela para armazenar o número mínimo de operações para cada i
  const minOperations = [
    [0, [0]],
    [0, [1]],
    [1, [1, 2]],
    [1, [1, 3]],
  ];

  if (n < 5) return minOperations[n];

  // Preenche a tabela de 2 até n
  for (let i = 4; i <= n; i++) {
    let costToAdd1 = Infinity;
    let costToMultiply2 = Infinity;
    let costToMultiply3 = Infinity;

    // Opção 1: Subtrair 1
    costToAdd1 = minOperations[i - 1][0];

    // Opção 2: dividir por 2 (se for divisível)
    if (i % 2 === 0) {
      costToMultiply2 = minOperations[i / 2][0];
    }

    // Opção 3: dividir por 3 (se for divisível)
    if (i % 3 === 0) {
      costToMultiply3 = minOperations[i / 3][0];
    }

    if (
      costToAdd1 > -1 &&
      costToAdd1 <= costToMultiply2 &&
      costToAdd1 <= costToMultiply3
    ) {
      minOperations[i] = [costToAdd1 + 1, [...minOperations[i - 1][1], i]];
    } else if (
      costToMultiply2 > -1 &&
      costToMultiply2 <= costToAdd1 &&
      costToMultiply2 <= costToMultiply3
    ) {
      minOperations[i] = [costToMultiply2 + 1, [...minOperations[i / 2][1], i]];
    } else {
      minOperations[i] = [costToMultiply3 + 1, [...minOperations[i / 3][1], i]];
    }
  }

  return minOperations[n];
};

const primitiveCalculatorOptimal = (n) => {
  // Caso base para n = 1
  if (n === 1) return [0, [1]];

  // minOpserations guardará apenas o número mínimo de operações para economizar memória
  const minOpserations = new Array(n + 1).fill(0);

  // 1. Preenche a tabela com o número mínimo de passos
  for (let i = 2; i <= n; i++) {
    // Começamos assumindo que vir do (i - 1) é o melhor
    minOpserations[i] = minOpserations[i - 1] + 1;

    if (i % 2 === 0) {
      minOpserations[i] = Math.min(
        minOpserations[i],
        minOpserations[i / 2] + 1,
      );
    }

    if (i % 3 === 0) {
      minOpserations[i] = Math.min(
        minOpserations[i],
        minOpserations[i / 3] + 1,
      );
    }
  }

  // 2. Reconstrói o caminho (Sequência) voltando de N até 1
  const path = [];
  let current = n;
  while (current >= 1) {
    path.push(current);
    if (current === 1) break;

    // Verifica qual vizinho gerou o custo mínimo
    if (
      current % 3 === 0 &&
      minOpserations[current] === minOpserations[current / 3] + 1
    ) {
      current /= 3;
    } else if (
      current % 2 === 0 &&
      minOpserations[current] === minOpserations[current / 2] + 1
    ) {
      current /= 2;
    } else {
      current -= 1;
    }
  }

  // Retorna [quantidade_minima, sequencia_em_ordem_crescente]
  return [minOpserations[n], path.reverse()];
};

// --- INICIANDO TESTES DO PRIMITIVE CALCULATOR (DYNAMIC PROGRAMMING) ---

// Teste 1: Exemplo simples (Input: 1)
const res1 = primitiveCalculator(1);
console.log(
  `Teste 1 (Num 1): Expected: 0 | Result: ${res1[0]} | Valid: ${res1[0] === 0}`,
);

// Teste 2: Exemplo onde Greedy falharia (Input: 10)
const res2 = primitiveCalculator(10);
console.log(
  `Teste 2 (Num 10): Expected: 3 | Result: ${res2[0]} | Valid: ${res2[0] === 3}`,
);

// Teste 3: Exemplo do enunciado (Input: 5)
const res3 = primitiveCalculator(5);
console.log(
  `Teste 3 (Num 5): Expected: 3 | Result: ${res3[0]} | Valid: ${res3[0] === 3}`,
);

// Teste 4: Exemplo complexo (Input: 96234)
const res4 = primitiveCalculator(96234);
console.log(
  `Teste 4 (Num 96234): Expected: 14 | Result: ${res4[0]} | Valid: ${res4[0] === 14}`,
);

// Teste 5: Limite superior da constraint (Input: 1000000)
const res5 = primitiveCalculator(1000000);
console.log(
  `Teste 5 (Num 1000000): Expected: 19 | Result: ${res5[0]} | Valid: ${res5[0] === 19}`,
);
