//given a string remove all particular character eg=> abcabdf =>bcbdf after removing a from original string

function skip(str, n, newStr, letter) {
  if (str.length === n) {
    if (newStr.length == 0) {
      return console.log("Empty");
    } else {
      return console.log(newStr);
    }
  }

  if (str[n] !== letter) {
    newStr += str[n];
  }
  skip(str, n + 1, newStr, letter);
}

skip("aaaa", 0, "", "a");
