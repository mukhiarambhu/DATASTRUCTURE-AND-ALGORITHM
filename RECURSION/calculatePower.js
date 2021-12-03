function power(x, n) {
  if (n === 0) {
    return 1;
  }
  let xnm1 = power(x, n - 1);
  let xn = xnm1 * x;
  return xn;
}

//above code time complexity is O(n) and based on formula x**n=x*x**n-1

// we can also write above code with formula x**n= x**n/2 *x**n/2 if n is even
//if n is  odd we can write it as x**n= x**n/2 *x**n/2 *n

// time complexity of this will be O(logn)

function power1(x, n) {
  if (n == 0) {
    return 1;
  }
  xb2 = power(x, n / 2);
  x = xb2 * xb2;

  if (n % 2 === 1) {
    x = xb2 * xb2 * n;
  }
  return x;
}

console.log(power(2, 5));
