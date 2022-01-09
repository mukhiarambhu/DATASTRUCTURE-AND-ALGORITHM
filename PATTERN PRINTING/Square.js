/*
print this pattern 
*****
*   *
*   *
*****   
*/

const res = require("express/lib/response");

let n = 5;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < n; j++) {
    if (i == 0 || j == 0 || i == n - 1 || j == 4) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  console.log(res);
}

/*
print this pattern (c)
*****
*   
*   
*****   
*/

for (let i = 0; i < n; i++) {
  result = "";
  for (let j = 0; j < n; j++) {
    if (i == 0 || j == 0 || i == n - 1) {
      result += "* ";
    } else {
      result += " ";
    }
  }
  console.log(result);
}

/*
print this pattern (E)
*****
*
*****  
*   
*****   
*/
let a = 5;

for (let i = 0; i < a; i++) {
  let result = "";
  for (let j = 0; j < a; j++) {
    if (i == 0 || j == 0 || i == a - 1 || i == Math.ceil(a / 2) - 1) {
      result += "* ";
    }
  }
  console.log(result);
}

/*
print this pattern (F)
*****
*
***** 
* 
*  
*****   
*/

for (let i = 0; i < a; i++) {
  let result = "";
  for (let j = 0; j < a; j++) {
    if (i == 0 || j == 0 || i == Math.ceil(a / 2) - 1) {
      result += "* ";
    }
  }
  console.log(result);
}
console.log("/////////////////////////////");
// print this pattern (H)

for (let i = 0; i < a; i++) {
  let result = "";
  for (let j = 0; j < n; j++) {
    if (j == 0 || j == a - 1 || i == Math.ceil(a / 2) - 1) {
      result += "* ";
    } else {
      result += "  ";
    }
  }
  console.log(result);
}
