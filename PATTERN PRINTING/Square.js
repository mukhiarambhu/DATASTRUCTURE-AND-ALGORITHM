/*
print this pattern 
*****
*   *
*   *
*****   
*/

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
