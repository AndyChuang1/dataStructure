// Question:
// Given an array A of distinct integers sorted in ascending order, return the smallest index i // that satisfies A[i] == i.  Return -1 if no such i exists.
//

// Example:
// Input: [-10,-5,0,3,7]
// Output: 3
// Explanation:
// For the given array, A[0] = -10, A[1] = -5, A[2] = 0, A[3] = 3, thus the output is 3.
// Example 2:

// Input: [0,2,5,8,17]
// Output: 0
// Explanation:
// A[0] = 0, thus the output is 0.
// Example 3:

// Input: [-10,-5,3,4,7,9]
// Output: -1
// Explanation:
// There is no such i that A[i] = i, thus the output is -1.

const arr = [-10, -5, 0, 3, 7];

function fixedPoint_Sequential_Search(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === i) {
      console.log(i);
      return i;
    }
  }
  return -1;
}

function fixedPoint_Binary_Search(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (mid < arr[mid]) {
      end = mid - 1;
    } else if (mid > arr[mid]) {
      start = mid + 1;
    } else {
      console.log(mid);
      return mid;
    }
  }
  return -1;
}
fixedPoint_Binary_Search(arr);
