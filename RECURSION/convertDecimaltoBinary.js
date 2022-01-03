let answer = "";

function binary(n) {
  if (n == 0) return 0;
  binary(Math.floor(n / 2));
  answer += n % 2;
}
binary(25);
console.log(answer);
