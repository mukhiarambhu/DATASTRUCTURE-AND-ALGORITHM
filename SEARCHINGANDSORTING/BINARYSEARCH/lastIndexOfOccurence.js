function lastIndex(data, n, taarget) {
  let start = 0;
  let end = n - 1;
  let answer = -1;
  while (start <= end) {
    let mid = Math.ceil(start + (end - start) / 2);
    if (data[mid] == target) {
      answer = mid;
      start = mid + 1;
    } else if (target > data[mid]) {
      start = mid + 1;
    } else if (target < data[mid]) {
      end = mid - 1;
    }
  }
  return answer;
}

let data = [4, 5, 5, 6, 6, 6, 7, 7, 7];
let n = data.length;
let target = 5;
console.log(lastIndex(data, n, target));
