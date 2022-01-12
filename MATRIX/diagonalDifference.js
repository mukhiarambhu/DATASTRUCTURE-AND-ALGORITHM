function runProgramme(input) {
  let newInput = input.split("\n");
  let mat = newInput.slice(0).map((row) => {
    return row.trim().split(" ").map(Number);
  });
  let r = mat.length;
  let c = mat[0].length;

  let leftDIagonalSum = 0;
  let rightDiagonalSum = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i == j) {
        leftDIagonalSum += mat[i][j];
      }
      if (i + j == r - 1) {
        rightDiagonalSum += mat[i][j];
      }
    }
  }
  let difference = Math.abs(leftDIagonalSum - rightDiagonalSum);
  console.log(difference);
}

runProgramme(`1 2 3
4 5 6
0 8 9`);
