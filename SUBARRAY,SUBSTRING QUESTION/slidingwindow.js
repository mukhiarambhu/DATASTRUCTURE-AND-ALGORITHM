//find maxsum of subarray of given size k

function maxSubArray(data, k) {
  let n = data.length;
  let windowSum = 0;
  let maxSum = 0;

  if (n < 0 || k > n) return console.log("not exist");
  for (let i = 0; i < n; i++) {
    windowSum += data[i];
    if (i >= k - 1) {
      if (windowSum > maxSum) {
        maxSum = windowSum;
      }
      windowSum -= data[i - (k - 1)];
    }
  }
  return console.log(maxSum);
}
let data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let k = 4;
maxSubArray(data, k);
