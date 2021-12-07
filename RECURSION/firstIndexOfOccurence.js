function runProgramme(input) {
  let newInput = input.split("\n");
  let number = +newInput[0];
  let data = newInput[1].split(" ").map(Number);

  function findFirst(arr, n, b) {
    if (n === arr.length && arr[n] != b) {
      console.log(-1);
      return;
    }
    if (arr[n] === b) {
      console.log(n);

      return;
    }
    findFirst(arr, n + 1, b);
  }
  findFirst(data, 0, number);
}
runProgramme(`9
12 5 3 4 5 3 78 89 6`);
