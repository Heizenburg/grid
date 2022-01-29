function getAdjacent(matrix, i, j, k) {
  const directions = [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
  const [row, col] = directions[k];
  // Check for last rows and columns
  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[i].length) {
    return undefined;
  }
  return matrix[row][col];
}

function run(){
  const matrix = [
    [1, 2, 1],
    [2, 1, 1],
    [1, 1, 1]
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = 0; k < 8; k++) {
        const res = getAdjacent(matrix, i, j, k);
        console.log(i, j, k, res); // Do whatever you want here
      }
    }
  }
}

run();
