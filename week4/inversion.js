function countInversions(arr) {
  let temp = new Array(arr.length);
  return _mergeSortAndCount(arr, temp, 0, arr.length - 1);
}

function _mergeSortAndCount(arr, temp, left, right) {
  let count = 0;
  if (left < right) {
    let mid = Math.floor((left + right) / 2);

    // Soma inversões da esquerda, da direita e do cruzamento
    count += _mergeSortAndCount(arr, temp, left, mid);
    count += _mergeSortAndCount(arr, temp, mid + 1, right);
    count += mergeAndCount(arr, temp, left, mid, right);
  }
  return count;
}

function mergeAndCount(arr, temp, left, mid, right) {
  let i = left; // Índice para a sub-lista da esquerda
  let j = mid + 1; // Índice para a sub-lista da direita
  let k = left; // Índice para o array resultante
  let count = 0;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      // Se arr[i] > arr[j], então há uma inversão.
      // Todos os elementos restantes na sub-lista da esquerda (de i até mid)
      // são maiores que arr[j], logo, todos formam inversões com ele.
      temp[k++] = arr[j++];
      count += mid - i + 1;
    }
  }

  // Copia os elementos restantes
  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];

  // Devolve os elementos ordenados para o array original
  for (i = left; i <= right; i++) {
    arr[i] = temp[i];
  }

  return count;
}

console.log("--- INICIANDO TESTES DE INVERSÕES ---\n");

// Teste 1: Exemplo do problema
const res1 = countInversions([2, 3, 9, 2, 9]);
console.log(
  `Teste 1 (Exemplo): Expected: 2 | Result: ${res1} | Valid: ${res1 === 2}`,
);

// Teste 2: Sequência já ordenada (0 inversões)
const res2 = countInversions([1, 2, 3, 4, 5]);
console.log(
  `Teste 2 (Ordenada): Expected: 0 | Result: ${res2} | Valid: ${res2 === 0}`,
);

// Teste 3: Sequência totalmente invertida (n*(n-1)/2 inversões)
// Para n=5: 5*4/2 = 10
const res3 = countInversions([5, 4, 3, 2, 1]);
console.log(
  `Teste 3 (Invertida): Expected: 10 | Result: ${res3} | Valid: ${res3 === 10}`,
);

// Teste 4: Elementos iguais (não devem contar como inversão)
const res4 = countInversions([2, 2, 2, 2]);
console.log(
  `Teste 4 (Iguais): Expected: 0 | Result: ${res4} | Valid: ${res4 === 0}`,
);

// Teste 5: Apenas um elemento
const res5 = countInversions([10]);
console.log(
  `Teste 5 (Unitário): Expected: 0 | Result: ${res5} | Valid: ${res5 === 0}`,
);

// Teste 6: Números grandes (limite das constraints)
const res6 = countInversions([1000000000, 1]);
console.log(
  `Teste 6 (Grandes): Expected: 1 | Result: ${res6} | Valid: ${res6 === 1}`,
);

// Teste 7: Caso misto
const res7 = countInversions([6, 1, 5, 2, 3]);
console.log(
  `Teste 7 (Misto): Expected: 6 | Result: ${res7} | Valid: ${res7 === 6}`,
);
