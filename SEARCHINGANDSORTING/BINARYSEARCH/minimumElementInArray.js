//find minimum element in array in O(logn)

let data = [4, 6, 7, 9, 10, 11, -1, 1, 2, 3];

function findMinimum(data) {
  let n = data.length;
  let start = 0;
  let end = n - 1;
  if (data[start] <= data[end]) {
    return console.log(data[0]);
  }
  while (start <= end) {
    let mid = Math.ceil(start + (end - start) / 2);

    if (data[mid] > data[mid + 1]) {
      return console.log(data[mid + 1]);
    } else if (data[mid] < data[mid - 1]) {
      return console.log(data[mid]);
    } else if (data[start] <= data[mid]) {
      start = mid + 1;
    } else if (data[mid] <= data[end]) {
      end = mid - 1;
    }
  }
}

findMinimum(data);
