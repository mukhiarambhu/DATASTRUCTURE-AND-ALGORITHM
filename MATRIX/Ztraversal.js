function runProgramme(input) {
  let newInput = input.split("\n");
  let t = +newInput[0];
  let step = 1;
  for (let a = 0; a < t; a++) {
    let r1 = +newInput[step + a];
    let data = newInput.slice(step + a + 1, step + a + 1 + r1).map((row) => {
      return row.split(" ").map(Number);
    });
    step += r1;
    let topwall = 0;
    let bottomWall = r1 - 1;
    let leftWall = 0;
    let rightWall = r1 - 1;
    let ans = "";
    for (let i = leftWall; i <= rightWall; i++) {
      ans += data[topwall][i] + " ";
    }
    topwall++;
    for (let i = topwall; i <= bottomWall; i++) {
      for (let j = rightWall; j >= leftWall; j--) {
        if (i + j == r1 - 1) {
          ans += data[i][j] + " ";
        }
      }
    }
    leftWall++;
    for (let i = leftWall; i <= rightWall; i++) {
      ans += data[bottomWall][i] + " ";
    }
    console.log(ans);
  }
}
runProgramme(`2
3
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
1 2 3 4
4 5 6 8`);
