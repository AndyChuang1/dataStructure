const numArr = [1, 8, 9, 6, 10, 9, 3];
const sortedArr = numArr.sort((a, b) => a - b);

function BinarySearch(sortArr, target) {
  let start = 0;
  let end = sortArr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (sortArr[middle] < target) {
      start = middle + 1;
    } else if (sortArr[middle] > target) {
      end = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
// console.log(BinarySearch(sortedArr, 3));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (r >= l) {
    const mid = l + ((r - l) >> 1);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    }
  }

  return -1;
};

// search([-1, 0, 3, 5, 9, 12], 9);

function main(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  return binarySearchRecu(nums, l, r, target);
}

var binarySearchRecu = function (arr, l, r, t) {
  if (l > r) return -1;
  const mid = l + ((r - l) >> 1);

  if (arr[mid] === t) return mid;

  if (arr[mid] > t) {
    return binarySearchRecu(arr, l, mid - 1, t);
  }
  return binarySearchRecu(arr, mid + 1, r, t);
};
main([-1, 0, 3, 5, 9, 12], 9);
