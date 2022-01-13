// //rotate the matrix by 90  anticlockwise
// function runProgramme(input) {
//   let data = input.split("\n").map((row) => {
//     return row.split(" ").map(Number);
//   });

//   let r = data.length;
//   let c = data[0].length;

//   for (let i = c - 1; i >= 0; i--) {
//     let res = "";
//     for (let j = 0; j < r; j++) {
//       res += data[j][i] + " ";
//     }
//     console.log(res);
//   }
// }
// runProgramme(`1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8`);

//rotate the matrix by 90  clockwise
function runProgramme(input) {
  let data = input.split("\n").map((row) => {
    return row.split(" ").map(Number);
  });

  let r = data.length;
  let c = data[0].length;

  for (let i = 0; i < c; i++) {
    let res = "";
    for (let j = r - 1; j >= 0; j--) {
      res += data[j][i] + " ";
    }
    console.log(res);
  }
}
runProgramme(`1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
