//print number in decreasing number from 1 to n

function print(n) {
  if (n == 0) {
    return;
  }
  print(n - 1);
  console.log(n);
}

print(6);

//store in array then print

function print(n) {
  let arr = [];
  printInc(n, arr);
  return console.log(arr);
}

function printInc(n, arr) {
  if (n === 0) {
    return;
  }
  printInc(n - 1, arr);
  arr.push(n);
}

print(5);
