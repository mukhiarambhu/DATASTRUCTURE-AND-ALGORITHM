//rotate from top to bottom
//traverse an array
// 1 8 9
// 2 7 10
// 3 6 11   ===> 4 3 2 15 6 7 8 12 11 10 9
// 4 5 12

// function runProgramme(input) {
//   let data = input.split("\n").map((row) => {
//     return row.split(" ").map(Number);
//   });
//   let r = data.length;
//   let c = data[0].length;
//   let res = "";
//   for (let i = 0; i < c; i++) {
//     for (let j = r - 1; j >= 0; j--) {
//       res += data[j][i] + " ";
//     }
//   }
//   console.log(res);
// }
// runProgramme(`1 8 9
// 2 7 10
// 3 6 11
// 4 5 12`);

// traverse a given matrix as
//1 8 9
// 2 7 10  +====>9 10 11 12 8 7 6 5 1 2 3 4
// 3 6 11
// 4 5 12

// function runProgramme(input) {
//   let data = input.split("\n").map((row) => {
//     return row.split(" ").map(Number);
//   });
//   let r = data.length;
//   let c = data[0].length;
//   let res = "";
//   for (let i = c - 1; i >= 0; i--) {
//     for (let j = 0; j < r; j++) {
//       res += data[j][i] + " ";
//     }
//   }
//   console.log(res);
// }
// runProgramme(`1 8 9
// 2 7 10
// 3 6 11
// 4 5 12`);

function runProgramme(input) {
  let data = input.split("\n").map((row) => {
    return row.split(" ").map(Number);
  });
  console.log(data);
  let r = data.length;
  let c = data[0].length;
  let res = "";

  for (let i = 0; i < r; i++) {
    if (i % 2 == 0) {
      for (let j = c - 1; j >= 0; j--) {
        res += data[i][j] + " ";
      }
    } else {
      for (let j = 0; j < c; j++) {
        res += data[i][j] + " ";
      }
    }
  }
  console.log(res);
}
runProgramme(`4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5`);
