function runProgramme(input) {
  let newInput = input.split("\n");
  let t = +newInput[0];
  let step = 1;
  for (let a = 0; a < t; a++) {
    let r1 = +newInput[step + a];
    let data = newInput.slice(step + 1 + a, step + 1 + a + r1).map((row) => {
      return row.split(" ").map(Number);
    });
    step += r1;
    let topWall = 0;
    let bottomWall = r1 - 1;
    let leftWall = 0;
    let rightwall = r1 - 1;
    let ans = "";
    for (let i = bottomWall; i >= topWall; i--) {
      ans += data[i][leftWall] + " ";
    }
    topWall++;

    for (let i = topWall; i <= bottomWall; i++) {
      ans += data[i][i] + " ";
    }
    topWall--;
    bottomWall--;

    for (let i = bottomWall; i >= topWall; i--) {
      ans += data[i][rightwall] + " ";
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
