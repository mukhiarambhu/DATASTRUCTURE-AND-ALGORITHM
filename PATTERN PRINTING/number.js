const res = require("express/lib/response");

/*
print 
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/
let n = 5;

for (let i = 0; i < n; i++) {
  let result = "";
  for (let j = 0; j < n; j++) {
    result += j + 1 + " ";
  }
  console.log(result);
}
console.log("//////////////////////////////");
/*
print
1 1 1 1 1
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5
*/

for (let i = 0; i < n; i++) {
  let result = "";
  for (let j = 0; j < n; j++) {
    result += i + 1 + " ";
  }
  console.log(result);
}

console.log("//////////////////////////////");
/*
print
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1

*/

for (let i = 0; i < n; i++) {
  let result = "";
  for (let j = n; j >= 1; j--) {
    result += j + " ";
  }
  console.log(result);
}

console.log("//////////////////////////////");
/*
print
5 5 5 5 5
4 4 4 4 4
3 3 3 3 3
2 2 2 2 2
1 1 1 1 1

*/

for (let i = n; i >= 1; i--) {
  let result = "";
  for (let j = 0; j < n; j++) {
    result += i + " ";
  }
  console.log(result);
}

/*
print
1 2 3 4 5
6 7 8 9 10 
11 12 13 14 15
16 17 18 19 20

*/
console.log("//////////////////////////////");

let count = 0;
for (let i = 0; i < n; i++) {
  let result = "";
  for (let j = 0; j < n; j++) {
    count++;
    result += count + " ";
  }
  console.log(result);
}
