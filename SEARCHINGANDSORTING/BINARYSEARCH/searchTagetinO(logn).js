function runProgram(input) {
  let newInput = input.split("\n");
  let n = +newInput[0];
  let data = newInput[1].split(" ").map(Number);
  let target = newInput[2];

  let start = 0;
  let end = n - 1;

  while (start <= end) {
    mid = Math.ceil(start + (end - start) / 2);

    if (data[mid] < target) {
      start = mid + 1;
    } else if (data[mid] > target) {
      end = mid - 1;
    } else if (target == data[mid]) {
      return console.log(mid);
    }
  }
  console.log(-1);
}
if (process.env.USERNAME === "Rambhu") {
  runProgram(`5
1 2 4 5 6
4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  s;
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
