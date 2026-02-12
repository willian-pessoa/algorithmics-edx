const maximizeValue = (input) => {
  const digits = input.split(/[\+\-\*]/).map(Number);
  const operations = input.split(/\d/).filter((s) => s !== "");
  const n = digits.length;

  // Inicializa as matrizes de min e max
  const minTable = Array.from({ length: n }, () => Array(n).fill(0));
  const maxTable = Array.from({ length: n }, () => Array(n).fill(0));

  // Casos base: subexpressão de um único número
  digits.forEach((digit, i) => {
    minTable[i][i] = digit;
    maxTable[i][i] = digit;
  });

  const getMinMax = (i, j) => {
    let minVal = Infinity;
    let maxVal = -Infinity;

    for (let k = i; k < j; k++) {
      const op = operations[k];
      const combinations = [
        applyOp(maxTable[i][k], maxTable[k + 1][j], op),
        applyOp(maxTable[i][k], minTable[k + 1][j], op),
        applyOp(minTable[i][k], maxTable[k + 1][j], op),
        applyOp(minTable[i][k], minTable[k + 1][j], op),
      ];

      minVal = Math.min(minVal, ...combinations);
      maxVal = Math.max(maxVal, ...combinations);
    }
    return [minVal, maxVal];
  };

  const applyOp = (a, b, op) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
  };

  // Preenchimento da tabela por distância (diagonal)
  for (let s = 1; s < n; s++) {
    for (let i = 0; i < n - s; i++) {
      const j = i + s;
      const [minV, maxV] = getMinMax(i, j);
      minTable[i][j] = minV;
      maxTable[i][j] = maxV;
    }
  }

  return maxTable[0][n - 1];
};

// --- INICIANDO TESTES DO MAXIMIZE EXPRESSION ---

// Teste 1: Exemplo simples da expressão fornecida no código (5-8+7*4-8+9)
// Uma forma de obter 200: (5 - ((8 + 7) * (4 - (8 + 9)))) -> 5 - (15 * -13) -> 5 + 195 = 200
const res1 = maximizeValue("5-8+7*4-8+9");
console.log(
  `Teste 1 (Expressão Longa): Expected: 200 | Result: ${res1} | Valid: ${res1 === 200}`,
);

// Teste 2: Exemplo básico com subtração (1-5)
const res2 = maximizeValue("1-5");
console.log(
  `Teste 2 (1-5): Expected: -4 | Result: ${res2} | Valid: ${res2 === -4}`,
);

// Teste 3: Prioridade de parênteses implícita (1+2*3)
// Pode ser (1+2)*3 = 9 ou 1+(2*3) = 7. O máximo é 9.
const res3 = maximizeValue("1+2*3");
console.log(
  `Teste 3 (1+2*3): Expected: 9 | Result: ${res3} | Valid: ${res3 === 9}`,
);

// Teste 4: Expressão com múltiplas subtrações e multiplicações (5-8+7)
// Pode ser (5-8)+7 = 4 ou 5-(8+7) = -10. O máximo é 4.
const res4 = maximizeValue("5-8+7");
console.log(
  `Teste 4 (5-8+7): Expected: 4 | Result: ${res4} | Valid: ${res4 === 4}`,
);

// Teste 5: Caso de valor único
const res5 = maximizeValue("9");
console.log(
  `Teste 5 (Valor Único): Expected: 9 | Result: ${res5} | Valid: ${res5 === 9}`,
);
