function runProgramme(input) {
  let newInput = input.split("\n");
  let t = +newInput[0];
  let step = 1;
  for (let a = 0; a < t; a++) {
    let r = +newInput[step + a];
    let data = newInput.slice(step + a + 1, step + a + 1 + r).map((row) => {
      return row.split(" ").map(Number);
    });
    step += r;
    let leftWall = 0;
    let rightWall = r - 1;
    let topWall = 0;
    let bottomWall = r - 1;

    let ans = "";
    for (let i = topWall; i <= bottomWall; i++) {
      ans += data[i][leftWall] + " ";
    }
    bottomWall--;

    for (let i = bottomWall; i >= topWall; i--) {
      for (let j = leftWall; j <= rightWall; j++) {
        if (i + j == r - 1) {
          ans += data[i][j] + " ";
        }
      }
    }
    topWall++;
    bottomWall++;
    for (let i = topWall; i <= bottomWall; i++) {
      ans += data[i][rightWall] + " ";
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
