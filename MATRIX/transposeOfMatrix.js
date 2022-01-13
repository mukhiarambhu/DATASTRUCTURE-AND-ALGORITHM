// Transpose of a given matrix
function runProgramme(input) {
  let newInput = input.split("\n");
  let mat = newInput.splice(0).map((row) => {
    return row.split(" ").map(Number);
  });
  let r = mat.length;
  let c = mat[0].length;

  for (let i = 0; i < c; i++) {
    let result = "";
    for (let j = 0; j < r; j++) {
      result += mat[j][i] + " ";
    }
    console.log(result);
  }
}

runProgramme(`1 2 3
4 5 6`);

//Transpose of a given matrix
function runProgramme(input) {
  let newInput = input.split("\n");
  let mat = newInput.splice(0).map((row) => {
    return row.split(" ").map(Number);
  });
  let r = mat.length;
  let c = mat[0].length;

  for (let i = 0; i < c; i++) {
    let res = "";
    for (let j = 0; j < r; j++) {
      res += mat[j][i] + " ";
    }
    console.log(res);
  }
}

runProgramme(`0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
