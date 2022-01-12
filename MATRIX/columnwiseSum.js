function runProgramme(input) {
  let newInput = input.split("\n");
  let mat = newInput.splice(0).map((row) => {
    return row.split(" ").map(Number);
  });
  let r = mat.length;
  let c = mat[0].length;

  for (let i = 0; i < c; i++) {
    let sum = 0;
    for (let j = 0; j < r; j++) {
      sum += mat[j][i];
    }
    console.log(sum);
  }
}

runProgramme(`1 2 3
4 5 6`);
