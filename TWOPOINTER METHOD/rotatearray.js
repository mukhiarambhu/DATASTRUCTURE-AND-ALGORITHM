//rotate the given array to right hand by given value

function rotateRight(data, k) {
  let n = data.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += data[(n + i - k) % n] + " ";
  }
  return console.log(result);
}

let data = [1, 2, 3, 4, 56, 4];
let k = 3;
rotateRight(data, k);

//rotate the given array to left by given value

function rotateLeft(data, k) {
  let res = "";
  let n = data.length;
  for (let i = 0; i < n; i++) {
    res += data[(n + i + k) % n] + " ";
  }
  return console.log(res);
}
rotateLeft(data, 2);
