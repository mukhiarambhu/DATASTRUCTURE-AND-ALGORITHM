//  You are given n numbers, representing the height of bars in a bar chart.
// You are required to find and print the area of the largest rectangle in the histogram.
//eg-->6,2,5,4,5,1,6 =>12

function runProgramme(input) {
  let data = input.split(",").map(Number);
  let n = data.length;
  //find right boundary of each element i.e index of smaller element to right
  let rightBoundary = [];
  let stachRb = [];
  stachRb.push(n - 1);
  rightBoundary[n - 1] = n;
  for (let i = n - 2; i >= 0; i--) {
    while (stachRb.length > 0 && data[i] < data[stachRb[stachRb.length - 1]]) {
      stachRb.pop();
    }
    if (stachRb.length === 0) {
      rightBoundary[i] = n;
    } else {
      rightBoundary[i] = stachRb[stachRb.length - 1];
    }
    stachRb.push(i);
  }

  //find left boundary of element i.e index of smaller element to left of every element

  let leftBoundary = [];
  let stackLb = [];
  leftBoundary.push(-1);
  stackLb.push(0);
  for (let i = 1; i < n; i++) {
    while (stackLb.length > 0 && data[i] < data[stackLb[stackLb.length - 1]]) {
      stackLb.pop();
    }
    if (stackLb.length === 0) {
      leftBoundary[i] = -1;
    } else {
      leftBoundary[i] = stackLb[stackLb.length - 1];
    }
    stackLb.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    let width = rightBoundary[i] - leftBoundary[i] - 1;
    let area = data[i] * width;
    if (area > maxArea) {
      maxArea = area;
    }
  }
  console.log(maxArea);
}

runProgramme(`6,2,5,4,5,1,6`);
