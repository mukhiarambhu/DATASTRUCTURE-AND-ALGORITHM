//given starting row column and end row column print submatrix
function runProgramme(input) {
  let startROw = 0;
  let endRow = 1;
  let startCol = 0;
  let endCol = 2;
  let data = input.split("\n").map((row) => {
    return row.split(" ").map(Number);
  });

  for (let i = startROw; i <= endRow; i++) {
    let res = "";
    for (let j = startCol; j <= endCol; j++) {
      res += data[i][j] + " ";
    }
    console.log(res);
  }
}
runProgramme(`1 2 1
4 5 6
1 2 3`);
