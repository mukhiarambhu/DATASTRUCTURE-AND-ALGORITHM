//print number in decreasing increasing like 5 4 3 2 1 1 2 3 4 5

//solution1
function printDec(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  printDec(n - 1);
}

function printInc(n) {
  if (n == 0) {
    return;
  }
  printInc(n - 1);
  console.log(n);
}

function printBoth(n) {
  printDec(n);
  printInc(n);
}

//solution 2

function printIncDec(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printIncDec(n - 1);
  console.log(n);
}

printIncDec(5);
