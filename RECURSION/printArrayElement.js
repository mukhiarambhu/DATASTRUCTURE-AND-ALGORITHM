function runprogramme(input) {
  let data = input.split(" ");

  function print(arr, n) {
    if (n === arr.length) {
      return;
    }

    console.log(arr[n]);
    print(arr, n + 1);
  }
  print(data, 0);
}

runprogramme(`4 5 7 3 1 2`);
