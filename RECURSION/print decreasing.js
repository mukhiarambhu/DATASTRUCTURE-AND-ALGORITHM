//print number from 5 to 1 using recursion
//print a number in decreasing order from given number

function print(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  print(n - 1);
}

print(8);
