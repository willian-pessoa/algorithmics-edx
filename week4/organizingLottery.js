const countLessOrEqual = (arr, x) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= x) left = mid + 1;
    else right = mid;
  }
  return left;
};

const countLess = (arr, x) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < x) left = mid + 1;
    else right = mid;
  }
  return left;
};

const getEdgePoint = (arr) => {
  const startingPoints = [];
  const endPoints = [];
  for (let segment of arr) {
    startingPoints.push(segment[0]);
    endPoints.push(segment[1]);
  }

  return [
    startingPoints.sort((a, b) => a - b),
    endPoints.sort((a, b) => a - b),
  ];
};

/**
 *
 * @param {*} param0 => nSegments numero de segmentos, nPoints número de pontos
 * @param {*} arrSegments => segmentos, tamanho deve ser igual a nSegments
 * @param {*} arrPoints => pontos, tamanho deve ser igual a nPoints
 */
const organizingLottery = ([nSegments, nPoints], arrSegments, arrPoints) => {
  if (arrSegments.length !== nSegments || arrPoints.length !== nPoints)
    return [];

  const [startingPoints, endPoints] = getEdgePoint(arrSegments);

  const result = [];

  for (let i = 0; i < nPoints; i++) {
    const openDoor = countLessOrEqual(startingPoints, arrPoints[i]);
    const closeDoor = countLess(endPoints, arrPoints[i]);
    result.push(openDoor - closeDoor);
  }

  return result;
};

console.log("--- INICIANDO TESTES DA LOTERIA (DIVIDIR E CONQUISTAR) ---\n");

// Função auxiliar para comparar os arrays de resultado
const arraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Teste 1: Exemplo 1 do Problema
const res1 = organizingLottery(
  [2, 3],
  [
    [0, 5],
    [7, 10],
  ],
  [1, 6, 11],
);
console.log(
  `Teste 1 (Exemplo 1): Expected: [1,0,0] | Result: [${res1}] | Valid: ${arraysEqual(res1, [1, 0, 0])}`,
);

// Teste 2: Exemplo 2 do Problema (Números negativos e grandes)
const res2 = organizingLottery([1, 3], [[-10, 10]], [-100, 100, 0]);
console.log(
  `Teste 2 (Exemplo 2): Expected: [0,0,1] | Result: [${res2}] | Valid: ${arraysEqual(res2, [0, 0, 1])}`,
);

// Teste 3: Exemplo 3 do Problema (Sobreposição de segmentos)
const res3 = organizingLottery(
  [3, 2],
  [
    [0, 5],
    [-3, 2],
    [7, 10],
  ],
  [1, 6],
);
console.log(
  `Teste 3 (Exemplo 3): Expected: [2,0] | Result: [${res3}] | Valid: ${arraysEqual(res3, [2, 0])}`,
);

// Teste 4: Ponto exatamente na borda do segmento (Deve contar)
const res4 = organizingLottery([1, 2], [[5, 10]], [5, 10]);
console.log(
  `Teste 4 (Bordas): Expected: [1,1] | Result: [${res4}] | Valid: ${arraysEqual(res4, [1, 1])}`,
);

// Teste 5: Segmentos idênticos
const res5 = organizingLottery(
  [3, 1],
  [
    [1, 10],
    [1, 10],
    [1, 10],
  ],
  [5],
);
console.log(
  `Teste 5 (Triplicado): Expected: [3] | Result: [${res5}] | Valid: ${arraysEqual(res5, [3])}`,
);

// Teste 6: Pontos fora de qualquer segmento
const res6 = organizingLottery(
  [2, 2],
  [
    [1, 2],
    [4, 5],
  ],
  [3, 6],
);
console.log(
  `Teste 6 (Fora): Expected: [0,0] | Result: [${res6}] | Valid: ${arraysEqual(res6, [0, 0])}`,
);

// Teste 7: Segmento unitário (Início igual ao Fim)
const res7 = organizingLottery([1, 3], [[5, 5]], [4, 5, 6]);
console.log(
  `Teste 7 (Unitário): Expected: [0,1,0] | Result: [${res7}] | Valid: ${arraysEqual(res7, [0, 1, 0])}`,
);

console.log("\n--- TESTES FINALIZADOS ---");
