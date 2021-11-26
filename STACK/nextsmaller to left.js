//find  smaller element to left
////eg=> 12 5 3 2 1 7 9 --> -1 -1 -1 -1 -1 1 7

function runProgramme(input) {
  let data = input.split(" ").map(Number);
  let n = data.length;

  let stack = [];
  let answer = [];
  stack.push(data[0]);
  answer.push(-1);

  for (let i = 1; i < n; i++) {
    //til data[i] will be smaller than top element of stack it will keep popping i.e it will find number smaller at top of stack
    while (data[i] <= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length == 0) {
      answer.push(-1);
    } else {
      answer.push(stack[stack.length - 1]);
    }
    stack.push(data[i]);
  }
  console.log(...answer);
}

runProgramme(`2 5 3 2 1 7 9`);
