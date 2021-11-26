// You are given a string exp representing an expression.
//  Assume that the expression is balanced  i.e. the opening and closing brackets match with each other.
// But, some of the pair of brackets maybe extra/needless.
//  You are required to print true if you detect extra brackets and false otherwise.
// eg.e.g.'
// ((a + b) + (c + d)) -> false
// (a + b) + ((c + d)) -> true

function runProgramme(input) {
  let n = input.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (input[i] === "(") {
      stack.push(input[i]);
    } else if (input[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(input[i]);
      }
    }
  }

  if (stack.length === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

runProgramme(`((a + )b) + (c + d))`);
