//find smaller element to right of an element;
//5 8 1 3 2 7 3=>1 1 2 -1 3 -1

function runProgramme(input) {
  let data = input.split(" ").map(Number);
  let n = data.length;

  let stack = [];
  let answer = [];
  stack.push(data[n - 1]);
  answer.push(-1);

  for (let i = n - 2; i >= 0; i--) {
    //data[i] will find number smaller to itslef at top of stack , if number at top of stack is greater it will pop till it find smaller element at top

    while (stack.length > 0 && data[i] <= stack[stack.length - 1]) {
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

runProgramme(`5 8 1 3 2 7 3`);
