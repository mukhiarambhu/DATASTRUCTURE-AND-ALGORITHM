//Binary search is used for sorted array
//for bestcase timecoplexity=O(1)
//for worst case timecomplexity=O(logn)

//step1 => mark start and end;
//step2=> find middle element;
mid = start + (end - start) / 2;

//we have to perform operation till start <=end
while (start <= end) {
  //step3=> if target element is greater than mid search in right;
  if (target > arr[mid]) {
    start = mid + 1;
  }
  //step4=> if target element is smaller than mid search in left;

  if (target < arr[mid]) {
    end = mid - 1;
  }

  //step5=> if mid is equal to target answer is found

  if (mid === taregt) {
    return mid;
  }
}
