//worstcase time complexity=O(n**2)
//bestcase time complexity=O(n**2)
//it is unstable algorithm

//in this we select the element and put it at its required position  we will find Index of maxELement and swap it with last index

function bubbleSort(data) {
  let n = data.length;
  for (let i = 0; i < n; i++) {
    let lastIndex = n - i - 1;
    let maxEleIndex = findMax(data, 0, lastIndex);
    swap(data, lastIndex, maxEleIndex);
  }
  return data;
}

//function to find the index of max element

function findMax(data, startIndex, lastindex) {
  let max = startIndex;
  for (let i = startIndex; i <= lastindex; i++) {
    if (data[i] > data[max]) {
      max = i;
    }
  }
  return max;
}

//function to swap the element
function swap(data, lastIndex, maxELementIndex) {
  let temp = data[lastIndex];
  data[lastIndex] = data[maxELementIndex];
  data[maxELementIndex] = temp;
}

let data = [45, 5, 69, 2, 6, 6];
console.log(bubbleSort(data));
