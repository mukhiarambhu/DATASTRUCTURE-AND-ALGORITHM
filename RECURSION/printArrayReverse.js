function runProgramme(input) {
  let data = input.split(" ").map(Number);

  function printReverse(arr, n) {
    if (n === arr.length) {
      return;
    }
    printReverse(arr, n + 1);
    console.log(arr[n]);
  }
  printReverse(data, 0);
}

runProgramme(`1 2 3 4 5 6 7`);
