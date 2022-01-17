function runProgramme(input) {
  let newInput = input.split("\n");
  let t = +newInput[0];
  let step = 1;
  for (let a = 0; a < t; a++) {
    let r = +newInput[step + a];

    let data = newInput.slice(step + 1 + a, step + a + 1 + r).map((row) => {
      return row.split(" ").map(Number);
    });
    step += r;
    let topwall = 0;
    let bottomwall = r - 1;
    let leftwall = 0;
    let rightwall = r - 1;

    let ans = "";
    for (let i = bottomwall; i >= topwall; i--) {
      ans += data[i][leftwall] + " ";
    }
    leftwall++;
    for (let i = leftwall; i <= rightwall; i++) {
      ans += data[topwall][i] + " ";
    }
    topwall++;
    for (let i = topwall; i <= bottomwall; i++) {
      ans += data[i][rightwall] + " ";
    }
    rightwall--;
    for (let i = rightwall; i >= leftwall; i--) {
      ans += data[bottomwall][i] + " ";
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
