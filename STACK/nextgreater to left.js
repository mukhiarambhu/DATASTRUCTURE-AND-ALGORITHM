//find an next greater element to left of an element
//eg=> 12 5 3 2 1 7 9 --> -1 12 5 3 2 12 1 2

function runProgramme(input) {
  let data = input.split(" ").map(Number);
  let n = data.length;

  let stack = [];
  let answer = [];
  stack.push(data[0]);
  answer.push(-1);
  for (let i = 1; i < n; i++) {
    //util data[i] will find elemnt greater than itslef on top of stack it will keep pooping. i.e it will all element smaller than itself .
    while (stack.length > 0 && data[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    //if stack become empty after pooping then it will push -1 as no elemnt exist greater than itself
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      //if stack is not empty the it has found greater element
      answer.push(stack[stack.length - 1]);
    }
    stack.push(data[i]);
  }
  console.log(...answer);
}

runProgramme(`12 5 3 2 1 7 9`);
