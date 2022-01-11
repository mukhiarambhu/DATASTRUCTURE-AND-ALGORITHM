// rotate array whithout extra space;

// q--> rotate the given array by 3 to right
// 1,2,3,4,5,6------> 4,5,6,1,2,3
// this can be achieved like
// step1-> rotate the given array from 0 to n-1 -->  6,5,4,3,2,1
// step2-> rotate first 3 i.e from 0 to k-1 element i.e -->4,5,6,3,2,1
// step3->rotate remaining element i.e from k to n-1 -> 4,5,6,1,2,3 this is our answer

// we will write function to reverse

let data = [1, 2, 3, 4, 56, 4];
let k = 3;

function reverse(data, i, j) {
  while (i < j) {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i++;
    j--;
  }
}

function rotate(data, k) {
  let n = data.length;
  k = k % n;
  if (k < 0) {
    k += n;
  }

  reverse(data, 0, n - 1);
  reverse(data, 0, k - 1);
  reverse(data, k, n - 1);

  return console.log(data.join(" "));
}

rotate(data, k);

// //rotate array to left by given value

function reverseLeft(data, i, j) {
  while (i < j) {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i++;
    j--;
  }
}

function rotateLeft(data, k) {
  let n = data.length;
  k = k % n;
  if (k < 0) {
    k += n;
  }
  reverseLeft(data, 0, n - 1);
  reverseLeft(data, 0, n - k - 1);
  reverseLeft(data, n - k, n - 1);
  return console.log(data.join(" "));
}

rotateLeft(data, 2);
