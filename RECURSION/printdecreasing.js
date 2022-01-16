//print a number in decreasing order from given number till 1

function print(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  print(n - 1);
}

print(5);
