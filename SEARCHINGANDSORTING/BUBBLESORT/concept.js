// It is stable sorting algorithm i.e original order is maintained for value that are equal
//space complexity -> O(1)
//time complexity -> O(n) in best case; O(n**2) in worst case

function bubblesort(data) {
  let n = data.length;
  //run the outer loop tilln-1

  for (let i = 0; i < n; i++) {
    let swap = false; //if array is already is sorted i.e no swap has been at first run

    //for each run the highest value will got at last index and after max element is at their position neednot to compare that in next run so inner loop will till n-i
    for (let j = 1; j < n - i; j++) {
      if (data[j] < data[j - 1]) {
        let temp = data[j - 1];
        data[j - 1] = data[j];
        data[j] = temp;
        //if no swap means array is sorted
        swap = true;
      }
    }
    if (!swap) {
      return data;
    }
  }
  return data;
}

let data = [1, 2, 3, 4, 5, 6];
console.log(bubblesort(data));
