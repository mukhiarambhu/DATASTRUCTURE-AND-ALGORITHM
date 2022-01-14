//--->
let data = [3, 4, 5, 1, 2];
let key = 1;

//mark start and end  find mid and see if element at mid  is greater than element at low if yes then left part is sorted , now see if number to be searched for lie in left by lookin if key >= element at low and key is smaller than or equal to element at mid; if this condition satisy then search in left else search in right by increasing start to mid+1

function findKey(data, key) {
  let n = data.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.ceil(start + (end - start) / 2);
    if (data[mid] == key) return console.log(mid);
    else if (data[start] < data[mid]) {
      if (key >= data[start] && key < data[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (key > data[mid] && key <= data[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
}
findKey(data, key);
