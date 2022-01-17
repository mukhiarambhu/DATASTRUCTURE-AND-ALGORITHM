function runProgramme(input) {
  let newInput = input.split("\n");
  let n = +newInput[0];
  let data = newInput.splice(1).map((row) => {
    return row.split(" ").map(Number);
  });

  let topwall = 0;
  let bottomwall = n - 1;
  let leftwall = 0;
  let rightwall = n - 1;
  let count = 0;
  let totalelement = n * n;
  let result = "";
  while (count < totalelement) {
    //topwall

    for (let i = leftwall; i <= rightwall; i++) {
      if (count < totalelement) {
        result += data[topwall][i] + " ";
        count++;
      }
    }
    topwall++;
    //rightwall
    for (let i = topwall; i <= bottomwall; i++) {
      if (count < totalelement) {
        result += data[i][rightwall] + " ";
        count++;
      }
    }
    rightwall--;

    //bottomwall

    for (let i = rightwall; i >= leftwall; i--) {
      if (count < totalelement) {
        result += data[bottomwall][i] + " ";
        count++;
      }
    }
    bottomwall--;
    //left wall

    for (let i = bottomwall; i >= topwall; i--) {
      if (count < totalelement) {
        result += data[i][leftwall] + " ";
        count++;
      }
    }
    leftwall++;
  }
  console.log(result);
}
runProgramme(`4
1 2 3 4
5 6 7 8
1 2 3 4
4 5 6 8`);
