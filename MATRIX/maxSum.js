//You are given two matrices (2D array). The first array A (n rows and m columns) and second array B (i rows and j columns).
//Output sum of the matrix which is greater than the sum of other matrix.

function runProgramme(input) {
  let newInput = input.split("\n");
  let spec1 = newInput[0].split(" ").map(Number);
  let r1 = spec1[0];
  let c1 = spec1[1];
  let mat1 = newInput.slice(1, r1 + 1).map((row) => {
    return row.split(" ").map(Number);
  });
  let spec2 = newInput[r1 + 1].split(" ").map(Number);
  let r2 = spec2[0];
  let c2 = spec2[1];
  let mat2 = newInput.slice(r1 + 2).map((row) => {
    return row.split(" ").map(Number);
  });
  let sumMat1 = 0;
  let sumMat2 = 0;

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c1; j++) {
      sumMat1 += mat1[i][j];
    }
  }
  for (let i = 0; i < r2; i++) {
    for (let j = 0; j < c2; j++) {
      sumMat2 += mat2[i][j];
    }
  }
  sumMat1 > sumMat2 ? console.log(sumMat1) : console.log(sumMat2);
}

runProgramme(`3 4
1 2 3 4
0 5 6 1
9 3 0 8
2 2
8 8
8 8`);
