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
console.log(BinarySearch(sortedArr, 3));
