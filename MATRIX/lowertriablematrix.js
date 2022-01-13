function runProgramme(input) {
  let data = input
    .split("\n")
    .splice(0)
    .map((row) => {
      return row.split(" ").map(Number);
    });

  let r = data.length;
  let c = data[0].length;
  let sum = 0;
  for (let i = 0; i < r; i++) {
    let res = " ";
    for (let j = 0; j < c; j++) {
      if (i >= j) {
        res += data[j][i] + " ";
        sum += data[j][i];
      } else {
        res += "0" + " ";
      }
    }
    console.log(res);
  }
  console.log(sum);
}

runProgramme(`1 2 1
2 1 2
1 2 2`);
