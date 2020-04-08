function BubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
function swap(array, idx, idx2) {
  let temp = array[idx];
  array[idx] = array[idx2];
  array[idx2] = temp;
}

const sort = BubbleSort([5, 9, 6, 5, 1, 3]);
console.log(sort);
