// //You are given a number n, representing the size of array a.
//  You are given n numbers, representing the prices of a share on n days. You are required to find the stock span for n days. Stock span is defined as the number of days passed between the current day and the first day before today when price was higher than today.

//eg- 2 5 9 3 1 12 6 8 7 => 1 2 3 1 1 6 1 2 1

function runProgramme(input) {
  let data = input.split(",").map(Number);
  let n = data.length;

  let stack = [];
  let span = [];
  stack.push(0);
  span[0] = 1;

  //data[i] will pop smaleer from stack till it finds grater on top of stack
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && data[i] > data[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length == 0) {
      span[i] = i + 1;
    } else {
      span[i] = i - stack[stack.length - 1];
    }
    stack.push(i);
  }
  console.log(span);
}

runProgramme(`100, 80, 60, 70, 60, 75, 85`);
