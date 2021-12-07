function runProgramme(input) {
  let data = input.split(" ").map(Number);

  let max = data[0];
  function maximum(arr, n) {
    if (n === arr.length) {
      return;
    }
    if (arr[n] > max) {
      max = arr[n];
    }
    maximum(arr, n + 1);
  }
  maximum(data, 1);
  console.log(max);
}

runProgramme(`-45 -60 -12 -78 -31 -56 -2`);
