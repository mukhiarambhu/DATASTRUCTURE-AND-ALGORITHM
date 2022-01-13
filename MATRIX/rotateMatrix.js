//rotate from top to bottom
//traverse an array
// 1 8 9
// 2 7 10
// 3 6 11   ===> 4 3 2 15 6 7 8 12 11 10 9
// 4 5 12

function runProgramme(input) {
  let data = input.split("\n").map((row) => {
    return row.split(" ").map(Number);
  });
  let r = data.length;
  let c = data[0].length;
  let res = "";
  for (let i = 0; i < c; i++) {
    for (let j = r - 1; j >= 0; j--) {
      res += data[j][i] + " ";
    }
  }
  console.log(res);
}
runProgramme(`1 8 9
2 7 10
3 6 11
4 5 12`);
