//print number in decreasing number from 1 to n

function print(n) {
  if (n == 0) {
    return;
  }
  print(n - 1);
  console.log(n);
}

print(6);
