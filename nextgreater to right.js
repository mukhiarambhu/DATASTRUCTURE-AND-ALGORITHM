//find next greater element to right of an element
// for 12 5 19 7 4 18 13 => 19 19 -1 18 18 -1 -1

function runProgram(input) {
  let data = input.split(" ").map(Number);
  let n = data.length;
  let stack = [];
  let answer = [];
  stack.push(data[n - 1]);
  answer.push(-1);

  //until data[i] find number at top of stack which is greater than itself it will continuning poping .

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length > 0 && data[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length == 0) {
      answer.push(-1);
    } else {
      answer.push(stack[stack.length - 1]);
    }
    stack.push(data[i]);
  }
  console.log(answer.reverse());
}

runProgram(`12 5 19 7 4 18 13`);
