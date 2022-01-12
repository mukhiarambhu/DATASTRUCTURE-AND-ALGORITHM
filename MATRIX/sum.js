function runPrograme(input) {
  let newInput = input.split("\n");
  let spec = newInput[0].split(" ").map(Number);
  let r = spec[0];
  let c = spec[1];
  let data = newInput.slice(1).map(function (row) {
    return row.split(" ").map(Number);
  });
  let sum = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      sum += data[i][j];
    }
  }
  console.log(sum);
}

runPrograme(`3 4
1 2 3 4
0 5 6 1
9 3 0 8`);
