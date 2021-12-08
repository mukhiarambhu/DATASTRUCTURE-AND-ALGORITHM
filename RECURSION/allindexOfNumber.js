//find every index of a number in array in array form

function runProgramme(input) {
  let newInput = input.split("\n");
  let number = +newInput[0];
  let data = newInput[1].split(" ").map(Number);
  let indexOfNumber = [];

  function printIndex(arr, n, numb) {
    if (n === arr.length) {
      return;
    }
    if (arr[n] === numb) {
      indexOfNumber.push(n);
    }
    printIndex(arr, n + 1, numb);
  }
  printIndex(data, 0, number);
  if (indexOfNumber.length === 0) {
    console.log(-1);
  } else {
    console.log(indexOfNumber);
  }
}

runProgramme(`2
4 5 6 7 2 6 8 6 2 3`);
