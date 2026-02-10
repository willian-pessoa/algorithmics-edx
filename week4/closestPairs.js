const dist = (p1, p2) => {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
};

const minDistBruteForce = (arrPoints) => {
  let min = Infinity;
  for (let i = 0; i < arrPoints.length; i++) {
    for (let j = i + 1; j < arrPoints.length; j++) {
      const d = dist(arrPoints[i], arrPoints[j]);
      if (d < min) min = d;
    }
  }
  return min;
};

const closestPairs = (nPoints, arrPoints) => {
  if (nPoints !== arrPoints.length) return -1;

  const xSorted = arrPoints.sort((pa, pb) => pa[0] - pb[0]);

  const findClosest = (P) => {
    const n = P.length;
    if (n <= 3) return minDistBruteForce(P);

    const mid = Math.floor(n / 2);
    const midPoint = P[mid];

    const left = P.slice(0, mid);
    const right = P.slice(mid);

    let d = Math.min(findClosest(left), findClosest(right));

    // 2. Construir a Strip
    const strip = [];
    for (let i = 0; i < n; i++) {
      if (Math.abs(P[i][0] - midPoint[0]) < d) {
        strip.push(P[i]);
      }
    }

    // 3. Ordenar a Strip por Y
    strip.sort((a, b) => a[1] - b[1]);

    // 4. Comparar pontos na Strip
    for (let i = 0; i < strip.length; i++) {
      for (
        let j = i + 1;
        j < strip.length && strip[j][1] - strip[i][1] < d;
        j++
      ) {
        const dStrip = dist(strip[i], strip[j]);
        if (dStrip < d) d = dStrip;
      }
    }

    return d;
  };

  return findClosest(xSorted);
};

// --- TESTES ---
console.log("--- INICIANDO TESTES DO PAR DE PONTOS MAIS PRÓXIMO ---\n");
const floatEqual = (a, b) => Math.abs(a - b) < 1e-3;

const points1 = [
  [0, 0],
  [3, 4],
];
const res1 = closestPairs(2, points1);
console.log(
  `Teste 1: Expected: 5.0000 | Result: ${res1.toFixed(4)} | Valid: ${floatEqual(res1, 5.0)}`,
);

const points2 = [
  [7, 7],
  [1, 100],
  [4, 8],
  [7, 7],
];
const res2 = closestPairs(4, points2);
console.log(
  `Teste 2: Expected: 0.0000 | Result: ${res2.toFixed(4)} | Valid: ${floatEqual(res2, 0.0)}`,
);

const points3 = [
  [4, 4],
  [-2, -2],
  [-3, -4],
  [-1, 3],
  [2, 3],
  [-4, 0],
  [1, 1],
  [-1, -1],
  [3, -1],
  [-4, 2],
  [-2, 4],
];
const res3 = closestPairs(11, points3);
console.log(
  `Teste 3: Expected: 1.4142 | Result: ${res3.toFixed(4)} | Valid: ${floatEqual(res3, 1.4142)}`,
);

const points4 = [
  [0, 0],
  [0, 1],
  [0, 0.5],
];
const res4 = closestPairs(3, points4);
console.log(
  `Teste 4: Expected: 0.5000 | Result: ${res4.toFixed(4)} | Valid: ${floatEqual(res4, 0.5)}`,
);
