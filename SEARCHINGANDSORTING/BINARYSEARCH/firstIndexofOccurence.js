let data = [1, 2, 2, 2, 3, 3];
let target = 7;
let n = data.length;

function binarySearch(data, n, target) {
  let start = 0;
  let end = n - 1;
  let answer = -1;
  while (start <= end) {
    let mid = Math.ceil(start + (end - start) / 2);
    if (target == data[mid]) {
      answer = mid;
      end = mid - 1;
    } else if (target > data[mid]) {
      start = mid + 1;
    } else if (target < data[mid]) {
      end = mid - 1;
    }
  }
  return answer;
}
console.log(binarySearch(data, n, target));
