function power(x, n) {
  if (n === 0) {
    return 1;
  }
  let xnm1 = power(x, n - 1);
  let xn = xnm1 * x;
  return xn;
}

console.log(power(2, 4));
