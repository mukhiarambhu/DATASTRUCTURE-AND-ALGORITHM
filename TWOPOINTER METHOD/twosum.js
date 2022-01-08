function twoSum(data, target) {
  let i = 0;
  let j = data.length - 1;
  while (i < j) {
    let sum = data[i] + data[j];
    if (sum == target) return console.log(i, j);
    else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  return console.log(-1);
}

let data = [2, 7, 11, 15];
let target = 9;
twoSum(data, target);
