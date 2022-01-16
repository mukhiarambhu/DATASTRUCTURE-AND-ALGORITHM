function countZero(n, count) {
  if (n == 0) {
    return console.log(count);
  }

  let rem = n % 10;
  if (rem === 0) {
    return countZero(Math.floor(n / 10), count + 1);
  } else {
    return countZero(Math.floor(n / 10), count);
  }
}

countZero(789002100000, 0);
