function generateSUbarray(data) {
  let n = data.length;
  for (let i = 0; i < n; i++) {
    let res = [];
    for (let j = i; j < n; j++) {
      res.push(data[j]);
      console.log(res);
    }
  }
}
let data = [1, 2, 3, 4, 5, 6];
generateSUbarray(data);

function generateSubstring(data) {
  let n = data.length;

  for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = i; j < n; j++) {
      res += data[j];
      console.log(res);
    }
  }
}
generateSubstring(data);
