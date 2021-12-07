function runProgramme(input) {
  let newInput = input.split("\n");
  let number = +newInput[0];
  let data = newInput[1].split(" ").map(Number);

  let count = 0;

  function lastOccurence(arr, n, numb) {
    if (n === arr.length) {
      return console.log(-1);
    }
    lastOccurence(arr, n + 1, numb);

    if (arr[n] === numb) {
      count++;
      if (count == 1) {
        console.log(n);
      }
      return;
    }
  }
  lastOccurence(data, 0, number);
}
runProgramme(`23
1 2 3 4 5 6 3 7  9`);
