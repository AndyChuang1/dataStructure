function mergeSort(nums) {
  const length = nums.length;
  let mid = Math.floor(length / 2);
  const leftArr = nums.slice(0, mid);
  const rigthArr = nums.slice(mid);
  console.log(nums);
  if (nums.length === 1) {
    return nums;
  }
  return sortBeforeMerge(mergeSort(leftArr), mergeSort(rigthArr));
}

function sortBeforeMerge(leftArr, rightArr) {
  let sortArr = [];
  console.log('left : ' + leftArr, 'Right : ' + rightArr);

  while (leftArr.length > 0 && rightArr.length > 0) {
    let miniNums = leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift();
    sortArr.push(miniNums);
  }
  sortArr = leftArr.length > 0 ? sortArr.concat(leftArr) : sortArr.concat(rightArr);
  console.log('sortArr : ' + sortArr);
  return sortArr;
}

console.log(mergeSort([3, 1, 5, 4]));
