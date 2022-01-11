//find max sum of subarray

function maxSum(data) {
  let n = data.length;
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum += data[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return console.log(maxSum);
}
let data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSum(data);
