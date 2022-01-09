/*
print pyramid
     *
    *  *
   *  *  *
  *  *  *  *
*/

let n = 5;

for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= n; j++) {
    if (j < n - i + 1) {
      result += " ";
    } else {
      result += "* ";
    }
  }
  console.log(result);
}

//right angled triangle

/*
 *
 **
 ***
 ****
 */

for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= n; j++) {
    if (j <= i) {
      result += "* ";
    }
  }
  console.log(result);
}

/*reverse right triangle;
 *****
 ****
 ***
 **
 *
 */

console.log("////////////////////////////");

for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= n; j++) {
    if (j <= n - i + 1) {
      result += "* ";
    }
  }
  console.log(result);
}

/*
print
    *
   **
  ***
 ****
*****

*/

for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= n; j++) {
    if (j < n - i + 1) {
      result += "  ";
    } else {
      result += "* ";
    }
  }
  console.log(result);
}

/*
print 
*****
 ****
  ***
   **
    *
*/
console.log("/////////////");
for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= n; j++) {
    if (j <= n - (n - i + 1)) {
      result += "  ";
    } else {
      result += "* ";
    }
  }
  console.log(result);
}
