function reverse(data) {
  let n = data.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i++;
    j--;
  }
  return console.log(data);
}

let data = [1, 2, 3, 4, 5, 6];

reverse(data);
