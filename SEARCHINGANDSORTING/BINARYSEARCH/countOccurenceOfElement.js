function binarySearch(data, n, flag, target) {
  let start = 0;
  let end = n - 1;
  let index = -1;
  while (start <= end) {
    let mid = Math.ceil(start + (end - start) / 2);

    if (data[mid] == target) {
      index = mid;
      //if flag passed is true it will give 1st index of occurence and if index passed is false it will give last index of occurence
      if (flag == true) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (target > data[mid]) {
      start = mid + 1;
    } else if (target < data[mid]) {
      end = mid - 1;
    }
  }
  return index;
}

let data = [2, 3, 3, 3, 6, 9];
let n = data.length;
let target = 3;

function Occurence() {
  let index1 = binarySearch(data, n, true, target);
  let index2 = binarySearch(data, n, false, target);
  let count = index2 - index1 + 1;
  return count;
}

console.log(Occurence());
